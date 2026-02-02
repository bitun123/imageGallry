import React from "react";
// import { fetchApi } from "./api/mediaApi";
import { fetchGif } from "./api/mediaApi";

function App() {
  // function getphoto(){
  //     fetchApi();
  // }

  return (
    <div>
      <button
        onClick={async () => {
          await fetchGif("cat");
        }}
      >
        getpic
      </button>
    </div>
  );
}

export default App;
