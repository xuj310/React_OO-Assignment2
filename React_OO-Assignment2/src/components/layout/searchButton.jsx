import Button from 'react-bootstrap/Button';
import React from 'react';

/* 
   Search button
   fetchAnime - Function in App.jsx that fetches the list of anime
*/
export default function SearchButton({fetchAnime}) {
    return (
        <Button className="headerItem" onClick={fetchAnime} variant="outline-light">Search</Button>
    );
  }