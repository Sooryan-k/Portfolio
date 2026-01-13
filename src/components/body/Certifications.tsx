export default function Certifications() {
  return (
    <section className="space-y-6 font-mono">
      <h2 className="text-xl sm:text-2xl font-semibold text-white underline underline-offset-8">
        Certifications
      </h2>

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5">
          <div className="space-y-1">
            <p className="text-lg font-semibold text-white">
              MERN Stack Web Development
            </p>
            <p className="text-sm text-zinc-400">
              Internship – Luminar Technolab, Kochi
            </p>
          </div>

          <p className="text-sm text-zinc-400 whitespace-nowrap">2023</p>
        </div>
      </div>
    </section>
  );
}
