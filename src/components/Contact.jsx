function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
            <p className="mt-2 text-blue-100/80 max-w-prose">I’m open to freelance work, collaborations, and interesting product challenges.</p>
          </div>
          <a href="mailto:hello@example.com" className="group inline-flex items-center rounded-full bg-blue-500/90 px-6 py-3 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-500 transition-all duration-300">
            Email me
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-blue-100/60">© {new Date().getFullYear()} Alex Doe • Crafted with care</p>
    </section>
  );
}

export default Contact;
