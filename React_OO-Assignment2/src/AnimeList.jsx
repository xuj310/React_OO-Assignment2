import AnimeItem from "./animeItem";

export default function AnimeList({animeList, onSelectAnime}) {
  return (
    <ul className='list'>
      {animeList.map((anime) => (
        <AnimeItem anime={anime} key={anime.title} onSelectAnime={onSelectAnime} />
      ))}
    </ul>
  );
}
