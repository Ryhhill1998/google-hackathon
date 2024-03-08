import { useEffect, useState } from "react";
import "./App.css";

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
        <div className="file-upload">
          <input
            type="file"
            onChange={({ target }) => uploadFile(target.files)}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
