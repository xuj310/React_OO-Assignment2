// Routes
import { Routes, Route, useNavigate } from 'react-router-dom';
import Results from './Results.jsx';
import NotFound from './NotFound';
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useState } from 'react';
import GoToFavsButton from './components/layout/GoToFavsButton.jsx';
import AnimeItemPage from './AnimeItemPage.jsx';
import Favorites from './Favorites.jsx';
import FrontPage from './FrontPage.jsx';
import ThemeChangeButton from './components/layout/ThemeChangeButton.jsx';
import GoHomeButton from './components/layout/GoHomeButton.jsx';

// Input validation to ensure the user is not sending an empty query
export function validateQuery(query) {
  return query.trim() === "" ? false : true;
}

function App() {

  const [query, setQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [currentlySelectedAnime, setSelectedAnime] = useState();
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  // Set the selected anime and navigate to to the page to display the anime
  function selectedAnime(anime) {
    setSelectedAnime(anime);
    navigate('/AnimeItemPage');
  }

  // Returns to the home page
  function goHome() {
    navigate('/');
  }

  // Display the favorites in the current page
  const displayFavAnime = () => {
    setMessage("");
    // Retrieve existing favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setAnimeList(favorites);
    // Navigate back to the root
    navigate('/Favorites');
  }

  // Look up anime using 'Anime News Network'
  async function fetchAnime() {

    navigate('/Results');

    // Clear any existing list
    setAnimeList([])
    
    if (!validateQuery(query)) {
      setMessage("Your search query was empty");
    }
    else {
      setMessage("Fetching results...");
      try {
        // Perform the query
        const response = await fetch(
          `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~${query}`, {credentials: "omit"}
        );
        const returnData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(returnData, 'application/xml');
        /* Generate the list of query results. The API returns an xml that needs to be parsed for the appropriate information  */
        const animeList = Array.from(xmlDoc.getElementsByTagName('anime')).map((anime) => {
          const title = anime.getAttribute('name'); // Get the title 
          const plotSummary = Array.from(anime.getElementsByTagName('info')).find(
            (info) => info.getAttribute('type') === 'Plot Summary'
          )?.textContent; // Get the Plot Summary
          const coverImage = Array.from(anime.getElementsByTagName('info')).find(
            (info) => info.getAttribute('type') === 'Picture'
          )?.getAttribute('src'); // Get the cover image
          const airingDate = Array.from(anime.getElementsByTagName('info')).find(
            (info) => info.getAttribute('type') === 'Vintage'
          )?.textContent; // Get the airing date 

          return { title, plotSummary, coverImage, airingDate };
        });
  
        setMessage(animeList.length + " results");
        setAnimeList(animeList);
      } catch (err) {
        setMessage("There was an error with your query");
      }
    }
    
  }

  // The Navbar represents the header bar and what's in it
  return (
    <>
      <Navbar bg='dark' variant='dark'>
      <Container>
          <Nav>   
              <GoHomeButton goHome={goHome} />
              <div className="right-aligned">
                <ThemeChangeButton displayFavAnime={displayFavAnime} className="headerItem"/>
                <GoToFavsButton displayFavAnime={displayFavAnime} className="headerItem"/>
              </div>            
          </Nav>
      </Container>

      </Navbar>
        <Routes>
          <Route path="/" element={<FrontPage query={query} setQuery={setQuery} fetchAnime={fetchAnime}/>} />
          <Route path="/Results" element={<Results message={message} animeList={animeList} onSelectAnime={selectedAnime} />} />
          <Route path="/Favorites" element={<Favorites animeList={animeList} onSelectAnime={selectedAnime} />} />
          <Route path="/AnimeItemPage" element={<AnimeItemPage anime={currentlySelectedAnime} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
