export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-500/20 blur-3xl" />

      {/* NAVBAR */}
      <nav className="relative z-20 border-b border-zinc-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-black tracking-tight">
            ParkShell
          </div>

          <div className="hidden gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>

            <a href="#how" className="hover:text-white">
              How It Works
            </a>

            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>

          <button className="rounded-xl bg-lime-400 px-5 py-3 text-sm font-bold text-black transition hover:scale-105">
            Download
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
        <div className="mb-6 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
          Universal Parking Companion
        </div>

        <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight md:text-7xl">
          One parking timer.
          <br />
          The right vendor every time.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
          ParkShell automatically detects your city,
          routes you to the correct parking provider,
          and keeps track of your parking session with
          one unified timer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-2xl bg-lime-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105">
            Download App
          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-bold transition hover:border-zinc-500">
            Join Waitlist
          </button>
        </div>

        {/* MOCKUP */}
        <div className="mt-24">
          <div className="rounded-[40px] border border-zinc-800 bg-zinc-900/60 p-5 shadow-2xl shadow-lime-500/10 backdrop-blur">
            <div className="w-[320px] rounded-[32px] bg-[#0A0A0A] p-6 text-left">
              <p className="text-sm font-bold uppercase text-lime-400">
                Ready to park
              </p>

              <h2 className="mt-2 text-4xl font-black">
                ParkShell
              </h2>

              <p className="mt-2 text-zinc-400">
                One parking timer.
              </p>

              <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-5">
                <p className="text-xs font-bold uppercase text-zinc-500">
                  Detected city
                </p>

                <p className="mt-2 text-3xl font-black">
                  Boston
                </p>

                <div className="my-5 h-px bg-zinc-800" />

                <p className="text-xs font-bold uppercase text-zinc-500">
                  Parking provider
                </p>

                <p className="mt-2 text-3xl font-black">
                  ParkMobile
                </p>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-lime-400 py-4 text-lg font-black text-black">
                Start Parking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold">
              Automatic City Detection
            </h3>

            <p className="mt-4 text-zinc-400">
              ParkShell detects where you parked and
              routes you to the correct parking provider.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold">
              Unified Parking Timer
            </h3>

            <p className="mt-4 text-zinc-400">
              One clean timer for every parking session
              regardless of vendor.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur">
            <h3 className="text-2xl font-bold">
              No More App Chaos
            </h3>

            <p className="mt-4 text-zinc-400">
              Stop juggling multiple parking apps between
              cities and parking systems.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how"
        className="relative z-10 mx-auto max-w-5xl px-6 py-24"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-lime-400">
            How It Works
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Parking simplified
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <div className="mb-6 text-5xl font-black text-lime-400">
              1
            </div>

            <h3 className="text-2xl font-bold">
              Open ParkShell
            </h3>

            <p className="mt-4 text-zinc-400">
              The app automatically detects your location.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <div className="mb-6 text-5xl font-black text-lime-400">
              2
            </div>

            <h3 className="text-2xl font-bold">
              Enter Zone
            </h3>

            <p className="mt-4 text-zinc-400">
              Enter the zone number from the parking sign.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <div className="mb-6 text-5xl font-black text-lime-400">
              3
            </div>

            <h3 className="text-2xl font-bold">
              Start Parking
            </h3>

            <p className="mt-4 text-zinc-400">
              ParkShell opens the correct parking app and
              starts your unified timer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 mx-auto max-w-4xl px-6 py-24"
      >
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-lime-400">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Questions
          </h2>
        </div>

        <div className="mt-16 space-y-6">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <h3 className="text-2xl font-bold">
              Does ParkShell process payments?
            </h3>

            <p className="mt-4 text-zinc-400">
              No. ParkShell routes users to the official
              parking vendor app required by each city.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <h3 className="text-2xl font-bold">
              Which parking apps are supported?
            </h3>

            <p className="mt-4 text-zinc-400">
              ParkMobile, PayByPhone, Passport, and more.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8">
            <h3 className="text-2xl font-bold">
              Why use ParkShell?
            </h3>

            <p className="mt-4 text-zinc-400">
              Instead of juggling multiple parking apps,
              ParkShell gives you one consistent experience.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 ParkShell</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Support
            </a>

            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
