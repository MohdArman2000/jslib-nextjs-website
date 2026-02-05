const confirmationCards = [
  {
    title: "Submission received",
    description:
      "Your request has been logged and will be reviewed by the QA team.",
  },
  {
    title: "What happens next",
    description:
      "We will follow up with a timeline and any additional information needed.",
  },
];

export default function ContactThanksPage() {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-10 sm:py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Form submitted
        </h1>
        <p className="text-black/60 mb-6">
          Thanks for reaching out. This is a confirmation page for the QA
          contact form.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {confirmationCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-black/10 bg-white p-5"
            >
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-black/60">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
