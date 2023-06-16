import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackParamList } from "./@types/Stacks";
import Genre from "./views/Genre";
import Home from "./views/Home";
import Movie from "./views/Movie";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ColorConstants } from "./constants/StyleConstants";
import { UserProvider } from "./context/UserProvider";

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainStackScreen = () => (
    <MainStack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            headerShadowVisible: true,
            animation: "slide_from_right",
            headerStyle: { backgroundColor: ColorConstants.background },
            headerTintColor: ColorConstants.text,
            // headerTransparent: true,
        }}
    >
        <MainStack.Screen name="Home" component={Home} options={{ title: "Movie Genres", gestureEnabled: true }} />
        <MainStack.Screen name="Genre" component={Genre} options={{ title: "Movies" }} />
        <MainStack.Screen name="Movie" component={Movie} options={{ title: "" }} />
    </MainStack.Navigator>
);

const TabNavigator = createBottomTabNavigator();

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <TabNavigator.Navigator screenOptions={{ tabBarActiveTintColor: "#000", tabBarInactiveTintColor: "blue" }}>
                    <TabNavigator.Screen
                        name="Main"
                        component={MainStackScreen}
                        options={{
                            headerShown: false,
                            tabBarIcon: () => <Ionicons name="home-outline" />,
                        }}
                    />
                    {/* <TabNavigator.Screen name="User" component={User} /> */}
                </TabNavigator.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
