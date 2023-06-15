import ScrollContainer from "../containers/ScrollContainer";
import React from "react";
import { Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { MainStackParamList } from "../@types/Stacks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type MovieProps = NativeStackScreenProps<MainStackParamList, "Movie">;

const Movie = (props: MovieProps) => (
    <ScrollContainer>
        <Header text={props.route.params.movie.title} />
        <Text style={styles.movieText}>{props.route.params.movie.overview}</Text>
    </ScrollContainer>
);

const styles = StyleSheet.create({
    movieText: {
        color: "#2C3333",
        textAlign: "justify",
    },
});

export default Movie;
