import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import * as eva from "@eva-design/eva";
import axios from "axios";

import { API_URL, API_KEY } from "react-native-dotenv";
//
import TabNavigation from "./src/navigation/TabNavigation";
import ThemeContext from "./src/ThemeContext";
import theme from "./theme.json";
import "./reactotronConfig";

const App = () => {
    const [usedTheme, setUsedTheme] = useState<"dark" | "light">("dark");

    const toggleTheme = () => {
        const nextTheme = usedTheme === "light" ? "dark" : "light";
        setUsedTheme(nextTheme);
    };

    axios.create({
        baseURL: API_URL,
        timeout: 1000,
        params: {
            api_key: API_KEY,
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
        },
    });

    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ThemeContext.Provider value={{ theme: usedTheme, toggleTheme }}>
                <ApplicationProvider
                    {...eva}
                    theme={{ ...eva[usedTheme], ...theme }}>
                    <NavigationContainer>
                        <TabNavigation />
                    </NavigationContainer>
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    );
};

export default App;
