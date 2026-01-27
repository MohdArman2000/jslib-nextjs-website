import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Works",
  description: "Example flows and journeys used for QA validation.",
  highlights: ["Home", "Product list", "PDP", "Cart"],
  cards: [
    {
      title: "Discovery",
      description: "Homepage to category browsing flow.",
    },
    {
      title: "Conversion",
      description: "Product page to cart and checkout flow.",
    },
  ],
};

export default function CompanyWorksPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
