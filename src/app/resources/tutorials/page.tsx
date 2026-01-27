import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Development Tutorials",
  description: "Guides for setting up QA experiments and validating events.",
  highlights: ["Routing", "Events", "SmartCode"],
  cards: [
    {
      title: "SmartCode setup",
      description: "Install and verify SmartCode loading behavior.",
    },
    {
      title: "Event validation",
      description: "Simulate conversions and track goal firing.",
    },
  ],
};

export default function ResourcesTutorialsPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
