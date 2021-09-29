import React from 'react'
import Link from 'next/link';

export default function NavItem(prop:any) {
    return (
        <div>
            <Link href={prop.link}>
                 <div className="md:p-4 py-2 block hover:text-indigo-700 cursor-pointer" 
                   >{prop.name}</div>
               </Link>
        </div>
    )
}
