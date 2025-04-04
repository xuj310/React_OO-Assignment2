import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeItemFull from './AnimeItemFull';

// Page for displaying an item
const AnimeItemPage = ({anime}) => {
  return (
    <Fragment>
      <Container>
        <div className="animeCardAlignment">
          <AnimeItemFull anime={anime} />
        </div>
      </Container>
    </Fragment>
  )
}

export default AnimeItemPage