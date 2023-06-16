import React from "react";
import { StyleSheet, Text } from "react-native";
import { FontConstants, SizeConstants, ColorConstants } from "../constants/StyleConstants";

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
        marginBottom: SizeConstants.paddingLarge,
        color: ColorConstants.text,
        textAlign: "center",
    },
});

export default Header;
