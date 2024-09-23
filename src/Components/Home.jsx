import React from 'react'
import Headlines from './Headlines'
import Nav from './Nav'

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-700'>
    <Nav/>

      <div className='w-full text-sky-500 mt-10 mx-10'>
      <h1 className='text-3xl font-bold'>Latest News</h1>
      </div>
      
    <Headlines/>
  </div>
  )
}

export default Home