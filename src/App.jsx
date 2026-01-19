import React from 'react'
import { fetchApi } from './api/mediaApi'



function App() {
// function getphoto(){
//     fetchApi();
// }

  return (
    <div>
<button onClick={()=>{
fetchApi('cat')
}}>get pic</button>

    </div>
  )
}

export default App