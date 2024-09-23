import React from 'react'
import { Link } from 'react-router-dom'

const Headline = ({tagline, discription, id}) => {
  return (
   

        <Link to = {`/Article/${id}`} className='w-[45%] bg-slate-500 mt-10  px-5 py-5 rounded-sm shadow-md shadow-sky-300'>
        <h1 className='text-2xl font-medium text-white'>{tagline}</h1>
        <p className='text-sm text-slate-300'>{discription}</p>
        </Link>
       
    
  )
}

export default Headline