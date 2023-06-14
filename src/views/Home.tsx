import { getGenres } from "../services/movieService";
import ScrollContainer from "../containers/ScrollContainer";
import React, { useEffect, useState } from "react";
import { IGenre } from "../@types/IGenre";
import { StyleSheet, Text, Pressable } from "react-native";
import Header from "../components/Header";

interface HomeProps {
    chooseGenre: (genre: IGenre) => void;
}

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
            <Header text="Movie Genres" />
            {genres.map((genre) => (
                <Pressable key={genre.id} onPress={() => props.chooseGenre(genre)}>
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
        backgroundColor: "#395B64",
        color: "#E7F6F2",
    },
});

export default Home;
