import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

function SearchBar() {
  const [text, settext] = useState("");

const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setQuery(text))
    settext("");
  }
  return (
    <div>
      <form
        className="p-3 flex gap-5 bg-gray-500"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          required
          className="w-full  border-2 px-2 text-md rounded outline-none "
          type="text"
          placeholder="Search Anything"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
        <button className=" px-6 py-2 text-xl rounded outline-none active:scale-95 bg-blue-700 text-white cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
