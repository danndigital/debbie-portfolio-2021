import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Dosha from "./components/Dosha";
import Yoga from "./components/Yoga"
import Notes from "./components/Notes";
import LinkPage from "./components/LinkPage"
import ScrollToTop from "react-scroll-to-top";
import ScrollUp from "./components/ScrollUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth />
      <ScrollUp /> 
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dosha" element={<Dosha />} />
          <Route path="notes" element={<Notes />} />
          <Route path="yoga" element={<Yoga />} />
          <Route path="linkpage" element={<LinkPage />} />
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
