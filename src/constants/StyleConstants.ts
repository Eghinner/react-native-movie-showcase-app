import { Appearance } from "react-native";
const isDarkMode = Appearance.getColorScheme() === "dark";

const FontConstants = {
    familyRegular: "sans-serif",
    sizeTitle: 18,
    sizeRegular: 14,
    weightBold: "bold",
    weightMid: "600",
};

const ColorConstants = {
    background: isDarkMode ? "#455A64" : "#CFD8DC",
    primary: "#607D8B",
    accentColor: "#607D8B",
    text: isDarkMode ? "#E7F6F2" : "#212121",
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
