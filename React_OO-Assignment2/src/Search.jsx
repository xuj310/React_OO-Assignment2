import React from 'react';

// Input field to search for an anime

export default function searchAnime({ query, setQuery }) {
  return (
    <input
      className='search'
      type='text'
      placeholder='Type in an Anime...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
