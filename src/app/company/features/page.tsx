import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Features",
  description:
    "A snapshot of the UI and experimentation features available to test.",
  highlights: ["Navigation", "Cart flow", "Product detail", "Filters"],
  cards: [
    {
      title: "Targeting",
      description: "Stable routes and selectors for audience targeting.",
    },
    {
      title: "Analytics",
      description: "Event-friendly layouts for conversion tracking.",
    },
  ],
};

export default function CompanyFeaturesPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
