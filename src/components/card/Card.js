import React from 'react'
import { IMAGE_URL } from '../../utils/config'

const Card = ({ image, title, overview }) => {
    return (
        <div id="card-body" className="h-60">
            <img id="card-thumbnail" alt={title} className="object-fill object-center h-1/2 w-full" src={`${IMAGE_URL}${image}`} />
            <div id="card-content" className="border-2 h-1/2 overflow-ellipsis overflow-hidden">
                <div id="card-title" className="border-2 h-auto">
                    <p className="text-center font-bold py-1 px-2">{title}</p>
                </div>
                <div id="card-desc" className="h-auto">
                    <p className="text-sm text-justify py-1 px-2">{overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
