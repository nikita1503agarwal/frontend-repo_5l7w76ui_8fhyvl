function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-3 text-blue-100/80 text-base leading-relaxed">
            I’m a frontend-focused full‑stack developer with a love for motion, accessibility, and crisp visual systems. I build responsive, performant products.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Focus', text: 'Design systems, interaction design, and modern web architectures.' },
              { title: 'Stack', text: 'React, TypeScript, Node, FastAPI, Tailwind, Framer Motion.' },
              { title: 'Values', text: 'Clarity, inclusivity, performance, and delightful micro‑interactions.' },
              { title: 'Fun', text: 'Photography, synths, and generative art.' },
            ].map((card) => (
              <div key={card.title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-blue-100/80 text-sm">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
