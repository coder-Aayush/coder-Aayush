import React from 'react'

export default function SecondaryButton(prop: any) {
    return (
        <div>
            <div className="px-4 py-2 flex items-center text-base rounded-md text-blue-600  bg-blue-200 shadow-md cursor-pointer hover:bg-blue-300 transition-all">
                        {prop.name}
                    </div>
        </div>
    )
}
