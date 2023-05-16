
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import FavList from './components/FavList/FavList';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
      <Navbar />;
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourites" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
