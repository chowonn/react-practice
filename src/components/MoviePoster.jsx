import useFetchData from '@/hooks/useFetchData';
import MovieItem from '@/pages/MovieItem';

const PB_PRODUCTS_ENDPOINT = `
https://fast-fall.pockethost.io/api/collections/movieChart/records
`;

function MoviePoster() {
  const { data, isLoading, error } = useFetchData(PB_PRODUCTS_ENDPOINT);
  console.log(data);

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <ul className="flex gap-8 m-4 justify-center">
      {data.items?.map((item) => (
        <MovieItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MoviePoster;
