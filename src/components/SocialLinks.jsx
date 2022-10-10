import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/sarika-likhar-53ab86b3/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/Sarikalikhar11'
            
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:sarikalikhar11@gmail.com'
            
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: "/sarika3cv.pdf",
            target: "_blank",
            style: 'rounded-br-md',
            download: true,
            rel: "noreferrer"
        }
]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id, child, href, style, download, target}) => (
                <li key={id} className={`"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md bg-gray-500" + " "` + style}>
                <a href={href} target={target} className="flex justify-between items-center w-full text-white" download={download}>
                    {child}
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks