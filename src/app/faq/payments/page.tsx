import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Payments",
  description: "Payment-related scenarios and error cases for QA coverage.",
  highlights: ["Card", "Wallets", "Failures"],
  cards: [
    {
      title: "Card validation",
      description: "Test invalid card states and error messaging.",
    },
    {
      title: "Wallets",
      description: "Simulate Apple Pay and Google Pay options.",
    },
  ],
};

export default function FaqPaymentsPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
