import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Career",
  description: "Open roles and ways to contribute to the QA environment.",
  highlights: ["Automation", "Frontend QA", "Analytics"],
  cards: [
    {
      title: "QA Engineer",
      description: "Build and maintain end-to-end scenarios.",
    },
    {
      title: "Frontend Partner",
      description: "Prototype UI variants for experimentation.",
    },
  ],
};

export default function CompanyCareerPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
