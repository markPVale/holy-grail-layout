import logo from "./logo.svg";
import "./App.css";
import LayoutTemplate from "./layoutTemplate";

function App() {
  return (
    <div className="App">
      <LayoutTemplate>
        <sidebar className="sidebar">sidebar</sidebar>
        <main className="main">main</main>
        <aside className="aside">aside</aside>
      </LayoutTemplate>
    </div>
  );
}

export default App;
