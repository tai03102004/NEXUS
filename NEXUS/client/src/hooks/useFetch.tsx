import { useEffect, useState } from "react";
import { UseFetchProps } from "../Interface/UseFetchProps";

const API_KEY = import.meta.env.VTIE_GIPHY_API;

const useFetch = ({ keyword} : UseFetchProps) => {
    const [giftUrl, setGiftUrl] = useState("");

    const fetchGifts = async() => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const {data} = await response.json();

            setGiftUrl(data[0]?.images?.downsized_medium?.url);

        } catch(e) {
            setGiftUrl('"https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284');
        }
    }
    useEffect(() => {
        if(keyword) fetchGifts();
    },[keyword]);

    return giftUrl;
}

export default useFetch;