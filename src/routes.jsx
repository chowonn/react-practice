import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Movie from './pages/Movie';
import Ticketing from './pages/Ticketing';
import Theater from './pages/Theater';
import Store from './pages/Store';
import Event from './pages/Event';
import Benefits from './pages/Benefits';
import Home from './pages/Home';

const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie" element={<Movie />} />
      <Route path="theater" element={<Theater />} />
      <Route path="ticketing" element={<Ticketing />} />
      <Route path="store" element={<Store />} />
      <Route path="event" element={<Event />} />
      <Route path="benefits" element={<Benefits />} />
    </Route>
  )
);

export default router;
