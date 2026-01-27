import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Privacy Policy",
  description: "How QA data is stored, processed, and used for experiments.",
  highlights: ["Masked data", "Short retention", "Internal access"],
  cards: [
    {
      title: "Retention",
      description: "QA logs are rotated regularly for safety.",
    },
    {
      title: "Consent",
      description: "All data is simulated and non-personal.",
    },
  ],
};

export default function HelpPrivacyPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
