import React from "react";
import { SafeAreaView } from "react-native";
import { Layout } from "@ui-kitten/components";

import style from "./style";
import TopNavigation from "../navigation/TopNavigation";
import GifsContainer from "../containers/Gifs/GifsContainer";

const Home = () => {
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
