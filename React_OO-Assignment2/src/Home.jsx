// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

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