import axios from "axios";
const UNSPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY;
const PIXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

//normilazation
export async function fetchPhoto(query, page = 1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
}

//fetch video data
export async function fetchVideo(query, per_page = 15) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: { Authorization: PIXELS_KEY },
  });
  return res.data;
}

//fetch gif api

export async function fetchGif(q, limit = 15) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: GIPHY_KEY,
      q,
      limit,
    },
  });
  return res.data;
}
