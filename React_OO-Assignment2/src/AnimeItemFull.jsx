import FavButton from './components/layout/FavButton.jsx';

// Code for displaying the full detail of an anime
export default function AnimeItemFull({ anime }) {
  
  return (
    <div className="anime-card">
    {anime ? (
      <li>
        <img src={anime.anime.coverImage}/>
        <h3>{anime.anime.title}</h3>
        <p>Aired: {anime.anime.airingDate}</p>
        <p>{anime.anime.plotSummary}</p>
        <FavButton favAnime={anime.anime}/>
      </li>
    ) : (
      <h3>Anime data is not available. Try searching again.</h3>
    )}
  </div>
  );
}