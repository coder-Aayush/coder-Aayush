import React from 'react'
import Link from 'next/link'
export default function LinkText(prop:any) {
    return (
        <span className={prop.style == null ?  "text-indigo-600": ""}>
            <Link href={prop.path}>{prop.text}</Link>
        </span>
    )
}
