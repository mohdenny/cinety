import React from 'react'
import classNames from 'classnames'

const Chip = ({ name, clicked, action, text }) => {

    return (
        <button 
            className={classNames("border-2 border-gray-500 px-4 py-1 rounded-xl hover:bg-gray-200 hover:text-gray-900", {
                "bg-gray-400 text-white": name === clicked
            })} 
            onClick={() => action(name)}
        >
            {text}
        </button>
    )
}

export default Chip
