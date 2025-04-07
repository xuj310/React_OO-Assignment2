// The favorites page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

/*
    animeList - The list of anime returned
    onSelectanime - selectedAnime() function in App.jsx that goes a different plage to display the full details for an anime
*/
const Favorites = ({animeList, onSelectAnime}) => {
  return (
    <Fragment>
      <Container>
        <AnimeList animeList={animeList} onSelectAnime={onSelectAnime} />
      </Container>
    </Fragment>
  )
}

export default Favorites