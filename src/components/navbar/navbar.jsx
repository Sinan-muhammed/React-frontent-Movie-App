import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../logo/Movies.Hub.png';
import Filter   from './navbarfilter'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
                <img src={LogoImage} alt="logo" className="h-10" />
            </div>
            <div className="hidden sm:block">
                <Filter/>
            </div>
            <div className="sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="block text-white hover:text-amber-300 focus:text-amber-300 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
                {isOpen && (
                    <div className="mt-2">
                       <Filter/>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

