import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilterCategory } from '../../../../store/moviesStore';

function Filters({ moviesStore }) {

  let categories = moviesStore.categories.map((c, i) => ({ name: c, index: i.toString() }));

  return (
    <div className="container mx-auto p-4 flex justify-between">
      <div className="flex gap-5 items-center w-[80%] overflow-x-auto" >
        {categories.map(Category)}
      </div>
      <div className="flex">
        <div>Recent</div>
        <div>Old</div>
      </div>
    </div>
  )
}

function Category(props) {
  const moviesStore = useSelector(state => state.moviesStore)
  const dispatch = useDispatch()
  let clx = "";
  if (moviesStore.filter.categories.includes(props.name)) {
    clx = "bg-rose-500 text-white"
  }
  return <button onClick={() => dispatch(toggleFilterCategory(props.name))} className={`border border-rose-300 px-2 rounded-md ${clx}`} key={props.index}>
    {props.name}
  </button>
}

export default Filters
