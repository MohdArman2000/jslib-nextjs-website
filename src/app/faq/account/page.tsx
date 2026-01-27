import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Account",
  description: "Common account-related questions for QA test flows.",
  highlights: ["Login", "Profile", "Security"],
  cards: [
    {
      title: "Password reset",
      description: "Validate reset flows with mock emails.",
    },
    {
      title: "Session",
      description: "Ensure session persistence across pages.",
    },
  ],
};

export default function FaqAccountPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
