import React from 'react'
import './Editor.scss'

function Editor(props) {
    const handleInputChange = (e) => {
        props.setInput(e.target.value)
    }
    return (
        <>
            <textarea id='editor' className={props.darkmode ? "dark" : "light"} value={props.input} onChange={handleInputChange}></textarea>
        </>
    )
}

export default Editor