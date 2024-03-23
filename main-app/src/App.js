import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to={"./app1"}>跳转app1</Link>
      <Link to={"./app2"}>跳转app2</Link>
      <Link to={"./app3"}>跳转app3</Link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>我是main-app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
