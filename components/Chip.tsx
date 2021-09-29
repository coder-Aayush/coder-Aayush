import React from 'react'

export default function Chip(prop:any) {
    return (
        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white-100 rounded-full text-blue-700 bg-blue-100 border border-blue-300">
            <div className="text-xs font-normal leading-none max-w-full flex-initial">{prop.tag}</div>
        </div>
    )
}
