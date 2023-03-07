import React from 'react';
import reactShoply from '../assets/portfolio/reactShoply.png';
import reactCryble from '../assets/portfolio/reactCryble.png';
import dateMeet from '../assets/portfolio/dateMeet.png';
import reactGolangTodoApp from '../assets/portfolio/reactGolangTodoApp.png'
import nbaMemoryGame from '../assets/portfolio/nbaMemoryGame.png';
import connect4 from '../assets/portfolio/connect4.png';


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactShoply,
      demo: 'https://shoply-syncfusion-dashboard.netlify.app',
      code: 'https://github.com/theUyonator/Shoply_REACT_Dashboard'
    },
    // {
    //   id: 2,
    //   src: reactCryble,
    //   demo: '',
    //   code: ''
    // },
    // {
    //   id: 3,
    //   src: dateMeet,
    //   demo: '',
    //   code: '',
    // },
    {
      id: 4,
      src: reactGoTodo,
      demo: 'https://github.com/theUyonator/golang-react-todo',
      code: 'https://github.com/theUyonator/golang-react-todo'
    },
    {
      id: 5,
      src: nbaMemoryGame,
      demo: 'https://theuyonator.github.io/NBA-Edition-Memory-Game/',
      code: 'https://github.com/theUyonator/NBA-Edition-Memory-Game'
    },
    {
      id: 6,
      src: connect4,
      demo: 'https://theuyonator.github.io/connect4_game/',
      code: 'https://github.com/theUyonator/connect4_game'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-12">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg h-full"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(demo, '_blank')}
                >
                  Demo
                </button>
                <button 
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(code, '_blank')}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
