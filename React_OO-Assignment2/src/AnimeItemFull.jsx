import React from 'react';
import FavButton from './components/layout/FavButton.jsx';

export default function AnimeItemFull({ anime }) {
  return (
    <div className= 'anime-card'>
      <li>
        <img src={anime.anime.coverImage}/>
        <h3>{anime.anime.title}</h3>
        <p>Aired: {anime.anime.airingDate}</p>
        <p>{anime.anime.plotSummary}</p>
        <FavButton favAnime={anime.anime}/>
      </li>
    </div>
  );
}