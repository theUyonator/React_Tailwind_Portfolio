import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    You may be asking yourself at this point, why software development?,
                    how did Daniel Uyo get here?....
                    I'll start by giving you a little background on myself, my university education
                    was obtained from the University of Alberta in the Mechanical Engineering discipline.
                    After university I worked for as a mechanical engineer for almost 4 years and in that 
                    time I realized that I had a knack for creating, I remember the first time I created 
                    a "Hello World" application or my first major project that saw me clone the BBC News 
                    website utilizing just HTML & CSS, I was like an kid at the candy store, I could not
                    hide my excitement. 
                </p>

                <br />

                <p className="text-xl">
                    
                    From then on, my excitement has grown in the space and being a 
                    constant learner has become second nature to me. This is why I chose Software Development,
                    and my aim is to continue developing my skillsets to become the best develper I can be.
                    I am glad you are here and I hope you share in my enthusiasm for the space as well!. Check
                    out my projects while you are here, I promise you'll be intrigued by them!

                </p>
            </div>
        </div>
    )
}

export default About
