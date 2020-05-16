import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Layout, Text, Button } from "@ui-kitten/components";

import style from "./style";
import TopNavigation from "../navigation/TopNavigation";

const Home = () => {
    const [total, setTotal] = useState(0);

    return (
        <SafeAreaView style={style.areaView}>
            <TopNavigation />
            <Layout style={style.container}>
                <Text>Only {total} click !</Text>
                <Button onPress={() => setTotal(total + 1)}>
                    click for add 1
                </Button>
            </Layout>
        </SafeAreaView>
    );
};

export default Home;
