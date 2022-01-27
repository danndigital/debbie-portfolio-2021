import { Link } from "react-router-dom";
import Header from "./Header";
import Skills from "./Skills"

const Home = () => {
  return (
    <main>
      <Header />
      <Skills />
      <br />
      <br />
      <br />
      <br />
      <Link to="notes">Click to view our Notes page</Link>
      <Link to="dosha">Click to view our Dosha page</Link>
    </main>
  );
};

export default Home;
