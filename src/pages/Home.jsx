import MoviePoster from '@/components/MoviePoster';
import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('홈');

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mt-8 ml-4 font-bold text-3xl item-start">무비차트</h1>
      <MoviePoster />
    </div>
  );
}

export default Home;
