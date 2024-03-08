import { useEffect, useState } from "react";
import "./App.scss";

const defaultData = {
  file: null,
  prompt: "",
  literacy: "default",
  sentiment: "default",
  length: "default",
  brand: "default",
};

const App = () => {
  const [data, setData] = useState({ ...defaultData });
  const [activeSide, setActiveSide] = useState("lhs");

  const fetchResponse = async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/backend/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = response.data();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReset = () => {
    setData({ ...defaultData });
  };

  const uploadFile = (files) => {
    if (files.length) {
      setData((data) => {
        const updatedData = { ...data };
        updatedData.file = files[0];
        return updatedData;
      });
    }
  };

  const changeActiveSide = () => {
    setActiveSide((activeSide) => (activeSide === "lhs" ? "rhs" : "lhs"));
  };

  const handleSubmit = () => {
    const { file, prompt, brand } = data;
    if (!file && !prompt) return;
    if (!brand) return;
    fetchResponse(data);
    changeActiveSide();
  };

  const handleDataChange = (target) => {
    const { name } = target;
    if (name === "file") {
      uploadFile(target.files);
    } else {
      const { value } = target;

      setData((data) => {
        const updatedData = { ...data };
        updatedData[name] = value;
        return updatedData;
      });
    }
  };

  const handleRestart = () => {
    changeActiveSide();
  };

  return (
    <div className="App">
      <header>
        <nav>
          <h1>SynthoTalk</h1>
        </nav>
      </header>

      <main>
        <div
          className={`lhs-container${activeSide === "lhs" ? " active" : ""}`}
        >
          <div className="file-upload">
            <input
              type="file"
              name="file"
              accept="image/png,.csv"
              onChange={({ target }) => uploadFile(target.files)}
            />
          </div>

          <textarea
            id="textprompt"
            name="prompt"
            rows="4"
            cols="50"
            placeholder="Please enter your custom prompt."
            onChange={({ target }) => handleDataChange(target)}
            value={data.prompt}
          ></textarea>

          <div className="dropdowns">
            <div className="customer-literacy">
              <select
                name="literacy"
                id="literacy"
                onChange={({ target }) => handleDataChange(target)}
                value={data.literacy}
                disabled={activeSide !== "lhs"}
              >
                <option value="default" disabled hidden>
                  Customer literacy
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </select>
            </div>

            <div className="customer-sentiment">
              <select
                name="sentiment"
                id="sentiment"
                onChange={({ target }) => handleDataChange(target)}
                value={data.sentiment}
                disabled={activeSide !== "lhs"}
              >
                <option value="default" disabled hidden>
                  Customer sentiment
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
              </select>
            </div>

            <div className="utterance-length">
              <select
                name="length"
                id="length"
                onChange={({ target }) => handleDataChange(target)}
                value={data.length}
                disabled={activeSide !== "lhs"}
              >
                <option value="default" disabled hidden>
                  Utterance length
                </option>
                <option value="1">Short</option>
                <option value="2">Medium</option>
                <option value="3">Long</option>
              </select>
            </div>

            <div className="brand">
              <select
                name="brand"
                id="brand"
                onChange={({ target }) => handleDataChange(target)}
                value={data.brand}
                disabled={activeSide !== "lhs"}
              >
                <option value="default" disabled hidden>
                  Brand
                </option>
                <option value="1">Lloyds Bank</option>
                <option value="2">Halifax</option>
                <option value="3">Bank of Scotland</option>
              </select>
            </div>
          </div>

          <div className="buttons-container">
            <button disabled={activeSide !== "lhs"} onClick={handleSubmit}>
              Submit
            </button>
            <button disabled={activeSide !== "lhs"} onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        <div
          className={`rhs-container${activeSide === "rhs" ? " active" : ""}`}
        >
          <div className="output-preview"></div>

          <div className="buttons-container">
            <button disabled={activeSide !== "rhs"}>Download</button>
            <button disabled={activeSide !== "rhs"}>Regenerate</button>
            <button disabled={activeSide !== "rhs"} onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
