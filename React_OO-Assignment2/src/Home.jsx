// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

/*
    message - Info message to display to the user. This will be the amount of anime returned
    animeList - The list of anime returned
    onSelectanime - selectedAnime() function in App.jsx that goes a different plage to display the full details for an anime
*/

const Home = ({message, animeList, onSelectAnime}) => {
  return (
    <Fragment>
      <Container>
      <div>
          <AnimeList message={message} animeList={animeList} onSelectAnime={onSelectAnime} />
          </div>
      </Container>
    </Fragment>
  )
}

export default Home