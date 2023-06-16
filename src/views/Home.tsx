import { getGenres } from "../services/movieService";
import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import { IGenre } from "../@types/IGenre";
import { StyleSheet, Text, Pressable } from "react-native";
import { Header } from "../components";
import { ColorConstants } from "../constants/StyleConstants";
import type { MainStackParamList } from "../@types/Stacks";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// interface HomeProps {
//     chooseGenre?: (genre: IGenre) => void;
// }

type HomeProps = NativeStackScreenProps<MainStackParamList, "Home">;

const Home = (props: HomeProps) => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            setGenres(await getGenres());
        };
        fetchData();
    }, []);
    return (
        <ScrollContainer>
            {/* <Header text="Movie Genres" /> */}
            {genres.map((genre) => (
                <Pressable key={genre.id} onPress={() => props.navigation.navigate("Genre", { genre })}>
                    <Text style={styles.genreTitle}>{genre.name}</Text>
                </Pressable>
            ))}
        </ScrollContainer>
    );
};

const styles = StyleSheet.create({
    genreTitle: {
        fontSize: 18,
        marginBottom: 5,
        padding: 20,
        backgroundColor: ColorConstants.primary,
        color: ColorConstants.text,
    },
});

export default Home;
