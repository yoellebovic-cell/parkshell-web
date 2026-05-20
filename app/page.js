export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* GLOW */}
      <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime-500/20 blur-3xl" />

      {/* NAVBAR */}
      <nav className="relative z-20 border-b border-zinc-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-black tracking-tight">
            ParkShell
          </h1>

          <button className="rounded-xl bg-lime-400 px-5 py-3 font-bold text-black transition hover:scale-105">
            Download
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center">
        <div className="mb-6 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
          Universal Parking Companion
        </div>

        <h1 className="text-6xl font-black leading-tight tracking-tight md:text-7xl">
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

        <div className="mt-10 flex gap-4">
          <button className="rounded-2xl bg-lime-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105">
            Download App
          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-bold transition hover:border-zinc-500">
            Join Waitlist
          </button>
        </div>

        {/* MOCK PHONE */}
        <div className="mt-24 rounded-[40px] border border-zinc-800 bg-zinc-900/60 p-5 shadow-2xl shadow-lime-500/10 backdrop-blur">
          <div className="w-[320px] rounded-[32px] bg-[#0A0A0A] p-6 text-left">
            <p className="text-sm font-bold uppercase text-lime-400">
              Ready to park
            </p>

            <h2 className="mt-2 text-4xl font-black">
              ParkShell
            </h2>

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
      </section>
    </main>
  );
}
