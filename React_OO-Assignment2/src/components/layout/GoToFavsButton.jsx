import Button from 'react-bootstrap/Button';
import React from 'react';

// Code for going to favorites page
export default function GoToFavsButton({displayFavAnime}) {

    return (
        <Button className="headerItem" onClick={displayFavAnime} variant="outline-light">Favorites</Button>
    );
  }