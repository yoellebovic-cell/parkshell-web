export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
        <div className="mb-6 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
          Universal Parking Companion
        </div>

        <h1 className="max-w-4xl text-6xl font-black leading-tight tracking-tight">
          One parking timer.
          <br />
          The right vendor every time.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
          ParkShell detects your city, opens the correct parking app,
          and keeps track of your parking session with one unified timer.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-2xl bg-lime-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105">
            Download App
          </button>

          <button className="rounded-2xl border border-zinc-700 bg-zinc-900 px-8 py-4 text-lg font-bold transition hover:border-zinc-500">
            Join Waitlist
          </button>
        </div>
      </section>
    </main>
  );
}
