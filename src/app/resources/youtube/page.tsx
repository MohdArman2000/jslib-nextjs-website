import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "YouTube Playlist",
  description: "Video walkthroughs for QA setups and SmartCode validation.",
  highlights: ["Install", "Verify", "Analyze"],
  cards: [
    {
      title: "Quick start",
      description: "End-to-end setup in under 5 minutes.",
    },
    {
      title: "Troubleshooting",
      description: "Common fixes for missing impressions or goals.",
    },
  ],
};

export default function ResourcesYoutubePage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
