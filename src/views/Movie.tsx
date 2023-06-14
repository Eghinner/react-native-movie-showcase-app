import ScrollContainer from "../containers/ScrollContainer";
import React from "react";
import { IMovie } from "../@types/IMovie";
import { Text, StyleSheet, Pressable } from "react-native";
import Header from "../components/Header";

interface MovieProps {
    movie?: IMovie;
    backToGenres: () => void;
}

const Movie = (props: MovieProps) => (
    <ScrollContainer>
        <Pressable onPress={() => props.backToGenres()}>
            <Text style={styles.backButton}>Back to Home</Text>
        </Pressable>
        <Header text={props.movie?.title} />
        <Text style={styles.movieText}>{props.movie?.overview}</Text>
    </ScrollContainer>
);

const styles = StyleSheet.create({
    backButton: {
        fontSize: 16,
        marginBottom: 20,
        fontWeight: "600",
        padding: 20,
        backgroundColor: "#E7F6F2",
        color: "#2C3333",
    },

    movieText: {
        color: "#E7F6F2",
    },
});

export default Movie;
