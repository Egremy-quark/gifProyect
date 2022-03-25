import React from 'react'

const GifGridItem = ({ title, id, image }) => {
    return (
        <div className='card'>
            <img src={image} alt="img" />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem