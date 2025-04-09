import FavButton from './components/layout/FavButton.jsx';

/*  
    Code for displaying the full detail of an anime
    anime - The anime to display the details for
*/
export default function AnimeItemFull({ anime }) {
  
  return (
    <div className="anime-card">
    {anime ? (
      <li>
        <img src={anime.coverImage}/>
        <h3>{anime.title}</h3>
        <p>Aired: {anime.airingDate}</p>
        <p>{anime.plotSummary}</p>
        <FavButton favAnime={anime}/>
      </li>
    ) : (
      <h3>Anime data is not available. Try searching again.</h3>
    )}
  </div>
  );
}