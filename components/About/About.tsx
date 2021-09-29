import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import Logo from '../logo';
import AayushImage from "../../public/aayush.jpg";
import LinkText from './LinkText';


export default function About() {
    function renderAboutText(){
        return `hi`;
    }
    return (
        <div className="py-8 px-8 bg-white shadow-lg rounded-lg my-20">
            <div>
                <h2 className="text-indigo-800 text-3xl font-semibold">About Me</h2>
                <p className="mt-2 text-gray-600"><span>
                    Hi, I'm Aayush Bhattarai, I am passionate Mobile and Webapp App Developer from Kathmandu Nepal. I am currently working at <LinkText path="https://wepost.app" text="Wepost"></LinkText> and <LinkText path="https://wepost.app" text="Docspe"></LinkText> as a Mobile App Developer.</span>
                    <br />
                    <br />
                    <div>
                    I am confortable building Android and iOS app using Dart and Flutter. Also, I do build web stuff with Typescript and React.I also love contributing to Open Source Projects.
                    </div>
                    <br />
                    <div>
                    Following my interest, I am pursuing my Bachelors in Computer Application from <LinkText path="http://scst.edu.np/" text="Sagarmatha College of Science and Technology"/>.
                    </div>
                </p>
            </div>
            <div className="flex justify-end mt-4">
                <div className="flex items-center ">
                    <Logo width={50} />
                    <a href="#" className="text-xl font-medium text-indigo-500">Aayush Bhattarai</a>
                </div>
            </div>
        </div>
    )
}
