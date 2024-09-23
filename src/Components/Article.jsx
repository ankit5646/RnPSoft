import React from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();  // Get the id from the URL

  // Array of article data
  const data = [
    { tagline: "Technology Advances in 2024", 
      description: "San Francisco, September 16, 2024 — Breakthroughs in technology this year are set to revolutionize industries across the globe. Key advancements in artificial intelligence, quantum computing, and renewable energy are leading the charge. One of the most significant developments has been in AI-driven automation, with companies now leveraging advanced machine learning models to streamline processes and boost productivity. Meanwhile, quantum computing is making strides in data encryption and complex problem-solving, promising to reshape fields like cybersecurity and scientific research. Experts predict that 2024 will be a pivotal year, with these innovations driving substantial changes in how businesses operate and how individuals interact with technology.", 
      val: 1, 
      image: 'https://www.michaelpage.ca/sites/michaelpage.ca/files/legacy/banner-image.jpg' },

    { tagline: "Breaking: Major Event Happens", 
      description: "Riverside, September 16, 2024 — A minor car accident occurred this morning at around 8:45 AM on Elm Street, causing brief traffic delays in the downtown area. The incident involved two vehicles that collided at a low speed near the Central Park intersection. No serious injuries were reported, and both drivers were able to exit their vehicles safely. Emergency services arrived quickly on the scene, and the road was cleared within an hour. Local authorities are urging drivers to remain cautious during rush hours and to follow traffic regulations to avoid similar incidents in the future.", 
      val: 2, 
      image: 'https://cdn.aarp.net/content/dam/aarp/auto/2021/06/1140-car-crash.jpg' },

    { tagline: "Sustainable Energy Innovations", 
      description: "In 2024, significant strides have been made in sustainable energy, with breakthroughs in solar, wind, and battery technologies. Researchers have developed more efficient solar panels, increasing energy conversion rates, while new offshore wind turbines are generating power at record levels. Additionally, advances in battery storage are helping to address energy intermittency issues, making renewable energy more reliable than ever. These innovations are playing a critical role in reducing global carbon emissions and moving towards a greener, more sustainable future.", 
      val: 3, 
      image: 'https://kpt.tax/wp-content/uploads/2023/09/1030_decarbonizing_energy_systems_feat.jpg' },

    { tagline: "AI Breakthroughs in Healthcare", 
      description: "Artificial intelligence is transforming healthcare in 2024 with groundbreaking innovations. AI-powered diagnostic tools are now detecting diseases like cancer and heart conditions faster and more accurately than ever before. Personalized treatment plans based on patient data analysis are becoming the norm, leading to more effective and targeted therapies. Additionally, AI is improving drug discovery, reducing the time and cost of bringing new medications to market. These advances are not only enhancing patient care but also alleviating pressure on healthcare professionals, marking a new era in medical technology.", 
      val: 4, 
      image: 'https://successive.cloud/wp-content/uploads/2023/03/AI-in-Healthcare.jpg' },
  ];

  // Convert the id from the URL to an integer for comparison
  const article = data.find(article => article.val === parseInt(id));
  

  return (
    <div className="w-full min-h-screen bg-slate-700">
      <Nav />
      
      <div className="w-[85%] my-10 mx-auto bg-slate-800 rounded-md px-10 py-5">
        {article ? (
          <>
            <h1 className="text-4xl text-blue-400 mb-5">{article.tagline}</h1>
            <img src={article.image} alt={article.tagline} />
            <p className="text-white mt-5 text-base">
              {article.description}
            </p>
          </>
        ) : (
          <h1 className="text-4xl text-red-400">Article not found</h1>
        )}
      </div>
    </div>
  );
};

export default Article;
