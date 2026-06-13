export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(37,99,235,0.25),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-8">
        <header className="flex items-center justify-between py-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="DNZ Labs"
              className="w-30 h-30"
            />

            <div>
              <h1 className="text-3xl font-bold">
                DNZ <span className="text-blue-500">Labs</span>
              </h1>

              <p className="text-sm text-zinc-400">
                AI Engineering & Applied Research
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#research" className="hover:text-blue-400">Research</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </header>

        <section className="grid min-h-[80vh] items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-medium text-blue-500">
              AI Engineering & Applied Research
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
              Building intelligent{" "}
              <span className="text-blue-500">systems</span>, agents and
              automation.
            </h2>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-400">
              Designing and deploying AI systems, agents and automation solutions for real-world business challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-medium transition hover:bg-blue-500">
                View Projects
              </button>

              <a
                href="https://github.com/dnzgen13"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-700 px-8 py-4 font-medium transition hover:border-blue-500 hover:text-blue-400"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="relative hidden h-[560px] items-center justify-center lg:flex translate-x-24">
            <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-3xl" />

            <img
              src="/hero-brain.png"
              alt="AI neural brain visualization"
              className="relative w-[1000px] max-w-none animate-float-brain drop-shadow-[0_0_80px_rgba(59,130,246,0.55)]"
            />
          </div>
        </section>
        {/* Services */}

        <section className="pt-24 pb-20">
          <div className="mb-16">
            <p className="mb-3 text-blue-500 font-medium">
              What We Build
            </p>

            <h3 className="text-5xl font-bold">
              AI Solutions for
              <br />
              Real-World Problems
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur">
              <div className="mb-6 text-4xl">🤖</div>

              <h4 className="mb-4 text-2xl font-semibold">
                AI Agents
              </h4>

              <p className="text-zinc-400 leading-7">
                Autonomous AI systems capable of
                research, monitoring, task execution
                and intelligent decision support.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur">
              <div className="mb-6 text-4xl">🧠</div>

              <h4 className="mb-4 text-2xl font-semibold">
                LLM Applications
              </h4>

              <p className="text-zinc-400 leading-7">
                Modern applications powered by
                Large Language Models including
                assistants, copilots and knowledge systems.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 backdrop-blur">
              <div className="mb-6 text-4xl">📊</div>

              <h4 className="mb-4 text-2xl font-semibold">
                Information Intelligence
              </h4>

              <p className="text-zinc-400 leading-7">
                Data collection, analysis and
                intelligence systems for monitoring
                trends, events and strategic insights.
              </p>
            </div>

          </div>
        </section>
        {/* Featured Projects */}

        <section id="projects" className="pt-24 pb-20 scroll-mt-24">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-medium text-blue-500">
                Featured Projects
              </p>

              <h3 className="text-5xl font-bold">
                AI Systems,
                <br />
                Agents & Automation
              </h3>
            </div>

            <p className="max-w-xl text-lg leading-8 text-zinc-400">
              Applied AI projects focused on intelligent agents,
              business automation, research workflows and practical AI systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition hover:border-blue-500/60 hover:bg-zinc-900/80">
              <div className="mb-8 flex h-48 items-center justify-center rounded-2xl border border-zinc-800 bg-black/60">
                <div className="text-6xl">📰</div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Python
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  LLM
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Automation
                </span>
              </div>

              <h4 className="mb-4 text-2xl font-semibold">
                AI Agent Systems
              </h4>

              <p className="mb-8 leading-7 text-zinc-400">
                Autonomous and semi-autonomous agents for research, data processing
                and business workflows.
              </p>

              <a href="#" className="font-medium text-blue-400 group-hover:text-blue-300">
                View Project →
              </a>
            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition hover:border-blue-500/60 hover:bg-zinc-900/80">
              <div className="mb-8 flex h-48 items-center justify-center rounded-2xl border border-zinc-800 bg-black/60">
                <div className="text-6xl">📄</div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  RAG
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Vector DB
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  FastAPI
                </span>
              </div>

              <h4 className="mb-4 text-2xl font-semibold">
                Business Automation
              </h4>

              <p className="mb-8 leading-7 text-zinc-400">
                AI-powered automation systems designed to streamline business
                operations and digital workflows.
              </p>

              <a href="#" className="font-medium text-blue-400 group-hover:text-blue-300">
                View Project →
              </a>
            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8 transition hover:border-blue-500/60 hover:bg-zinc-900/80">
              <div className="mb-8 flex h-48 items-center justify-center rounded-2xl border border-zinc-800 bg-black/60">
                <div className="text-6xl">🔎</div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Agents
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Research
                </span>
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  Reports
                </span>
              </div>

              <h4 className="mb-4 text-2xl font-semibold">
                AI Research Assistant
              </h4>

              <p className="mb-8 leading-7 text-zinc-400">
                AI-powered research assistant for collecting information, analyzing sources and generating structured reports.
              </p>

              <a href="#" className="font-medium text-blue-400 group-hover:text-blue-300">
                View Project →
              </a>
            </div>

          </div>
        </section>
        {/* Technologies */}

        <section className="py-32">
          <div className="text-center">

            <p className="mb-4 font-medium text-blue-500">
              Technologies & Tools
            </p>

            <h3 className="mb-6 text-5xl font-bold">
              Modern AI Engineering Stack
            </h3>

            <p className="mx-auto mb-16 max-w-3xl text-lg leading-8 text-zinc-400">
              The technologies used to build scalable AI applications,
              intelligent agents and data-driven systems.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">🐍</div>
              <h4 className="font-semibold">Python</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">⚡</div>
              <h4 className="font-semibold">FastAPI</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">🗄️</div>
              <h4 className="font-semibold">PostgreSQL</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">🤖</div>
              <h4 className="font-semibold">OpenAI</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">🔗</div>
              <h4 className="font-semibold">LangChain</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">🐳</div>
              <h4 className="font-semibold">Docker</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">🐧</div>
              <h4 className="font-semibold">Linux</h4>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 text-center">
              <div className="mb-4 text-4xl">📊</div>
              <h4 className="font-semibold">Data Analytics</h4>
            </div>

          </div>
        </section>
        {/* About */}

        <section id="about" className="py-32 scroll-mt-24">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 font-medium text-blue-500">
                About DNZ Labs
              </p>

              <h3 className="mb-8 text-5xl font-bold">
                AI Engineering &
                Applied Research.
              </h3>

              <p className="mb-6 text-lg leading-8 text-zinc-400">
                DNZ Labs designs and deploys AI systems, intelligent agents
                and automation solutions for real-world business challenges.
              </p>

              <p className="text-lg leading-8 text-zinc-400">
                Our work combines applied AI engineering, research and
                automation to create practical solutions that improve
                business processes and decision-making.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <div className="grid gap-6">
                <div>
                  <p className="text-4xl font-bold text-blue-500">03+</p>
                  <p className="text-zinc-400">Core AI focus areas</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-blue-500">08+</p>
                  <p className="text-zinc-400">Technologies in stack</p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-blue-500">2026</p>
                  <p className="text-zinc-400">Active development roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Research */}

        <section id="research" className="py-32 scroll-mt-24">
          <div className="mb-16">
            <p className="mb-4 font-medium text-blue-500">
              Research & Publications
            </p>

            <h3 className="mb-6 text-5xl font-bold">
              Current Research Areas
            </h3>

            <p className="max-w-3xl text-lg leading-8 text-zinc-400">
              Areas of interest and ongoing exploration in artificial intelligence,
              automation and information systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <p className="mb-4 text-blue-500">
                01
              </p>

              <h4 className="mb-4 text-2xl font-semibold">
                AI Agents
              </h4>

              <p className="leading-7 text-zinc-400">
                Autonomous systems capable of planning,
                execution and decision support.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <p className="mb-4 text-blue-500">
                02
              </p>

              <h4 className="mb-4 text-2xl font-semibold">
                Retrieval Systems
              </h4>

              <p className="leading-7 text-zinc-400">
                Knowledge retrieval, semantic search
                and document intelligence.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-8">
              <p className="mb-4 text-blue-500">
                03
              </p>

              <h4 className="mb-4 text-2xl font-semibold">
                Information Intelligence
              </h4>

              <p className="leading-7 text-zinc-400">
                Data collection, monitoring and
                analytical decision support systems.
              </p>
            </div>

          </div>
        </section>
        {/* Contact */}

        <section id="contact" className="py-32 scroll-mt-24">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-10 md:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="mb-4 font-medium text-blue-500">
                  Contact
                </p>

                <h3 className="mb-6 text-5xl font-bold">
                  Let&apos;s build practical AI systems.
                </h3>

                <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                  Interested in AI systems, intelligent agents, automation or applied research?
                  Let&apos;s discuss your project, idea or collaboration.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:contact@dnzlabs.tech"
                  className="rounded-xl bg-blue-600 px-8 py-4 text-center font-medium transition hover:bg-blue-500"
                >
                  contact@dnzlabs.tech
                </a>

                <a
                  href="https://github.com/dnzgen13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-700 px-8 py-4 text-center font-medium transition hover:border-blue-500 hover:text-blue-400"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <footer className="border-t border-zinc-900 py-10">
          <div className="flex flex-col justify-between gap-4 text-sm text-zinc-500 md:flex-row">
            <p>
              © 2026 DNZ Labs. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="https://github.com/dnzgen13"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/dnzaytsev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/dnzaytsev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                X
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}