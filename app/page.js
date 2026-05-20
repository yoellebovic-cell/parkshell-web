export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* NAVBAR */}
      <nav className="border-b border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black">ParkShell</h1>

          <button className="rounded-xl bg-lime-400 px-5 py-3 font-bold text-black">
            Download
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center">
        <div className="mb-6 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
          Universal Parking Companion
        </div>

        <h1 className="text-6xl font-black leading-tight tracking-tight">
          One parking timer.
          <br />
          The right vendor every time.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
          ParkShell automatically detects your city and routes
          you to the correct parking provider.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-lime-400 px-8 py-4 text-lg font-bold text-black">
            Download App
          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-bold">
            Join Waitlist
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
            <h3 className="text-2xl font-bold">
              Automatic City Detection
            </h3>

            <p className="mt-4 text-zinc-400">
              Detects where you parked automatically.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
            <h3 className="text-2xl font-bold">
              Unified Parking Timer
            </h3>

            <p className="mt-4 text-zinc-400">
              One timer for every parking session.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
            <h3 className="text-2xl font-bold">
              No More App Chaos
            </h3>

            <p className="mt-4 text-zinc-400">
              Stop juggling multiple parking apps.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-500">
        © 2026 ParkShell
      </footer>
    </main>
  );
}
