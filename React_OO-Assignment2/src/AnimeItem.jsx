import React from 'react';
import FavButton from './components/layout/FavButton.jsx';

/* 
   This represents each returned result from a search of favorites list. 
   Users can click on the result to see more detail.

   anime - The anime to display the details for
   onSelectAnime - selectedAnime() function in App.jsx that goes a different plage to display the full details for an anime
*/
export default function AnimeItem({ anime, onSelectAnime }) {
  return (
    <div className='animeItem'>
      <li>
        <img src={anime.coverImage}/>
        <div className='infoRow' onClick={() => onSelectAnime(anime)}>
        <h3>{anime.title}</h3>
        <p>Aired: {anime.airingDate}</p>
        </div>
        <div className='favButton' >
          <FavButton favAnime={anime}/> 
        </div>
      </li>
      
    </div>
  );
}