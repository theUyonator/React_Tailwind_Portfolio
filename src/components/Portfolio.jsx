import React from 'react';
import reactShoply from '../assets/portfolio/reactShoply.png';
import reactCryble from '../assets/portfolio/reactCryble.png';
import dateMeet from '../assets/portfolio/dateMeet.png';
import nbaMemoryGame from '../assets/portfolio/nbaMemoryGame.png';
import connect4 from '../assets/portfolio/connect4.png';
import { BsCloudHaze2Fill } from 'react-icons/bs';


const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: reactShoply
        },
        {
            id:2,
            src: reactCryble
        },
        {
            id:3,
            src: dateMeet
        },
        {
            id:4,
            src: nbaMemoryGame
        },
        {
            id:5,
            src: connect4
        }     
    ]




    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full
        text-white md:h-screen"
        >

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full
            h-full">

                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 
                    border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    
                    {
                        portfolios.map(({id, src}) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg h-full">
                            <img 
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                               <button className="w-1/2 px-6 py-3 m-4 duration-200
                               hover:scale-105">
                                   Demo
                                </button>
                               <button className="w-1/2 px-6 py-3 m-4 duration-200
                               hover:scale-105">
                                   Code
                                </button>
                            </div>
                        </div>
                     
                    ))
                }

                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
