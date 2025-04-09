// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Search from './Search.jsx';
import SearchButton from './components/layout/SearchButton.jsx';

/*
    message - Info message to display to the user. This will be the amount of anime returned
    animeList - The list of anime returned
    onSelectanime - selectedAnime() function in App.jsx that goes a different plage to display the full details for an anime
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