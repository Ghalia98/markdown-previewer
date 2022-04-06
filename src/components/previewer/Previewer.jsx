import React from 'react'
import { marked } from 'marked';
import './Previewer.scss'

function Previewer(props) {
  return (
    <div id='preview' className={props.darkmode ? "dark" : "light"} dangerouslySetInnerHTML={{ __html: marked(props.input) }}></div>
  )
}

export default Previewer