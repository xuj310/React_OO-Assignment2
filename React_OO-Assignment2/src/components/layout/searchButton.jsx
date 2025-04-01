import Button from 'react-bootstrap/Button';
import React from 'react';

export default function searchButton({fetchAnime}) {
    return (
        <Button className="headerItem" onClick={fetchAnime} variant="outline-light">Search</Button>
    );
  }