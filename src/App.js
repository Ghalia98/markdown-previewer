import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('')
  return (
    <div className="App">
      <Editor input={input} setInput={setInput} />
      <Previewer input={input} />
    </div>
  );
}

export default App;
