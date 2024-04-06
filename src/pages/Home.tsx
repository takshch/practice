import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="w-screen h-screen bg-slate-100 p-10 flex flex-col items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl mb-10">Adento Tasks</h1>
        <Link to={'/infinite-scroll'} className="text-2xl underline mb-3">
          1. Infinite Scroll
        </Link>
        <Link to={'/grid'} className="text-2xl underline">
          2. Grid
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
