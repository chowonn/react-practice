import useDocumentTitle from '@/hooks/useDocumentTitle';

function Movie() {
  useDocumentTitle('영화');

  return (
    <div>
      <h2>영화</h2>
    </div>
  );
}

export default Movie;
