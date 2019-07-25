import React from "react";
import "./App.css";
import Input from "./containers/Input";
import RepoList from "./containers/RepoList";
import Repo from "./components/Repo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          className="App-logo"
          alt="logo"
        />
        <div>
          Search <code>github.com</code> user repository
        </div>
      </header>

      <div style={{ width: "450px", margin: "0 auto" }}>
        <Input placeholder="GitHub username ↩" />
        <RepoList render={repo => <Repo item={repo} />} />
      </div>
    </div>
  );
}

export default App;
