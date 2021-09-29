import React from 'react'
import Image from 'next/image'

import AayushLogo from "../public/logo.svg";


export default function Logo(prop: any) {
    return (
        <Image src={AayushLogo} alt="Vercel Logo" width={prop.width ?? "150"} height={prop.height ?? "50"}/>
    )
}
