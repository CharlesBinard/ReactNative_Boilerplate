import React, { FC } from "react";
import { Layout } from "@ui-kitten/components";
import style from "./style";
import { SafeAreaView } from "react-native";
import TopNavigation from "../navigation/TopNavigation";
import FavContainer from "../containers/Fav/FavContainer";

type Props = {
    navigation: any;
};

const Favorites: FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={style.areaView}>
            <TopNavigation />
            <Layout style={style.container}>
                <FavContainer navigation={navigation} />
            </Layout>
        </SafeAreaView>
    );
};

export default Favorites;
