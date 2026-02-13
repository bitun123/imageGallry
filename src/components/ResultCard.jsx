import React from "react";

function ResultCard({ item }) {
  return (
    <div className="w-[18vw] h-80 bg-black rounded relative overflow-hidden">
      <a href={item.url} className="h-full" target="_blank" rel="noopener noreferrer">
          {" "}
 {item.type == "photo" ? (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      ) : (
        ""
      )}
      {item.type == "video" ? (
        <video
          src={item.src}
          className="w-full h-full object-cover rounded"
          autoPlay
          loop
          muted
        />
      ) : (
        ""
      )}
      {item.type == "gif" ? (
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover rounded"
        />
      ) : (
        ""
      )}
       </a>
     
      <div  id="bottom" className=" w-full text-white absolute bottom-0  py-4 px-2 bg-opacity-50"><h1 className="text-m font-semibold" >{item.title}</h1></div>
      <button className="absolute top-2 right-4 bg-blue-500 text-black font-semibold px-3 py-1 rounded-md cursor-pointer   transition-all active:opacity-95">save</button>
    </div>
  );
}

export default ResultCard;
