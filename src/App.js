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
          <form action="/backend">
            <div className="free-text-prompt">
              <br></br>
              <textarea id="textprompt" name="textprompt" rows="4" cols="50">Please enter your custom prompt.</textarea>
              <br></br>
              <input type="submit" value="Submit"></input>
            </div>
          </form>

        </div>

        <div className="rhs-container">
        </div>
      </main>
    </div>
  );
};

export default App;
