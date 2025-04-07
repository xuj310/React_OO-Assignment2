import Button from 'react-bootstrap/Button';
import React from 'react';

/* 
   Button for going to the favorites page
   displayFavAnime - Function in App.jsx that goes to the favorites page
*/
export default function GoToFavsButton({displayFavAnime}) {

    return (
        <Button className="headerItem" onClick={displayFavAnime} variant="outline-light">Favorites</Button>
    );
  }