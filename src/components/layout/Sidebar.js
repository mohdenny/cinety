import React, { useState } from 'react'

const Navbar = ({ children }) => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <nav className="px-8 py-2 flex flex-row items-center justify-between h-12 w-screen">
                <div className="flex flex-row space-x-4 h-full">
                    <button className="h-full" onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="text-3xl font-righteous">Cinety</p>
                    </div>
                </div>

                <button className="bg-blue-400 rounded-lg text-white px-2 h-full">Logout</button>
            </nav>

            <div className="flex flex-row space-x-4">
                {
                    !toggleMenu &&
                    <div className="h-full w-64 py-4">
                        <div className="hover:bg-gray-200 h-10 py-2 w-full flex content-center justify-center">
                            <button className="h-full w-full">Menu 1</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 py-2 w-full flex content-center justify-center">
                            <button className="h-full w-full">Menu 2</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 py-2 w-full flex content-center justify-center">
                            <button className="h-full w-full">Menu 3</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 py-2 w-full flex content-center justify-center">
                            <button className="h-full w-full">Menu 4</button>
                        </div>
                    </div>
                }

                <div className="bg-gray-100 border-t-2 h-full w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Navbar