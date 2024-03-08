import { useEffect, useState } from "react";
import Papa from 'papaparse';
import "./App.css";

const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);

  const uploadFile = (files) => {
    if (files.length) {
      setFile(files[0]);
      Papa.parse(files[0], {
        header: true,
        complete: (results) => {
          console.log('Parsed results:', results);
          console.log(JSON.stringify(results.data))
          setData(results.data);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h1>SynthoTalk</h1>
        </nav>
      </header>

      <main>
        <div className="lhs-container">
          <div className="file-upload">
            <input
              type="file"
              onChange={({ target }) => uploadFile(target.files)}
            />
          </div>
        </div>

        <div className="rhs-container"></div>
      </main>
    </div>
  );
};

export default App;
