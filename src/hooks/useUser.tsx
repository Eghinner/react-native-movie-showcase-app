import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { getMovieById } from "../services/movieService";
import { IMovie } from "../@types/IMovie";

export function useUser() {
    const context = useContext(UserContext);
    const { name, favs, addFav, removeFav } = context;
    const addFavById = (favId: number): void => {
        const movie = getMovieById(favId);
        if (!movie) {
            return;
        }
        addFav(movie);
    };
    const getFavsAsArray = (): IMovie[] => {
        return Object.values(favs);
    };
    const isFav = (favId: number): boolean => {
        return !!favs[favId];
    };
    return {
        name,
        favs,
        getFavsAsArray,
        removeFav,
        addFavById,
        isFav,
    };
}
