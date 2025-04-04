import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeItemFull from './AnimeItemFull';

const AnimeItemPage = ({anime}) => {
  return (
    <Fragment>
      <Container>
        <AnimeItemFull anime={anime} />
      </Container>
    </Fragment>
  )
}

export default AnimeItemPage