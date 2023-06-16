import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import type { MainStackParamList, UserStackParamList } from "./@types/Stacks";
import Genre from "./views/Genre";
import Home from "./views/Home";
import Movie from "./views/Movie";
import User from "./views/User";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ColorConstants } from "./constants/StyleConstants";
import { UserProvider } from "./context/UserProvider";

const MainStack = createNativeStackNavigator<MainStackParamList>();
const UserStack = createNativeStackNavigator<UserStackParamList>();

const MainStackScreen = () => (
    <MainStack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            animation: "slide_from_right",
            headerStyle: { backgroundColor: ColorConstants.background },
            headerTintColor: ColorConstants.text,
            headerTitleStyle: { fontWeight: "bold" },
        }}
    >
        <MainStack.Screen name="Home" component={Home} options={{ title: "Movie Genres" }} />
        <MainStack.Screen name="Genre" component={Genre} options={{ title: "Movies" }} />
        <MainStack.Screen name="Movie" component={Movie} options={{ title: "" }} />
    </MainStack.Navigator>
);

const UserStackScreen = () => (
    <UserStack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            animation: "slide_from_right",
            headerStyle: { backgroundColor: ColorConstants.background },
            headerTintColor: ColorConstants.text,
            headerTitleStyle: { fontWeight: "bold" },
        }}
    >
        <UserStack.Screen name="User" component={User} options={{ title: "Favorite Movies" }} />
        <UserStack.Screen name="Movie" component={Movie} options={{ title: "" }} />
    </UserStack.Navigator>
);

const TabNavigator = createBottomTabNavigator();

const App = () => (
    <UserProvider>
        <NavigationContainer>
            <TabNavigator.Navigator screenOptions={{ tabBarActiveTintColor: "#000", tabBarInactiveTintColor: "#000" }}>
                <TabNavigator.Screen
                    name="Main"
                    component={MainStackScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <Ionicons name="home-outline" />,
                    }}
                />
                <TabNavigator.Screen
                    name="UserStack"
                    component={UserStackScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <Ionicons name="md-person" />,
                    }}
                />
            </TabNavigator.Navigator>
        </NavigationContainer>
    </UserProvider>
);

export default App;
