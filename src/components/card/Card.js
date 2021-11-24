import React, { Suspense, lazy} from 'react'
import classNames from 'classnames'

const LazyComponent = lazy(() => import('./Image'))

const Card = ({ imageUrl, title, overview, rating }) => {
    return (
        <div id="card-body" className="h-48">
            <Suspense fallback={<p className="text-center">Loading...</p>}>
                    <LazyComponent url={imageUrl} alt={title} rating={rating} />
            </Suspense>
            <div id="card-content" className="w-full h-auto">
                <div id="card-title" className="w-full h-auto">
                    <p className="text-center font-bold py-1 px-2">{title}</p>
                </div>
                <div id="card-text" className="h-auto w-full">
                    <p className="text-sm text-justify py-1 px-2 truncate">{overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
