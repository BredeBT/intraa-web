export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <header className="flex justify-between items-center mb-24">
          <h1 className="text-xl font-semibold tracking-wide">
            Intraa
          </h1>

          <a
            href="/login"
            className="text-sm text-slate-300 hover:text-white transition"
          >
            Log in
          </a>
        </header>

        <section className="max-w-3xl">
          <h2 className="text-5xl font-semibold leading-tight mb-6">
            Bygg ditt eget community
            <br />
            rundt ditt publikum
          </h2>

          <p className="text-lg text-slate-400 mb-10">
            Intraa er en plattform for streamere og virksomheter som ønsker
            å samle publikum, innhold og betaling i sitt eget univers –
            brukt parallelt med stream eller video.
          </p>

          <div className="inline-block rounded-lg border border-slate-800 bg-slate-900 px-6 py-4 text-slate-400 text-sm">
            Tidlig fase – produkt under utvikling
          </div>
        </section>
      </div>
    </main>
  );
}
