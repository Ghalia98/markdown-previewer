import React from 'react'
import './Editor.scss'

function Editor(props) {
    const handleInputChange = (e) => {
        props.setInput(e.target.value)
    }
    return (
        <>
            <textarea id='editor' className="dark" value={props.input} onChange={handleInputChange}></textarea>
        </>
    )
}

export default Editor