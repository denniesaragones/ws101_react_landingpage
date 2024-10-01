import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
