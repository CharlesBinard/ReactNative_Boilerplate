import React, { useContext, useState } from "react";
import {
    Icon,
    Layout,
    MenuItem,
    OverflowMenu,
    TopNavigation,
    TopNavigationAction,
    IconProps,
} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import ThemeContext from "../ThemeContext";

// const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

// const EditIcon = (props) => <Icon {...props} name="edit" />;

const MenuIcon = (props: IconProps) => <Icon {...props} name="more-vertical" />;

const InfoIcon = (props: IconProps) => <Icon {...props} name="info" />;

// const LogoutIcon = (props) => <Icon {...props} name="log-out" />;

const TopNavigationAccessoriesShowcase = () => {
    const themeContext = useContext(ThemeContext);

    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );

    const renderRightActions = () => (
        <Layout>
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem
                    accessoryLeft={InfoIcon}
                    title="Switch Theme"
                    onPress={themeContext.toggleTheme}
                />
            </OverflowMenu>
        </Layout>
    );

    // const renderBackAction = () => <TopNavigationAction icon={BackIcon} />;

    return (
        <Layout style={styles.container} level="1">
            <TopNavigation
                alignment="center"
                title="My Giphy"
                // subtitle={false ? 'Subtitle' : null}
                // accessoryLeft={renderBackAction}
                accessoryRight={renderRightActions}
            />
        </Layout>
    );
};

export default TopNavigationAccessoriesShowcase;

const styles = StyleSheet.create({
    container: {
        minHeight: 128,
        paddingTop: 30,
    },
});
