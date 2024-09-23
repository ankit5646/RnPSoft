import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='w-full bg-sky-500 text-white flex items-center justify-between px-10 py-5'>
        <h1 className='text-2xl font-semibold'>News Todays</h1>
        <div className='flex gap-5' >
        <Link to = "/"><h4 className='text-md'>Home</h4></Link>
        <Link to= "/About"><h4 className='text-md'>About</h4></Link>
        </div>
    </div>
  )
}

export default Nav