import React, { useEffect } from 'react'
import Image from 'next/image'
import AayushImage from "../../public/aayush.jpg";
import Projects from './data';
import ProjectItem from './ProductItem';
export default function Project() {
    useEffect(() => {

    }, [])
    return (
        <div>
            <h1 className="text-indigo-800 font-bold text-3xl text-center my-10">Projects</h1>
            {Projects.map((e, index) => <ProjectItem index={index} key={index} data={e} />)}
        </div>
    )
}
