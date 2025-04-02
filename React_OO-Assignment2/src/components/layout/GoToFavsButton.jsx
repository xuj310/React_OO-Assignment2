import Button from 'react-bootstrap/Button';
import React from 'react';

export default function GoToFavsButton({displayFavAnime}) {

    return (
        <Button className="headerItem" onClick={displayFavAnime} variant="outline-light">Favorites</Button>
    );
  }