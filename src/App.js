import './App.css';
import { useCallback, useState } from 'react';
import Split from 'react-split';
import Navbar from './components/Navbar';
import Editor from './components/editor';
import Preview from './components/Preview';

const App = () => {
  const [file, setFile] = useState({
    data: '## Hello, World!',
    path: '',
  });

  const handleDocChange = useCallback((newDoc) => {
    setFile({ ...file, data: newDoc });
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Navbar setState={setFile} file={file} />

      <Split
        style={{
          display: 'flex',
          height: '100%',
          transform: 'translateY(2.21em)',
        }}
        sizes={[50, 50]}
        cursor="col-resize"
        gutterSize={3}
        gutterAlign="center"
      >
        <div
          style={{
            backgroundColor: 'transparent',
            display: 'inline-block',
            height: '100%',
          }}
        >
          <Editor onChange={handleDocChange} initialDoc={file.data} />
        </div>
        <div
          style={{
            fontFamily: 'Helvetica Now Display',
            fontSize: '17px',
            display: 'inline-block',
            height: '100%',
            padding: '0 1em',
          }}
        >
          <Preview value={file.data} />
        </div>
      </Split>
    </div>
  );
};

export default App;

