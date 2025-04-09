import Button from 'react-bootstrap/Button';
import React from 'react';

/* 
   Button for going to the favorites page
   displayFavAnime - Function in App.jsx that goes to the favorites page
*/
export default function GoHomeButton({goHome}) {

    return (
        <Button className="headerItem" onClick={goHome} variant="outline-light">Home</Button>
    );
  }