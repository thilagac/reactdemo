
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Project/>
    </div>
  );
}

export default App;
