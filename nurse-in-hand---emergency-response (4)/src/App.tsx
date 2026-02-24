import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Sponsorship from './components/Sponsorship';
import Donation from './components/Donation';
import Partners from './components/Partners';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Sponsorship />
        <Donation />
        <Partners />
      </main>
      <Contact />
    </div>
  );
}
