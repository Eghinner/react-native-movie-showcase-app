import ScrollContainer from "../containers/ScrollContainer";
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Header from "../components/Header";
import { MainStackParamList } from "../@types/Stacks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorConstants } from "../constants/StyleConstants";
import { useUser } from "../hooks/useUser";
import Ionicons from "react-native-vector-icons/Ionicons";

type MovieProps = NativeStackScreenProps<MainStackParamList, "Movie">;

const Movie = (props: MovieProps) => {
    const { isFav, addFavById, removeFav } = useUser();
    const _isFav = isFav(props.route.params.movie.id);
    return (
        <ScrollContainer>
            <Header text={props.route.params.movie.title} />
            <Text style={styles.movieText}>{props.route.params.movie.overview}</Text>
            <Pressable
                style={styles.pressableContainer}
                onPress={_isFav ? () => removeFav(props.route.params.movie.id) : () => addFavById(props.route.params.movie.id)}
            >
                <Text style={{ fontSize: 30 }}>
                    {_isFav ? (
                        <Ionicons name="md-heart-outline" size="50" color="tomato" />
                    ) : (
                        <Ionicons name="md-heart" size="50" color="tomato" />
                    )}
                </Text>
            </Pressable>
        </ScrollContainer>
    );
};

const styles = StyleSheet.create({
    movieText: {
        color: ColorConstants.text,
        textAlign: "justify",
    },
    pressableContainer: {
        backgroundColor: ColorConstants.accentColor,
        marginTop: 20,
        marginHorizontal: "auto",
        width: 64,
        height: 64,
        borderRadius: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50,
    },
});

export default Movie;
