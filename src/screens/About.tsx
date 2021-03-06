import React from "react";
import { Layout, Text } from "@ui-kitten/components";
import { API_KEY, API_URL } from "react-native-dotenv";
import style from "./style";
import { SafeAreaView } from "react-native";
import TopNavigation from "../navigation/TopNavigation";

const About = () => {
    return (
        <SafeAreaView style={style.areaView}>
            <TopNavigation />
            <Layout style={style.container}>
                <Text>Api used is: {API_URL}</Text>
                <Text>With this API Key: {API_KEY}</Text>
            </Layout>
        </SafeAreaView>
    );
};

export default About;
