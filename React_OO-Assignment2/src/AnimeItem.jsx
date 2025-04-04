import React from 'react';

/* This represents each returned result from a search of favorites list. 
   Users can click on the result to see more detail.
*/
export default function AnimeItem({ anime, onSelectAnime }) {
  return (
    <li onClick={() => onSelectAnime({anime})}>
      <img src={anime.coverImage}/>
      <h3>{anime.title}</h3>
      <p>Aired: {anime.airingDate}</p>
    </li>
  );
}