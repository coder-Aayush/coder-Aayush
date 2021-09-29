import React from 'react'
import SkillItem from './SkillItem';
import { DiCss3, DiDart, DiHtml5 } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { SiFirebase, SiNextDotJs, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import {FaGitAlt} from 'react-icons/fa';



export default function Skills() {
    return (
        <div>
            <h1 className="text-indigo-800 font-bold text-3xl text-center my-10">Skills</h1>
            <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 sm:grid-cols-3 gap-8 container mx-auto w-auto px-4">
                {skillList.map((e)=><SkillItem icon={e.icon} name={e.name}/>)}
            </div>
        </div>
    )
}


let size: string = "40";

let skillList: Array<any> = [
    {icon: <DiHtml5 size={size}/>, name: "HTML"},
    {icon: <DiCss3 size={size}/>, name: "CSS"},
    {icon: <IoLogoJavascript size={size}/>, name: "JavaScript"},
    {icon: <SiTypescript size={size}/>, name: "Typescript"},
    {icon: <GrReactjs size={size}/>, name: "React"},
    {icon: <SiNextDotJs size={size}/>, name: "NextJs"},
    {icon: <DiDart size={size}/>, name: "Dart"},
    {icon: <RiFlutterFill size={size}/>, name: "Flutter"},
    {icon: <SiFirebase size={size}/>, name: "Firebase"},
    {icon: <FaGitAlt size={size}/>, name: "Git"},
];
