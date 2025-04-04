import AnimeItem from "./animeItem";

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
