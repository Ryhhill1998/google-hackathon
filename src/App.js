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
          <div className="free-text-prompt">
            <form action="/backend">
              <br></br>
              <textarea id="textprompt" name="textprompt" rows="4" cols="50">Please enter your custom prompt.</textarea>
              <br></br>
              <input type="submit" value="Submit"></input>
            </form>
          </div>


          <div className="customer-literacy">
            <select name="literacy" id="literacy">
              <option value="" selected disabled hidden>Customer literacy</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          </div>

          <div className="customer-sentiment">
            <select name="sentiment" id="sentiment">
              <option value="" selected disabled hidden>Customer sentiment</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          </div>

          <div className="utterance-length">
            <select name="length" id="length">
              <option value="" selected disabled hidden>Utterance length</option>
              <option value="1">Short</option>
              <option value="2">Medium</option>
              <option value="3">Long</option>
            </select>
          </div>

          <div className="brand">
            <select name="brand" id="brand">
              <option value="" selected disabled hidden>Utterance length</option>
              <option value="1">Lloyds Bank</option>
              <option value="2">Halifax</option>
              <option value="3">Bank of Scotland</option>
            </select>
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
