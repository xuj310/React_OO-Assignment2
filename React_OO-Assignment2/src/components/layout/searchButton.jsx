import Button from 'react-bootstrap/Button';
import React from 'react';

// Search button
export default function SearchButton({fetchAnime}) {
    return (
        <Button className="headerItem" onClick={fetchAnime} variant="outline-light">Search</Button>
    );
  }