import useDocumentTitle from '@/hooks/useDocumentTitle';

function Store() {
  useDocumentTitle('스토어');

  return (
    <div>
      <h2>스토어</h2>
    </div>
  );
}

export default Store;
