import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrif = ({ category }) => {

    const [images, setImages] = useState([])

    //Sólo te ejecutarás una vez, cuando el componente se renderice 
    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs)) // || (setImages)
    }, [category])




    // getGifs()
    //Si yo creo un botón cada vez que lo presione se actualizarán las refencias, lo que provocará que todo el código se vuelva a ejecutar, eso lo resolveremos utilizando useEffect, para que nuestra función se ejecute una única vez
    return (
        <>
            <h4>{category}</h4>
            <div className='card-grid'>


                {
                    images.map((img) => {
                        return (
                            <GifGridItem
                                key={img.id}
                                title={img.title}
                                id={img.id}
                                image={img.image}
                            />)
                    })
                }


            </div>
        </>
    )
}

export default GifGrif