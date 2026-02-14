import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-15 w-full flex justify-between bg-gray-200 p-2 ">
      <div>
        <h1 className="text-xl text-black font-semibold">Media Search</h1>
      </div>
      <div className="flex gap-3 items-center">
        <Link  className="py-2 px-3 rounded text-m bg-blue-600 active:scale-95" to={"/"}>Search</Link>
        <Link className="py-2 px-3 rounded text-m bg-blue-600 active:scale-95"  to={"/collection"}>Collection</Link>
      </div>
    </div>
  );
}

export default Navbar;
