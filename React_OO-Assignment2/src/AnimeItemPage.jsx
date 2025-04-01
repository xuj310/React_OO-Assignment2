import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeItemFull from './AnimeItemFull';

const AnimeItemPage = ({anime}) => {
  return (
    <Fragment>
      <Container>
      <div className="box">
          <AnimeItemFull anime={anime} />
          </div>
      </Container>
    </Fragment>
  )
}

export default AnimeItemPage