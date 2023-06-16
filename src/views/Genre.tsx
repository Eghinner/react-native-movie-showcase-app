import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import { IMovie } from "../@types/IMovie";
import { StyleSheet, Text, Pressable } from "react-native";
import { getMovieByGenreId } from "../services/movieService";
import type { MainStackParamList } from "../@types/Stacks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useUser } from "../hooks/useUser";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ColorConstants } from "../constants/StyleConstants";

type GenreProps = NativeStackScreenProps<MainStackParamList, "Genre">;

const Genre = (props: GenreProps) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const { isFav } = useUser();
    useEffect(() => {
        if (typeof props.route.params.genre !== "undefined") {
            setMovies(getMovieByGenreId(props.route.params.genre.id));
        }
    }, [props.route.params.genre]);
    return (
        <ScrollContainer>
            {movies.map((movie) => (
                <Pressable key={movie.id} onPress={() => props.navigation.navigate("Movie", { movie })}>
                    <Text style={[styles.pressableButton, isFav(movie.id) ? styles.favColor : styles.normalColor]}>
                        {isFav(movie.id) && <Ionicons name="md-heart" size={20} color="tomato" />}
                        {movie.title}
                    </Text>
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
        color: "#E7F6F2",
        display: "flex",
        alignItems: "center",
        columnGap: 8,
    },
    normalColor: {
        backgroundColor: "#395B64",
    },
    favColor: {
        backgroundColor: ColorConstants.accentColor,
    },
});

export default Genre;
