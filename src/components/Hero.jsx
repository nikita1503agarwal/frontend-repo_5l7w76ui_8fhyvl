import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-100" aria-hidden>
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          <div className="lg:col-span-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-[0_3px_20px_rgba(56,189,248,0.25)]">
              Hi, I’m Alex — a creative developer crafting interactive web experiences
            </h1>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90 max-w-prose">
              I blend code and design to build delightful, performant interfaces. Explore selected work below, and feel free to reach out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center rounded-full bg-blue-500/90 px-6 py-3 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-500 transition-all duration-300">
                View Projects
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white text-sm sm:text-base hover:bg-white/20 transition-colors duration-300">
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-6" aria-hidden>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/10 to-slate-900/60" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
