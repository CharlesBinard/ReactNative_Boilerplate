import React, { FC, useState, useEffect } from "react";
import { getFavorites } from "../../utils/favorites";
import GifsList from "../../components/Gifs/GifsList";
import { Spinner } from "@ui-kitten/components";
import { GifsType } from "../../types/GifType";

type Props = {
    navigation: any;
};

const FavContainer: FC<Props> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [gifs, setGifs] = useState<GifsType>([]);

    useEffect(() => {
        navigation.addListener("focus", async () => {
            const favList = await getFavorites();
            console.log(favList);
            setGifs(favList);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {gifs.length > 0 && <GifsList gifs={gifs} />}
            {isLoading && <Spinner />}
        </>
    );
};

export default FavContainer;
