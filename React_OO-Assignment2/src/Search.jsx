import React, { useEffect } from 'react';
// Input field to search for an anime

export default function SearchAnime({ query, setQuery, fetchAnime }) {

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchAnime();
    }
  };

  useEffect(() => {
    setQuery("");
  }, [setQuery]); 

  return (
    <input
      className='search'
      type='text'
      placeholder='Type in an Anime...'
      value={query}
      onKeyDown={handleKeyPress}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
