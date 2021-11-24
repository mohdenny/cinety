import React from 'react'
import classNames from 'classnames'

const Chip = ({ name, clicked, action, text }) => {
    return (
        <button 
            className={classNames("border-2 border-gray-300 bg-gray-200 px-4 py-1 rounded-xl hover:bg-gray-300", {
                "bg-gray-900 text-white hover:bg-gray-900 hover:text-white": name === clicked
            })} 
            onClick={() => action(name)}
        >
            {text}
        </button>
    )
}

export default Chip
