
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
