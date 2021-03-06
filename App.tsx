import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { YellowBox } from "react-native";
//
import TabNavigation from "./src/navigation/TabNavigation";
import ThemeContext from "./src/ThemeContext";
import theme from "./theme.json";
import "./reactotronConfig";

YellowBox.ignoreWarnings(["Remote debugger"]);

const App = () => {
    const [usedTheme, setUsedTheme] = useState<"dark" | "light">("dark");

    const toggleTheme = () => {
        const nextTheme = usedTheme === "light" ? "dark" : "light";
        setUsedTheme(nextTheme);
    };

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
