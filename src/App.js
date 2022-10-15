import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Buzzphonics from "./components/Buzzphonics";
import Yoga from "./components/Yoga"
import Notes from "./components/Notes";
import LinkPage from "./components/LinkPage"
import ScrollToTop from "react-scroll-to-top";
import ScrollUp from "./components/ScrollUp"; 
import "./App.css";
import ErrorPage from "./components/404";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth />
      <ScrollUp /> 
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buzzphonics" element={<Buzzphonics />} />
          <Route path="notes" element={<Notes />} />
          <Route path="yoga" element={<Yoga />} />
          <Route path="linkpage" element={<LinkPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
