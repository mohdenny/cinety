import React from 'react'

const Chip = ({ text }) => {
    return (
        <button className="border-2 border-gray-500 px-4 py-1 rounded-xl">
            {text}
        </button>
    )
}

export default Chip
