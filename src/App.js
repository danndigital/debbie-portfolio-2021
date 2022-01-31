import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Dosha from "./components/Dosha";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="dosha" element={<Dosha />} />
          <Route path="notes" element={<Notes />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
