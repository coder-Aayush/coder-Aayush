import React from 'react'
import Link from 'next/link'

export default function PrimaryButton(prop: any) {
    return (
        <div className="lg:mt-0 lg:flex-shrink-0 mr-2">
            <div className="inline-flex rounded-md shadow">
                <Link href="">
                    <div className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg cursor-pointer">
                        {prop.name}
                    </div>
                </Link>
            </div>
        </div>
    )
}
