import React from 'react';

export default function AnimeItem({ anime, onSelectAnime }) {
  return (
    <li onClick={() => onSelectAnime()}>
       <img 
        src={anime.coverImage}/>
      <h3>{anime.title}</h3>
        <p> {anime.plotSummary} </p>
    </li>
  );
}