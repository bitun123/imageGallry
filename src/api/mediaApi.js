import axios from "axios";
const UNSPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY;
const PIXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

//normilazation

export async function fetchApi(query,page=1,per_page = 20){
   const res  = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
   });
   console.log(res)
}