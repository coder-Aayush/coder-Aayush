import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export default function SocialIcon(prop:any) {
    return (
        <Link href={prop.path}>
            <FontAwesomeIcon icon={prop.icon} className="ml-4 text-indigo-500 cursor-pointer" />
        </Link>
    )
}
