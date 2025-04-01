import React from 'react';

export default function AnimeItemFull({ anime }) {
  return (
    <div class= 'anime-card'><li>
    <img 
     src={anime.anime.coverImage}/>
   <h3>{anime.anime.title}</h3>
   <p>Aired: {anime.anime.airingDate}</p>
   <p>{anime.anime.plotSummary}</p>
 </li></div>
    
  );
}