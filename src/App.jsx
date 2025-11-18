import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* animated background accents */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute -bottom-20 right-1/4 h-[30vh] w-[50vw] rounded-full bg-cyan-400/10 blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
