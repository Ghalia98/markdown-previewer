import React from 'react'
import { marked } from 'marked';
import './Previewer.scss'

function Previewer(props) {
  return (
    <div id='preview' className='dark' dangerouslySetInnerHTML={{ __html: marked(props.input) }}></div>
  )
}

export default Previewer