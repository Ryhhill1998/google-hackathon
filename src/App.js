import { useEffect, useState } from "react";
import "./App.scss";

const App = () => {
  const [file, setFile] = useState(null);

  const uploadFile = (files) => {
    if (files.length) {
      setFile(files[0]);
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

        <div className="rhs-container">
          <div className="output-preview"></div>

          <div className="buttons-container">
            <button>Download</button>
            <button>Regenerate</button>
            <button>Restart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
