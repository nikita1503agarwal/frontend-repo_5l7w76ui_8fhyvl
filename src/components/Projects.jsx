function Projects() {
  const projects = [
    {
      title: 'Interactive Data Viz',
      desc: 'D3 + React experiment with animated charts and real‑time updates.',
      tag: 'Featured',
    },
    {
      title: '3D Landing Page',
      desc: 'Spline‑powered hero with smooth scroll and parallax layers.',
      tag: 'WebGL',
    },
    {
      title: 'Design System',
      desc: 'Composable components, tokens, and themes for rapid product building.',
      tag: 'UI/UX',
    },
    {
      title: 'API Toolkit',
      desc: 'OpenAPI based toolkit for rapid backend prototyping and testing.',
      tag: 'Backend',
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="mt-3 text-blue-100/80 max-w-prose">A few highlights showcasing craft, performance, and interactivity.</p>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-white text-sm hover:bg-white/20 transition-colors duration-300">
          Work with me
        </a>
      </div>

      {/* Grid section using CSS Grid explicitly */}
      <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))' }}>
        {projects.map((p) => (
          <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <span className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-300 text-xs px-2 py-1">{p.tag}</span>
            <h3 className="mt-3 text-white text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-blue-100/80">{p.desc}</p>
            <button className="mt-6 inline-flex items-center rounded-full bg-blue-500/90 px-4 py-2 text-white text-sm font-medium shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-blue-500">
              View details
            </button>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'radial-gradient(120% 120% at 0% 0%, rgba(59,130,246,0.15), transparent 60%)' }} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
