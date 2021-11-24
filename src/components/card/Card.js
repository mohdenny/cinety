import React, { Suspense, lazy} from 'react'

const LazyComponent = lazy(() => import('./Image'))

const Card = ({ movie }) => {
    const renderedCard = movie.map(item => {
        return (
            <div key={item.id} id="card-body" className="h-48">
                <Suspense fallback={<p className="text-center">Loading...</p>}>
                    <LazyComponent url={item.backdrop_path} alt={item.title} rating={item.vote_average} />
                </Suspense>
                <div id="card-content" className="w-full h-auto">
                    <div id="card-title" className="w-full h-auto">
                        <p className="text-center font-bold py-1 px-2">{item.title}</p>
                    </div>
                    <div id="card-text" className="h-auto w-full">
                        <p className="text-sm text-justify py-1 px-2 truncate">{item.overview}</p>
                    </div>
                </div>
            </div>
        )
    })

    return renderedCard
}

export default Card
