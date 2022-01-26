import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home"
import Dosha from "./components/Dosha";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dosha" element={<Dosha />} />
        <Route path="notes" element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
