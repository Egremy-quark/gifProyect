import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GiftExpertApp = () => {

    const [animes, setAnimes] = useState([]);

    return (
        <div>
            <h2>GiftExpertApp</h2>

            <AddCategory
                setAnimes={setAnimes}
            />

            <hr />


            <ul>
                {
                    animes.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default GiftExpertApp