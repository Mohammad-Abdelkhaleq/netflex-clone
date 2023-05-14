
import Home from './components/home/Home';
import Modalmovie from './components/ModalMovie/Modalmovie';
import Movie from './components/Movie/Movie';
import MovieList from './components/MovieList/MovieList';
import Navbar from './components/navbar/Navbar';
import FavList from './components/FavList/FavList';



function App() {
  return (
    <>
      <Navbar />;
      <Home />;
      <FavList />;
    </>
  );
}

export default App;
