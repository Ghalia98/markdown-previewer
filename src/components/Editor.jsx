import React from 'react'

function Editor(props) {
    const handleInputChange = (e) => {
        props.setInput(e.target.value)
    }
    return (
        <textarea id='editor' value={props.input} onChange={handleInputChange} ></textarea>
    )
}

export default Editor