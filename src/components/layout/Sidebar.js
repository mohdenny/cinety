import React, { useState } from 'react'

const Navbar = ({ children }) => {
    const [ toggleMenu, setToggleMenu ] = useState(false)
    
    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <nav className="px-8 py-2 flex flex-row items-center justify-between h-12 w-full">
                <div className="flex flex-row space-x-4 h-full">
                    <button className="h-full" onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="text-3xl font-righteous">Cinety</p>
                    </div>
                </div>

                <div className="flex flex-row space-x-4 h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </nav>

            <div className="flex flex-row space-x-4">
                {
                    !toggleMenu &&
                    <div className="h-full w-64 py-4">
                        <div className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <button className="h-full w-auto">Stream</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            <button className="h-full w-auto">Explore</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <button className="h-full w-auto">Notifications</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <button className="h-full w-auto">Messages</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <button className="h-full w-auto">Favorites</button>
                        </div>
                        <div className="hover:bg-gray-200 h-10 w-full flex px-8 space-x-4 content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <button className="h-full w-auto">Profile</button>
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