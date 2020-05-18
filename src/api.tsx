import axios from "axios";

import { API_URL } from "react-native-dotenv";

const api = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
    },
});

export default api;
