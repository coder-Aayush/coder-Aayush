import React from 'react'
import socialItem from '../Contacts/Contact';
import SocialIcon from '../contacts/SocialIcon';
import Logo from '../logo'

export default function Footer() {
    var currentYear = new Date().getFullYear();
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <Logo width={50} />
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {currentYear} Aayush Bhattarai
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {socialItem.map((e) => <SocialIcon path={e.link} icon={e.icon} />)}
                </span>
            </div>
        </footer>
    )
}
