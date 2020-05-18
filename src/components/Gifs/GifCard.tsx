import React, { FC, useState } from "react";
import { GifType } from "../../types/GifType";
import { Image, View } from "react-native";
import style from "./style";
import { Button, Icon } from "@ui-kitten/components";
import { removeFavorite, addFavorite } from "../../utils/favorites";

type Props = {
    gif: GifType;
};

const StarIcon = (props: any) => <Icon {...props} name="star" />;

const GifCard: FC<Props> = ({ gif }) => {
    const [isFavorite, setIsFavorite] = useState(gif.isFavorite);

    return (
        <View style={style.gifCardBlock}>
            <Image
                style={style.gifBlock}
                source={{
                    uri: gif.smallGifUrl,
                }}
            />
            {isFavorite ? (
                <Button
                    status="primary"
                    size="small"
                    accessoryLeft={StarIcon}
                    onPress={async () => {
                        await removeFavorite(gif);
                        setIsFavorite(false);
                    }}
                />
            ) : (
                <Button
                    status="primary"
                    size="small"
                    appearance="ghost"
                    accessoryLeft={StarIcon}
                    onPress={async () => {
                        await addFavorite(gif);
                        setIsFavorite(true);
                    }}
                />
            )}
        </View>
    );
};

export default GifCard;
