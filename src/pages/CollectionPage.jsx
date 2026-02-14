import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

function CollectionPage() { 
  const collection = useSelector((state) => state.collection?.items) || [];
const dispatch = useDispatch()
const clearItem = ()=>{
dispatch(clearCollection())
}

  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-xl text-black font-semibold">Your Collection</h1>
        <button className="px-2 py-2 bg-red-700 rounded font-semibold active:scale-95 cursor-pointer"
        onClick={()=>{
            clearItem()
        }}
        >
          Remove All
        </button>
      </div>
      <div className="w-full flex flex-wrap gap-6 rounded overflow-auto p-3 ">
        {collection.map((item, idx) => (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
