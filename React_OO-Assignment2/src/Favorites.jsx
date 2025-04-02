// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

const Favorites = ({animeList, onSelectAnime}) => {
  return (
    <Fragment>
      <Container>
      <div className="box">
          <AnimeList animeList={animeList} onSelectAnime={onSelectAnime} />
          </div>
      </Container>
    </Fragment>
  )
}

export default Favorites