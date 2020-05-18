import React, { FC, useEffect, useState } from "react";
import { API_KEY } from "react-native-dotenv";

import api from "../../api";
import { GifsType } from "../../types/GifType";
import GifsList from "../../components/Gifs/GifsList";
import { Spinner } from "@ui-kitten/components";
import { NativeScrollEvent } from "react-native";
import { getFavorites, isFavorite } from "../../utils/favorites";

const GifsContainer: FC = () => {
    const [gifs, setGifs] = useState<GifsType>([]);
    const [posGetGif, setposGetGif] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const loadTrendingGifs = async () => {
        const favList = await getFavorites();
        setIsLoading(true);

        const { data } = await api.get("trending", {
            params: {
                key: API_KEY,
                limit: 15,
                pos: posGetGif,
            },
        });

        if (data.results) {
            const formatedData: GifsType = data.results.map((res: any) => {
                return {
                    id: res.id,
                    gifUrl: res.media[0].gif.url,
                    smallGifUrl: res.media[0].tinygif.url,
                    isFavorite: favList ? isFavorite(res.id) : false,
                };
            });
            setposGetGif(data.next);
            setIsLoading(false);
            setGifs(
                gifs.length > 65 ? formatedData : [...gifs, ...formatedData]
            );
        }
    };

    useEffect(() => {
        (async () => {
            await loadTrendingGifs();
        })();
    }, []);

    const handleScroll = async (e: NativeScrollEvent) => {
        const { layoutMeasurement, contentOffset, contentSize } = e;
        const isEndToView =
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - 50;
        if (isEndToView && !isLoading) {
            await loadTrendingGifs();
        }
    };

    return (
        <>
            {gifs.length > 0 && (
                <GifsList gifs={gifs} handleScroll={handleScroll} />
            )}
            {isLoading && <Spinner />}
        </>
    );
};

export default GifsContainer;
