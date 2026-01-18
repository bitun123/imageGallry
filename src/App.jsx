import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { decrement, increment, incrementByNumber } from './redux/features/CounterSlice';
function App() {
  const [num, setnum] = useState("")
  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.value);
  return (
    <div>
<h1>
{count}
</h1>
<button onClick={()=>dispatch(increment())}> increment</button>
<button onClick={()=>dispatch(decrement())}>decrement</button>

<input type="text" value={num}
onChange={(e)=>{
  setnum(e.target.value)
}}/>
<button 
onClick={()=>dispatch(incrementByNumber(Number(num)))}>
  incrementAmount</button>



    </div>
  )
}

export default App