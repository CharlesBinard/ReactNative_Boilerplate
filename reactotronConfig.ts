import { AsyncStorage } from "react-native";
import Reactotron from "reactotron-react-native";
import { ENV } from "react-native-dotenv";

if (ENV === "dev" && Reactotron.setAsyncStorageHandler) {
    Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
        .configure() // controls connection & communication settings
        .useReactNative() // add all built-in react native plugins
        .connect(); // let's connect!
}
