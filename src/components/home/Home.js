import axios from "axios";
import { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";
import './Home.css'

function Home() {


    let [trendingMoviesWeek, settrendingMoviesWeek] = useState([]);
    let tendingMoviesWeek = async () => {
        let serverUrl = 'http://localhost:3000/trending/movie/week';
        let response = await axios.get(serverUrl);
        console.log("week movie", response.data);
        settrendingMoviesWeek(response.data);
    };

    let [trendingMoviesDay, settrendingMoviesDay] = useState([]);
    let tendingMoviesDay = async () => {
        let serverUrl = 'http://localhost:3000/trending/movie/day';
        let response = await axios.get(serverUrl);
        console.log( "movie day",response.data);
        settrendingMoviesDay(response.data);
    };

    let [trendingTVday, settrendingTVday] = useState([]);
    let tendingsTVDay = async () => {
        let serverUrl = 'http://localhost:3000/trending/tv/day';
        let response = await axios.get(serverUrl);
        console.log("tv day",response.data);
        settrendingTVday(response.data);
    };

    let [trendingTVweek, settrendingTVweek] = useState([]);
    let tendingsTVweek = async () => {
        let serverUrl = 'http://localhost:3000/trending/tv/week';
        let response = await axios.get(serverUrl);
        console.log("tv week",response.data);
        settrendingTVweek(response.data);
    };

    useEffect(() => { (tendingMoviesWeek()) }, []);
    useEffect(() => { (tendingMoviesDay()) }, []);
    useEffect(() => { (tendingsTVDay()) }, []);
    useEffect(() => { (tendingsTVweek()) }, []);
    return (
        <>
            <h3>trending movies this week</h3><br/>
            <MovieList data={trendingMoviesWeek}/><br/>
            <h3>trending movies for today</h3><br/>
            <MovieList data={trendingMoviesDay}/><br/>
            <h3>trending Tv shows for today</h3><br/>
            <MovieList data={trendingTVday}/><br/>
            <h3>trending TV shows this week</h3><br/>
            <MovieList data={trendingTVweek}/>
        </>
    );
}

export default Home;