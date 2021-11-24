import React from 'react'
import { IMAGE_URL } from '../../utils/config'

const Image = ({ url, alt, rating }) => {
    return (
        <div className="h-1/2 w-full relative">
            <img id="card-thumbnail" alt={alt} className="object-cover object-top h-full w-full" src={`${IMAGE_URL}${url}`} />
            <div className="absolute flex items-end justify-end bottom-0 inset-x-0">
                <div className="flex items-center justify-center bg-gray-900 px-2 py-1 rounded-tl-xl space-x-2 w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    { rating ? <p className="text-white text-xs">{rating}</p> : <p className="text-white text-xs">N/A</p> }
                </div>
            </div>
        </div>
    )
}

export default Image