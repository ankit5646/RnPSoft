import React from 'react'
import Nav from './Nav'

const About = () => {
  return (
    <div className='w-full min-h-screen  bg-slate-700'>
        <Nav/>
        <div className='w-[85%] my-10 mx-auto bg-slate-800 rounded-md px-10 py-5'>
            <h1 className='text-4xl text-blue-400 mb-5'>About</h1>
            <img src="https://enwpgo.files.wordpress.com/2023/08/news-website-header.jpg" alt="" />
            <p className='text-white mt-5 text-base'>Welcome to News Today, your number one source for the latest news. We're dedicated to giving you the very best of news, with a focus on reliability, accuracy, and in-depth analysis. San Francisco, September 16, 2024 — As we move deeper into 2024, major technological innovations are taking center stage, offering a glimpse into the future of industries worldwide. From cutting-edge developments in artificial intelligence (AI) to groundbreaking strides in renewable energy, this year is shaping up to be a turning point for global technology. One of the most exciting advancements is in AI-driven automation, which is rapidly being adopted across various sectors, significantly enhancing efficiency and productivity. Additionally, breakthroughs in quantum computing are paving the way for faster data processing and advanced encryption methods, which are expected to bolster cybersecurity and scientific discovery. These technological leaps are not just shaping industries but are also influencing everyday life. Experts believe that 2024 could mark the beginning of a new era in tech-driven innovation, fundamentally transforming the way we live and work. Stay tuned to News Today for more updates on these developments

            </p>

        </div>
        
        
    </div>
  )
}

export default About