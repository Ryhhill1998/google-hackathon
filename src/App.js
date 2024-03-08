import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>SynthoTalk</h1>
        </nav>
      </header>

      <main>
        <div className="file-upload">
          <input type="file" />
        </div>
      </main>
    </div>
  );
};

export default App;
