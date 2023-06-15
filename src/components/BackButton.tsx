import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { SizeConstants, ColorConstants } from "../constants/StyleConstants";

interface BackButtonProps {
    text: string;
    onPress: () => void;
}

const BackButton = (props: BackButtonProps) => {
    return (
        <Pressable onPress={props.onPress} style={styles.backButton}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    backButton: {
        padding: SizeConstants.paddingLarge,
        marginBottom: SizeConstants.paddingLarge,
        backgroundColor: ColorConstants.primary,
        borderRadius: SizeConstants.borderRadius,
    },

    text: {
        color: ColorConstants.text,
    },
});

export default BackButton;
