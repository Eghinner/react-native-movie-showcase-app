import React from "react";
import { StyleSheet, Text } from "react-native";

interface HeaderProps {
    text?: string;
}
const Header = (props: HeaderProps) => {
    return <Text style={styles.title}>{props.text}</Text>;
};
const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 25,
        color: "#E7F6F2",
    },
});

export default Header;
