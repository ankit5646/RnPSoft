import React from 'react'
import Headline from './Headline'

const Headlines = () => {

    const data  =  [
        {tagline: "Technology Advances in 2024" , discription: "Discover the latest developments in the tech world...", id:1},
        {tagline: "Breaking: Major Event Happens" , discription: "A brief introduction about the article...", id:2},
        {tagline: "Sustainable Energy Innovations" , discription: "Explore the latest advancements in renewable energy technologies...", id:3},
        {tagline: "AI Breakthroughs in Healthcare" , discription: "Learn how artificial intelligence is revolutionizing patient care...", id:4},
    ]
  return (
    <div className='w-full mx-10 flex flex-wrap gap-7'>
        {data.map((item, index) => (
            <Headline key={index} tagline={item.tagline} discription={item.discription} id ={item.id}/>
        ))}
    </div>
  )
}

export default Headlines