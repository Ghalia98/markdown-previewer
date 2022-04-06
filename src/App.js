import './App.scss';
import Editor from './components/editor/Editor';
import Previewer from './components/previewer/Previewer';
import Header from './components/header/Header';
import DarkModeBtn from './components/darkModeBtn/DarkModeBtn';
import { useState } from 'react';
const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
You can also make text **bold** ...whoa!
\r\n Or _italic_.
\r\n Or... wait for it... **_both!_**
\r\n And feel free to go crazy ~~crossing stuff out~~.
\r\n There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header ?
------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
function App() {
  const [input, setInput] = useState(initialMarkdown)
  const [darkmode, setDarkMode] = useState(false)
  return (
    <div className="App" style={darkmode ? { backgroundColor: '#242423' } : { backgroundColor: '#e8eddf' }}>
      <DarkModeBtn darkmode={darkmode} setDarkMode={setDarkMode} />
      <div className='app-container' >
        <Header />
        <div className="row">
          <Editor input={input} setInput={setInput} darkmode={darkmode} className="container" />
          <Previewer input={input} darkmode={darkmode} className="container" />
        </div>
      </div>
    </div>
  );
}

export default App;
