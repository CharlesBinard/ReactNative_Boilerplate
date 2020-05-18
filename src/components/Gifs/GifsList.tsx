import React, { FC } from "react";

import { GifsType, GifType } from "../../types/GifType";
import GifCard from "./GifCard";
import style from "./style";
import { View, ScrollView, NativeScrollEvent } from "react-native";

type Props = {
    gifs: GifsType;
    handleScroll?: (e: NativeScrollEvent) => void;
};

const GifsList: FC<Props> = ({ gifs, handleScroll }) => {
    return (
        <ScrollView
            style={style.scoreViewBlock}
            onScroll={(e) => handleScroll && handleScroll(e.nativeEvent)}>
            <View style={style.gifListBlock}>
                {gifs.map((gif: GifType) => (
                    <GifCard gif={gif} key={gif.id} />
                ))}
            </View>
        </ScrollView>
    );
};

export default GifsList;
