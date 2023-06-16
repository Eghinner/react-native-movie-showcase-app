import { Appearance } from "react-native";
const isDarkMode = Appearance.getColorScheme() === "dark";

const FontConstants = {
    familyRegular: "sans-serif",
    sizeTitle: 25,
    sizeRegular: 14,
    weightBold: 700,
    weightMid: "600",
};

const ColorConstants = {
    background: isDarkMode ? "#1e1e1e" : "#FFF",
    primary: "#607D8B",
    accentColor: "#607D8B",
    text: isDarkMode ? "#fafafa" : "#000",
    secondaryText: "#757575",
    dividerColor: "#BDBDBD",
};

const SizeConstants = {
    paddingSmall: 2,
    paddingRegular: 8,
    paddingLarge: 16,
    borderRadius: 5,
};

export { FontConstants, ColorConstants, SizeConstants };
