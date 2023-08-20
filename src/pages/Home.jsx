import useDocumentTitle from "@/hooks/useDocumentTitle";


function Home() {
  useDocumentTitle('홈');

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default Home;