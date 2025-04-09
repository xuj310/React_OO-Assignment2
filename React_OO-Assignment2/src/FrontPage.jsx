// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search.jsx';
import SearchButton from './components/layout/SearchButton.jsx';

/*
    query - The current query
    setQuery - set the Query
    fetchAnime - fetch the anime from the api based on the query
*/

const FrontPage = ({query, setQuery, fetchAnime}) => {
  return (
    <Fragment>
      <Container>
        <div className='animeCardAlignment'>
          <div className='welcome-box'>
          <h3>Welcome to Anime Engine!</h3>
            <li>
              <Search query={query} setQuery={setQuery} fetchAnime={fetchAnime} />
              <SearchButton fetchAnime={fetchAnime}/>
            </li>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default FrontPage