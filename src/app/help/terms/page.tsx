import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Terms & Conditions",
  description: "Usage guidelines for QA assets, experiments, and test data.",
  highlights: ["Non-production", "No PII", "Testing only"],
  cards: [
    {
      title: "Data handling",
      description: "Use mock data for all QA scenarios.",
    },
    {
      title: "Access",
      description: "Links are for internal testing and demos.",
    },
  ],
};

export default function HelpTermsPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
