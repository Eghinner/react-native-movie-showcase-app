import React from "react";
import ScrollContainer from "../containers/ScrollContainer";
import { useUser } from "../hooks/useUser";
import { Pressable, Text, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { UserStackParamList } from "../@types/Stacks";

type UserProps = NativeStackScreenProps<UserStackParamList, "User">;

const User = (props: UserProps) => {
    const { getFavsAsArray } = useUser();
    const _movieFavsArray = getFavsAsArray();
    return (
        <ScrollContainer>
            {_movieFavsArray.map((movie) => (
                <Pressable key={movie.id} onPress={() => props.navigation.navigate("Movie", { movie })}>
                    <Text style={styles.movieTitle}>{movie.title}</Text>
                </Pressable>
            ))}
        </ScrollContainer>
    );
};

const styles = StyleSheet.create({
    movieTitle: {
        fontSize: 18,
        marginBottom: 5,
        padding: 20,
        color: "#E7F6F2",
        backgroundColor: "#607D8B",
    },
});

export default User;
