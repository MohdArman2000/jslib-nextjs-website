import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Customer Support",
  description:
    "Reach the QA team for help with experiment setup and validation.",
  highlights: ["SmartCode", "Tracking", "Release checks"],
  cards: [
    {
      title: "Response time",
      description: "Typical response within one business day.",
    },
    {
      title: "Channels",
      description: "Slack, email, and ticketing support.",
    },
  ],
};

export default function HelpSupportPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
