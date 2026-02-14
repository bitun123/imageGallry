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
import ResultCard from "./ResultCard";

function ResultGrid() {
  const dispatch = useDispatch();

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];
        if (activeTab == "photos") {
          const res = await fetchPhoto(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.download,
          }));
        }
        if (activeTab == "videos") {
          const res = await fetchVideo(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab == "GIF") {
          const res = await fetchGif(query);
          data = res.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title,
            thumbnail: item.images.fixed_height_small.url,
            src: item.images.original.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    getData();
  }, [query, activeTab,dispatch]);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="w-full flex flex-wrap gap-6 rounded overflow-auto px-5 justify-center ">
      {results.map((item, idx) => (
        
          <ResultCard key={idx} item={item} />
    
      ))}
    </div>
  );
}

export default ResultGrid;
