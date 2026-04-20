import Link from 'next/link';

export default function LocaMatPage() {
  return (
    <main className="min-h-screen px-6 py-24 flex items-center justify-center">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200/70 dark:border-lightest-navy bg-white/90 dark:bg-light-navy p-8 sm:p-10 shadow-xl text-center">
        <p className="font-mono text-teal-600 dark:text-cyan text-sm mb-3">Project Status</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy dark:text-lightest-slate mb-4">LocaMat is not live yet</h1>
        <p className="text-secondary dark:text-light-slate text-base sm:text-lg leading-relaxed mb-8">
          This Moroccan material rental platform is currently under development. The public version will be available soon.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-teal-600 text-white hover:bg-teal-700 dark:bg-cyan dark:text-navy dark:hover:bg-cyan/90 transition-colors"
        >
          Back to Homepage
        </Link>
      </section>
    </main>
  );
}
