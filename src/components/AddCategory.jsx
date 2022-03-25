import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setAnimes }) => {

    const [input, setInput] = useState('')


    const handleAdd = (e) => {
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim().length > 2) {
            setAnimes((anime) => [input, ...anime])
            setInput('')
        }


    }

    return (
        <div>
            <h2>{input}</h2>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={input}
                    onChange={handleAdd}
                />

            </form>

        </div>
    )
}

AddCategory.propTypes = {
    setAnimes: PropTypes.func.isRequired
}

export default AddCategory