import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      Hello world
      <Link to="notes">Click to view our Notes page</Link>
      <Link to="dosha">Click to view our Dosha page</Link>
    </main>
  );
};

export default Home;
