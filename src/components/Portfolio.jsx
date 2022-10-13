import React from 'react';
import instagramclone from '../assets/portfolio/instagramclone.png';
import recipeappreact from '../assets/portfolio/recipeappreact.png';
import weather from '../assets/portfolio/weather.png';
import landingpage from '../assets/portfolio/landingpage.png';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: instagramclone,
            hrefdemo: 'https://tangerine-pothos-5c67a0.netlify.app/',
            hrefcode: 'https://github.com/Sarikalikhar11/instagram-clone'
        },
        {
            id: 2,
            src: recipeappreact,
            hrefdemo: 'https://newrecipe-reactapp.netlify.app/',
            hrefcode: 'https://github.com/Sarikalikhar11/recipeapp-new'

        },
        {
            id: 3,
            src: weather,
            hrefdemo: 'https://glittering-blini-8c43e1.netlify.app/',
            hrefcode: 'https://github.com/Sarikalikhar11/weather-app'
        },
        {
            id: 4,
            src: landingpage,
            hrefdemo: 'https://stirring-boba-962e82.netlify.app/',
            hrefcode: 'https://github.com/Sarikalikhar11/landing-pageJS'
        },
        {
            id: 5,
            src: reactSmooth,
        },
        {
            id: 6,
            src: reactWeather,
        }
]

  return (
    <div name="portfolio" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
            <div className="pb-8 text-center">
                <p className="text-5xl md:text-7xl tracking-wider uppercase text-blue-600 font-bold">Portfolio</p>
                <p className="py-4">Check out some of my work right here</p>
            </div>
             <div className="max-w-5xl mx-auto grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
            {
                portfolios.map(({id, src, hrefdemo, hrefcode}) => (
                    <div key={id} className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 
                  hover:scale-110" />
                    <div className="flex items-center justify-center text-base capitalize my-4 duration-200 group-hover:underline underline-offset-4">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={hrefdemo} target="_blank" rel="noreferrer">Demo</a></button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={hrefcode} target="_blank" rel="noreferrer">Code</a></button>
                    </div>
                </div>
                ))
            }
           
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;