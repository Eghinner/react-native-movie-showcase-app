export type UserContextType = {
    name: string;
    favs: { [favId: number]: IMovie };
    addFav?: (IMovie) => {};
    removeFav?: (number) => {};
};
