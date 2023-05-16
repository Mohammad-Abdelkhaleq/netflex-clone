import axios from "axios";
import { useEffect } from "react";
import FavMovieList from "../MovieList/FavMovieList";
import { useState } from "react";

function FavList() {
    let [favMovies, setfavMovies] = useState([]);
    let favMoviesList = async () => {
        let serverUrl = `${process.env.REACT_APP_SERVER_URL}/getmovies`;
        let response = await axios.get(serverUrl);
        console.log("fav movie", response.data);
        
        setfavMovies(response.data);
    }
    
    
    useEffect(() => { favMoviesList() }, []);

    let newDataAfterDelete=(data)=>{
        setfavMovies(data);
    }
    let newDataAfterUpdate=(data)=>{
        setfavMovies(data);
    }
    return (
        <>
        <h3>Favourite Movies</h3><br/>
        <FavMovieList data={favMovies} newDataAfterDelete={newDataAfterDelete} newDataAfterUpdate={newDataAfterUpdate} />
        </>
      );
    }
export default FavList;