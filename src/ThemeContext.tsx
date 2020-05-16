import React from "react";

const ThemeContext = React.createContext({
    theme: "light",
    toggleTheme: () => {
        console.log("Change Theme");
    },
});

export default ThemeContext;
