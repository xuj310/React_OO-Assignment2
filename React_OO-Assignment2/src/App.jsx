// Routes
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from './Search.jsx';
import { useState } from 'react';
import SearchButton from './components/layout/SearchButton.jsx';
import GoToFavsButton from './components/layout/GoToFavsButton.jsx';
import AnimeItemPage from './AnimeItemPage.jsx';
import Favorites from './Favorites.jsx';

function App() {

  const [query, setQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);
  const [currentlySelectedAnime, setSelectedAnime] = useState();
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  function selectedAnime(anime) {
    setSelectedAnime(anime);
    navigate('/AnimeItemPage');
  }

  const displayFavAnime = () => {
    setMessage("");
    // Retrieve existing favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [' '];
    setAnimeList(favorites);
    navigate('/');
}

  async function fetchAnime() {

    if (location.pathname != '/')
    {
      navigate('/');
    }

    setAnimeList([])

    if (query.trim() == "") 
      setMessage("Your search query was empty");
    else
    {
      setMessage("Fetching results...");
      try {
        const response = await fetch(
          `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~${query}`, {credentials: "omit"}
        );
        const returnData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(returnData, 'application/xml');
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

  return (
    <>
      <Navbar bg='dark' variant='dark'>
      <Container>
          <Nav>
              <Search className="headerItem" query={query} setQuery={setQuery} />
              <div className="right-aligned">
                <GoToFavsButton displayFavAnime={displayFavAnime} className="headerItem"/>
                <SearchButton fetchAnime={fetchAnime} className="headerItem"/>
              </div>            
          </Nav>
      </Container>

      </Navbar>
        <Routes>
          <Route path="/" element={<Home message={message} animeList={animeList} onSelectAnime={selectedAnime} />} />
          <Route path="/Favorites" element={<Favorites animeList={animeList} onSelectAnime={selectedAnime} />} />
          <Route path="/AnimeItemPage" element={<AnimeItemPage anime={currentlySelectedAnime} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
