import React from 'react';

export default function AnimeItem({ anime, onSelectAnime }) {
  return (
    <li onClick={() => onSelectAnime({anime})}>
      <img 
      src={anime.coverImage}/>
      <h3>{anime.title}</h3>
      <p>Aired: {anime.airingDate}</p>
    </li>
  );
}