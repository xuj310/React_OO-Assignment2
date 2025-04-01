import React from 'react';

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
