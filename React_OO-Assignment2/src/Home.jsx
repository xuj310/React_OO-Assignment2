// The home/landing page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

const Home = ({animeList, onSelectAnime}) => {
  return (
    <Fragment>
      <Container>
        <div className="infoBox">
          <AnimeList animeList={animeList} onSelectAnime={onSelectAnime} />
        </div>
      </Container>
    </Fragment>
  )
}

export default Home