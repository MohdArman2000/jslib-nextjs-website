import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "About",
  description:
    "Overview of the QA site and how it supports client-side testing.",
  highlights: ["Experiment-safe", "Client-side focus", "Repeatable flows"],
  cards: [
    {
      title: "Mission",
      description:
        "Create a stable testing surface for VWO SmartCode validation.",
    },
    {
      title: "Principles",
      description:
        "Keep UI realistic, routes stable, and behavior predictable.",
    },
  ],
};

export default function CompanyAboutPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
