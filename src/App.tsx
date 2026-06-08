import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
