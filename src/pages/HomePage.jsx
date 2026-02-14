import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux';
function HomePage() {
     const { query } = useSelector(
    (store) => store.search,
  );
  return (
   <div className='  text-white w-full bg-white' >
      <SearchBar/>
   {query!= ''? <div>
   <Tabs/>
      <ResultGrid/>

   </div>:''}
    </div>
  )
}

export default HomePage