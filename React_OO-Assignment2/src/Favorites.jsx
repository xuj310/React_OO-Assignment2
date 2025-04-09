// The favorites page

import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import AnimeList from './AnimeList';

/*
    animeList - The list of anime returned
    onSelectanime - selectedAnime() function in App.jsx that goes a different plage to display the full details for an anime
*/

// Logic for adding or removing favorite
const handleFavAnime = () => {
  // Get favorites from the localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return favorites;
}

const Favorites = ({onSelectAnime}) => {
  return (
    <Fragment>
      <Container>
        <AnimeList animeList={handleFavAnime()} onSelectAnime={onSelectAnime} />
      </Container>
    </Fragment>
  )
}

export default Favorites