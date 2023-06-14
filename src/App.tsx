import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IGenre } from "./@types/IGenre";
import { IMovie } from "./@types/IMovie";
import Genre from "./views/Genre";
import Home from "./views/Home";
import Movie from "./views/Movie";

const App = () => {
    const PAGES = {
        HOME: 1,
        GENRE: 2,
        MOVIE: 3,
    };
    const [page, setPage] = useState<number>(PAGES.HOME);
    const [genre, setGenre] = useState<IGenre | undefined>(undefined);
    const [movie, setMovie] = useState<IMovie | undefined>(undefined);
    const chooseGenre = (lGenre: IGenre) => {
        setGenre(lGenre);
        setPage(PAGES.GENRE);
    };
    const chooseMovie = (lMovie: IMovie) => {
        setMovie(lMovie);
        setPage(PAGES.MOVIE);
    };
    const backToGenres = () => {
        setMovie(undefined);
        setPage(PAGES.GENRE);
    };
    const backToHome = () => {
        setMovie(undefined);
        setGenre(undefined);
        setPage(PAGES.HOME);
    };
    switch (page) {
        case PAGES.HOME:
            return <Home chooseGenre={chooseGenre} />;
        case PAGES.GENRE:
            return <Genre genre={genre} backToHome={backToHome} chooseMovie={chooseMovie} />;
        case PAGES.MOVIE:
            return <Movie backToGenres={backToGenres} movie={movie} />;
    }
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ImageBackground: "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
});
