import React from 'react'




export default function SkillItem(prop:any) {    
    return (
        <div className="text-center justify-center flex flex-col shadow-sm rounded-md items-center h-32 transform  bg-white z-50 transition duration-500 hover:scale-105">
            <div className="text-indigo-400">
            {prop.icon}
            </div>
            <div className="py-1.5"></div>
            <p className="text-md text-gray-500">{prop.name}</p>
        </div>
    )
}
