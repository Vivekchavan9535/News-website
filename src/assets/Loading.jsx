import React from 'react'
import { BeatLoader } from 'react-spinners'

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center md:h-screen md:w-full bg-gray-300'>

      <BeatLoader color="#36d7b7" />
    </div>
  )
}

export default Loading