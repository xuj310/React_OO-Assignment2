import AnimeItem from "./animeItem";

/*
    Search/Favorites results list
    message - Info message to display to the user. This will be the amount of anime returned
    animeList - The list of anime returned
    onSelectanime - selectedAnime() function in App.jsx that goes a different plage to display the full details for an anime
 */
export default function AnimeList({message, animeList, onSelectAnime}) {
  return (
    <div className='list'>
      <h3 className='infoMessage'>{message}</h3>
        <ul>
          {animeList.map((anime) => (
            <AnimeItem anime={anime} onSelectAnime={onSelectAnime} />
          ))}
        </ul>
    </div>
  );
}
