import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import { IMovie } from "../@types/IMovie";
import { IGenre } from "../@types/IGenre";
import { StyleSheet, Text, Pressable } from "react-native";
import { Header, BackButton } from "../components";
import { getMovieByGenreId } from "../services/movieService";
import { MainStackParamList } from "../@types/Stacks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// interface GenreProps {
//     genre?: IGenre;
//     backToHome: () => void;
//     chooseMovie: (movie: IMovie) => void;
// }

type GenreProps = NativeStackScreenProps<MainStackParamList, "Genre">;

const Genre = (props: GenreProps) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    useEffect(() => {
        if (typeof props.route.params.genre !== "undefined") {
            setMovies(getMovieByGenreId(props.route.params.genre.id));
        }
    }, [props.route.params.genre]);
    return (
        <ScrollContainer>
            {/* <BackButton text={"Back to Home"} onPress={() => props.backToHome()} /> */}
            <Header text="Movies" />
            {movies.map((movie) => (
                <Pressable key={movie.id} onPress={() => props.navigation.navigate("Movie", { movie })}>
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
});

export default Genre;
