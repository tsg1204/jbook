import * as esbuild from 'esbuild-wasm';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm'
    });
    //console.log(service);

  };

  useEffect(() => {
    startService();
  }, []);

  const onClick = () => {
    //console.log(input);
    if (!ref.current) {
      return;
    }

    console.log(ref.current);
  };

  return (
    <div>
      <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
        <div>
          <button onClick={onClick}>Submit</button>
        </div>
        <pre>{code}</pre>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));