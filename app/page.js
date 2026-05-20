export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-lime-500/20 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
          Universal Parking Companion
        </div>

        <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight">
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

        <img
          src="/app-preview.png"
          alt="ParkShell App"
          className="mt-20 w-[320px] rounded-[40px] border border-zinc-800 shadow-2xl shadow-lime-500/10"
        />
      </section>
    </main>
  );
}
