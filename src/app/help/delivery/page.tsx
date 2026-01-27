import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Delivery Details",
  description: "Mock delivery timelines used for QA scenarios and demos.",
  highlights: ["Standard", "Express", "International"],
  cards: [
    {
      title: "Standard",
      description: "3-5 business days for baseline experiments.",
    },
    {
      title: "Express",
      description: "1-2 business days for premium test flows.",
    },
  ],
};

export default function HelpDeliveryPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
