export default function AboutPage() {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-10 sm:py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About</h1>
        <p className="text-black/60 mb-6">
          This QA site is used to validate client-side experiments, tracking,
          and UI changes for VWO. It mirrors a production-like layout so we can
          safely test variations and integrations.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-black/10 p-5 bg-white">
            <h2 className="text-lg font-semibold mb-2">Purpose</h2>
            <p className="text-sm text-black/60">
              Run A/B tests, feature flags, and SmartCode validations without
              impacting production.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 p-5 bg-white">
            <h2 className="text-lg font-semibold mb-2">Scope</h2>
            <p className="text-sm text-black/60">
              Frontend-only flows, routing, and UI experiments across pages.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
