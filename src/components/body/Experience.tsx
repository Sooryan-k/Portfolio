export default function Experience() {
  return (
    <section className="space-y-14 font-mono p-3">
      {/* work experience */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white underline underline-offset-8">
          Work Experience
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md divide-y divide-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5">
            <div>
              <p className="text-lg font-semibold text-white">
                K4rm4 Social Feedback Systems
              </p>
              <p className="text-sm text-zinc-400">Full Stack Developer</p>
            </div>

            <p className="text-sm text-zinc-400 whitespace-nowrap">
              Feb 2025 – Sep 2025
            </p>
          </div>
        </div>
      </div>

      {/* education */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white underline underline-offset-8">
          Education
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md divide-y divide-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5">
            <div>
              <p className="text-lg font-semibold text-white">
                LBS College of Engineering, Kasaragod
              </p>
              <p className="text-sm text-zinc-400">
                B.Tech. in Computer Science & Engineering
              </p>
            </div>

            <p className="text-sm text-zinc-400 whitespace-nowrap">
              2018 – 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
