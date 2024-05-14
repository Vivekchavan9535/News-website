import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './category/Home'
import India from './category/India'
import Cricket from './category/Cricket'
import Education from './category/Education'
import Movies from './category/Movies'
import Politics from './category/Politics'
import Business from './category/Business'

function Navbar() {



  return (
    <div className=''>



      <div className='flex flex-col fixed top-0 left-0 right-0 z-10'>

        <div className=' text-2xl bg-black w-full h-20 text-white flex justify-center items-center'>
          <h1 className='text-4xl font-bold'>News</h1>
        </div>

        <div className='p-3 flex justify-center gap-8 font-semibold'>

          <div className='cursor-pointer'>



            <ul className='overflow-auto h-10 flex justify-center items-center gap-6 bg-zinc-700 text-white fixed top-20 right-0 left-0 '>

              <Link className=' md:hover:scale-110 duration-150 ' to="/home">Home</Link >
              <Link className=' md:hover:scale-110 duration-150 ' to="/Education">Education</Link >
              <Link className=' md:hover:scale-110 duration-150 ' to="/Movies">Movies</Link >
              <Link className=' md:hover:scale-110 duration-150 ' to="/Politics">Politics</Link >
              <Link className=' md:hover:scale-110 duration-150 ' to="/India">India</Link >
              <Link className=' md:hover:scale-110 duration-150 ' to="/Cricket">Cricket</Link >
              <Link className=' md:hover:scale-110 duration-150 ' to="/Business">Business</Link >



            </ul>

          </div>

        </div>



      </div>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='India' element={<India />} />
        <Route path='Cricket' element={<Cricket />} />
        <Route path='Education' element={<Education />} />
        <Route path='Movies' element={<Movies />} />
        <Route path='Politics' element={<Politics />} />
        <Route path='Business' element={<Business />} />







      </Routes>



    </div>
  )
}

export default Navbar