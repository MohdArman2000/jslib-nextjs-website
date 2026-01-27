import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Orders",
  description: "Order tracking and status updates used for QA validation.",
  highlights: ["Tracking", "Returns", "Refunds"],
  cards: [
    {
      title: "Order status",
      description: "Validate shipped, delivered, and delayed states.",
    },
    {
      title: "Return flow",
      description: "Test CTA placement and form submission.",
    },
  ],
};

export default function FaqOrdersPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
