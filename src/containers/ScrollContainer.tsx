import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ColorConstants } from "../constants/StyleConstants";

interface ScrollContainerProps {
    children: React.ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.contentContainer}
            style={styles.backgroundStyle}
        >
            {props.children}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: ColorConstants.background,
    },
    contentContainer: {
        padding: 20,
    },
});

export default ScrollContainer;
