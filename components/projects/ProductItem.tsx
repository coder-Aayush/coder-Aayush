import React from 'react'
import Image from 'next/image'
import AayushImage from "../../public/aayush.jpg";
import PrimaryButton from '../PrimaryButton';
import Chip from '../Chip';
export default function ProjectItem(prop: any) {
    return (
        <div className={`w-full overflow-hidden rounded-lg shadow-sm sm:flex bg-white p-8 my-14 ${prop.index % 2 == 0 ? "flex-row-reverse" : ""}`}>
            <div className="w-full sm:w-1/2">
                <img className="object-cover w-full h-72 rounded-lg" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky" />
            </div>
            <div className="flex-1 px-6 py-3">
                <h4 className="mb-1 text-xl font-semibold tracking-tight text-indigo-800">{prop.data.name}</h4>
                <div className="flex flex-wrap">
                {prop.data.tags != null ? prop.data.tags.map((e: any,index:any) => <Chip tag={e} key={index}/>) : <div></div>}
                </div>
                <p className="leading-normal text-gray-700 mb-4">{prop.data.description}</p>
                <PrimaryButton name="Live Demo"/>
            </div>
        </div>
    )
}