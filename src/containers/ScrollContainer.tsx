import React from "react";
import { ScrollView, StyleSheet } from "react-native";
// import { ColorConstants, SizeConstants } from "prn-video-example-styles";

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
        backgroundColor: "#2C3333",
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
});

export default ScrollContainer;
