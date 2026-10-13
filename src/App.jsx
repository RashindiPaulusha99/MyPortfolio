import Announcement from './components/Announcement.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FindMe from './components/FindMe.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import TechStrip from './components/TechStrip.jsx';
import Portfolio from './components/Portfolio.jsx';
import Quote from './components/Quote.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="absolute -top-24 left-4 z-50 bg-espresso px-4 py-3 text-panel focus:top-3"
      >
        Skip to content
      </a>
      <Announcement />
      <Header />
      <main id="main">
        <Hero />
        <FindMe />
        <About />
        <Services />
        <TechStrip />
        <Portfolio />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
