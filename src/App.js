export default function ShireMaxxComingSoonPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-8 md:px-10 lg:px-12">
          <header className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">Shire Maxx</p>
            </div>
            <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-neutral-300">
              Coming Soon
            </div>
          </header>

          <main className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-neutral-400">People-first consulting</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Clear strategy.
                <span className="block text-neutral-400">Human execution.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                Shire Maxx helps businesses strengthen customer experience, sharpen operations, and move with more clarity.
                We are building a consulting firm designed to solve real problems, improve how people experience your business,
                and create momentum where teams have felt stuck.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Customer Experience</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Operational Improvement</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Growth Support</span>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:hello@shiremaxx.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.01]"
                >
                  Contact Us
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-6">
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">Built for practical impact</p>
                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium">What we focus on</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">
                      Helping teams improve service, tighten execution, and create stronger customer trust.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium">Who we support</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">
                      Founders, operators, and service-driven businesses that want clearer systems and better outcomes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium">What’s next</p>
                    <p className="mt-2 text-sm leading-7 text-neutral-400">
                      A full site is on the way. For now, we are opening the door to early conversations and select opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <section id="about" className="grid gap-6 border-t border-white/10 py-8 text-sm text-neutral-400 md:grid-cols-3 md:py-10">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">Approach</p>
              <p className="leading-7">
                Thoughtful, direct, and centered on real utility rather than inflated language.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">Positioning</p>
              <p className="leading-7">
                A modern consulting brand with a people-first lens and a bias toward action.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-500">Availability</p>
              <p className="leading-7">
                Currently preparing for launch and open to early-stage conversations.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
