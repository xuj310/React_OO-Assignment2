import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeItemFull from './AnimeItemFull';

/*
    Page for displaying an anime
    anime - The anime to display the details for
 */
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