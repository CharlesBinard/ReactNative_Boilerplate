import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { Layout } from "@ui-kitten/components";

import style from "./style";
import TopNavigation from "../navigation/TopNavigation";
import GifsContainer from "../containers/Gifs/GifsContainer";

type Props = {
    navigation: any;
};

const Home: FC<Props> = () => {
    return (
        <SafeAreaView style={style.areaView}>
            <TopNavigation />
            <Layout style={style.container}>
                <GifsContainer />
            </Layout>
        </SafeAreaView>
    );
};

export default Home;
