import React from 'react'

function Filters({ moviesStore }) {

  let categories = moviesStore.categories.map((c, i) => ({ name: c, index: i.toString() }));


  return (
    <div className="container mx-auto p-4 flex justify-between">
      <div className="flex gap-5 items-center w-[80%] overflow-x-auto" >
        {categories.map(Category)}
      </div>
      <div className="flex">
        <div>released</div>
      </div>
    </div>
  )
}

function Category(props) {
  return <div className="border border-rose-300 px-2 rounded-md text-rose" key={props.index}>{props.name}</div>
}

export default Filters
