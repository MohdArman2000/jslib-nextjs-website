import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Manage Deliveries",
  description: "Delivery management scenarios and expected QA behavior.",
  highlights: ["Address change", "Schedule", "Status updates"],
  cards: [
    {
      title: "Reschedule",
      description: "Verify date selection and confirmation messaging.",
    },
    {
      title: "Address update",
      description: "Test validation for address forms and fields.",
    },
  ],
};

export default function FaqDeliveriesPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
