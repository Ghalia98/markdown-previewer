import React from 'react'
import { marked } from 'marked';

function Previewer(props) {
  // marked(props.input)

  return (
    <div id='preview' dangerouslySetInnerHTML={{ __html: marked(props.input) }}></div>
  )
}

export default Previewer