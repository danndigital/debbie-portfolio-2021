import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Dosha from "./components/Dosha";
import Yoga from "./components/Yoga"
import Notes from "./components/Notes";
import ScrollToTop from "react-scroll-to-top";
import ScrollUp from "./components/ScrollUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth />
      <ScrollUp /> 
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dosha" element={<Dosha />} />
          <Route path="notes" element={<Notes />} />
          <Route path="yoga" element={<Yoga />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
