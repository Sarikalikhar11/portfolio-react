import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  mx-auto">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
            </div>
            <p className="text-xl mt-20">Creating web and mobile applications. Maintaining, optimizing, troubleshooting, and improving websites. Implementation of apps and landing pages from concept through deployment</p>
            <br/>
            <p className="text-xl">Proficient in HTML, CSS, jQuery, JavaScript and react js; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Adobe Photoshop.</p>
        </div>
    </div>
  )
}

export default About;