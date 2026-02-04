import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

function Tabs() {
  const tabs = ["photos", "videos", "GIF"];

  const dispatch = useDispatch();
const activeTab = useSelector((state=>state.search.activeTab))
  return (
    <div className="flex gap-4 p-5">
      {tabs.map((elem, idx) => {
        return (
          <button
            key={idx}
            className = {`${activeTab == elem ? 'bg-blue-700' : 'bg-gray-600'}  transition-all px-5 py-2 rounded active:scale-95 text-white font-semibold cursor-pointer`}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;
