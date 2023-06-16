import React, { useState, useEffect, createContext } from "react";
import { IMovie } from "../@types/IMovie";
import { UserContextType } from "../@types/UserContextType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext<UserContextType>({ name: "", favs: [] });

export function UserProvider(props: any) {
    const [name, setName] = useState<string>("John");
    const [favs, setFavs] = useState<{ [favId: number]: IMovie }>({});

    useEffect(() => {
        AsyncStorage.getItem("HYDRATE::FAVORITE_MOVIES").then((value) => {
            if (value) {
                setFavs(JSON.parse(value));
            }
        });
    }, []);
    useEffect(() => {
        if (!!favs) {
            AsyncStorage.setItem("HYDRATE::FAVORITE_MOVIES", JSON.stringify(favs));
        }
    }, [favs]);

    const addFav = (fav: IMovie): void => {
        if (!favs[fav.id]) {
            const _favs = { ...favs };
            _favs[fav.id] = fav;
            setFavs(_favs);
        }
    };

    const removeFav = (favId: number): void => {
        if (favs[favId]) {
            const _favs = { ...favs };
            delete _favs[favId];
            setFavs(_favs);
        }
    };

    const value = {
        name,
        favs,
        addFav,
        removeFav,
    };
    return <UserContext.Provider value={value} {...props} />;
}
