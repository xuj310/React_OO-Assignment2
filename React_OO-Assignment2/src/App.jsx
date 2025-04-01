// Routes
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from './Search.jsx';
import { useState } from 'react';
import SearchButton from './components/layout/searchButton.jsx';

function App() {

  const [query, setQuery] = useState('');
  const [animeList, setAnimeList] = useState([]);

  async function fetchAnime() {
    try {
      const response = await fetch(
        `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~${query}`
      );
      const returnData = await response.text();

      // TODO: Handle when there are no results

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

        return { title, plotSummary, coverImage };
      });

      setAnimeList(animeList);
    } catch (err) {
      // TODO
    } finally {
      // TODO
    }
  }

  return (
    <>
      <Navbar bg='dark' variant='dark'>
      <Container>
          <Nav>
              <Search className="headerItem" query={query} setQuery={setQuery} />
              <div className="right-aligned">
                <SearchButton fetchAnime={fetchAnime} className="headerItem"/>
              </div>            
          </Nav>
      </Container>

      </Navbar>
        <Routes>
          <Route path="/" element={<Home animeList={animeList} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default App
