import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "How-to Blog",
  description: "QA notes, experiment playbooks, and troubleshooting tips.",
  highlights: ["Optimization", "Segmentation", "Debugging"],
  cards: [
    {
      title: "Targeting basics",
      description: "Define audiences for controlled QA runs.",
    },
    {
      title: "Debug checklist",
      description: "Common steps to validate experiment delivery.",
    },
  ],
};

export default function ResourcesBlogPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
