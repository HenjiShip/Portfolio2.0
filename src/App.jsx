import Home from "../pages/Home";
import Footer from "../pages/Footer";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import About from "../pages/About";

function App() {
  return (
    <div>
      <Home />
      <div className="line" />
      <Portfolio />
      <About />
      <div className="line" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
