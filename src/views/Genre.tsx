import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import { IMovie } from "../@types/IMovie";
import { IGenre } from "../@types/IGenre";
import { StyleSheet, Text, Pressable } from "react-native";
import Header from "../components/Header";
import { getMovieByGenreId } from "../services/movieService";

interface GenreProps {
    genre?: IGenre;
    backToHome: () => void;
    chooseMovie: (movie: IMovie) => void;
}

const Genre = (props: GenreProps) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    useEffect(() => {
        if (typeof props.genre !== "undefined") {
            setMovies(getMovieByGenreId(props.genre.id));
        }
    }, [props.genre]);
    return (
        <ScrollContainer>
            <Pressable onPress={() => props.backToHome()}>
                <Text style={styles.backButton}>Back to Home</Text>
            </Pressable>
            <Header text="Movies" />
            {movies.map((movie) => (
                <Pressable key={movie.id} onPress={() => props.chooseMovie(movie)}>
                    <Text style={styles.pressableButton}>{movie.title}</Text>
                </Pressable>
            ))}
        </ScrollContainer>
    );
};

const styles = StyleSheet.create({
    pressableButton: {
        fontSize: 18,
        marginBottom: 5,
        padding: 20,
        backgroundColor: "#395B64",
        color: "#E7F6F2",
    },

    backButton: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: "600",
        padding: 20,
        backgroundColor: "#E7F6F2",
        color: "#2C3333",
    },
});

export default Genre;
