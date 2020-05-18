import { GifsType, GifType } from "../types/GifType";
import { AsyncStorage } from "react-native";

export const isFavorite = async (gifId: number): Promise<boolean> => {
    const favList = await getFavorites();
    return favList.findIndex((fav: GifType) => fav.id === gifId) !== -1;
};

export const getFavorites = async (): Promise<GifsType | []> => {
    const favList = await AsyncStorage.getItem("favoritesGif");
    return favList ? JSON.parse(favList) : [];
};

export const addFavorite = async (currentGif: GifType): Promise<void> => {
    const favList = await getFavorites();
    currentGif.isFavorite = true;

    await AsyncStorage.setItem(
        "favoritesGif",
        JSON.stringify([...favList, currentGif])
    );
};

export const removeFavorite = async (currentGif: GifType): Promise<void> => {
    const favList = await getFavorites();

    const indexFav = favList.findIndex(
        (fav: GifType) => fav.id === currentGif.id
    );
    if (indexFav === -1) return;
    favList.splice(indexFav, 1);

    await AsyncStorage.setItem("favoritesGif", JSON.stringify(favList));
};
