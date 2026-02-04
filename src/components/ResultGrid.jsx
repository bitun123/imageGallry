import React, { useEffect } from "react";
import { fetchPhoto, fetchVideo, fetchGif } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
  clearResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

function ResultGrid() {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

    const getData = async () => {
      let data;
      if (activeTab == "photos") {
        const res = await fetchPhoto(query);
     data = res.results
      }
      if (activeTab == "videos") {
        const res = await fetchVideo(query);
       data = res.videos
      }
      if (activeTab == "GIF") {
      const res = await fetchGif(query);
// console.log(res.data)
data = res.data
      }
    };

  useEffect(() => {
    getData();
  }, [query, activeTab]);
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default ResultGrid;
