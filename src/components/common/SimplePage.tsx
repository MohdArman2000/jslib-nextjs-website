type SimplePageCard = {
  title: string;
  description: string;
};

type SimplePageProps = {
  title: string;
  description: string;
  highlights?: string[];
  cards?: SimplePageCard[];
};

const SimplePage = ({
  title,
  description,
  highlights = [],
  cards = [],
}: SimplePageProps) => {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-10 sm:py-14">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-black/60 mb-6">{description}</p>
        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 bg-white px-4 py-1 text-sm text-black/70"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        {cards.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
                <p className="text-sm text-black/60">{card.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default SimplePage;
