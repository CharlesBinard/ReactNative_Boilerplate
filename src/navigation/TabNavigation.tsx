import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import Home from "../screens/Home";
import About from "../screens/About";

const Tab = createBottomTabNavigator();

type Props = {
    navigation: any;
    state: any;
};

const BottomTabBar: FC<Props> = ({ navigation, state }) => (
    <BottomNavigation
        selectedIndex={state.index}
        onSelect={(index) => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="About" />
    </BottomNavigation>
);

const TabNavigation = () => (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
);

export default TabNavigation;
