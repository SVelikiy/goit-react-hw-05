export default function Genres({ genres }) {
  return (
    <ul>
      {genres.map((genre) => {
        return <li key={genre.id}>{genre.name}</li>;
      })}
    </ul>
  );
}
