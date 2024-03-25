import React from 'react'

function Heading({content}) {
  return (
<div className=" w-[95vw] border-b-black bg-white border-b-2 border-solid block mx-auto mt-10">
    <div className="">
        <div className="bg-black text-white inline-block px-5 py-2 text-3xl uppercase">{content}</div>
    </div>

</div>
  )
}

export default Heading
