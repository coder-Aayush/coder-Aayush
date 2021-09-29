import React from 'react'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
function Intro() {
    return (
        <div className="dark:bg-gray-800 flex justify-center align-middle items-center flex-col h-screen" >
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block text-indigo-500">
                        Hola! It&#x27;s me Aayush Bhattarai
                    </span>
                </h2>
                <p className="mb-12 text-xl mt-4 max-w-md mx-auto text-gray-400 tracking-widest">
                    Flutter Developer From Nepal
                </p>
                <div className="flex justify-center align-middle flex-row">
                    <PrimaryButton name="Learn More" />
                    <SecondaryButton name="Download CV" />
                </div>
            </div>
        </div>

    )
}

export default Intro



