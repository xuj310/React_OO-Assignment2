// The favorites page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

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