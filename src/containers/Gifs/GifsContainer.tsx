import React, { FC, useEffect } from "react";
import { Text } from "@ui-kitten/components";
import axios from "axios";

const GifsContainer: FC = () => {
    useEffect(() => {
        axios
            .get("gifs/search", {
                params: {
                    q: null,
                    limit: 25,
                    lang: "fr",
                },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }, []);

    return <Text> GifsContainer </Text>;
};

export default GifsContainer;
