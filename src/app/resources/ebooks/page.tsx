import SimplePage from "@/components/common/SimplePage";

const content = {
  title: "Free eBooks",
  description: "Reference material and docs used for QA training and onboarding.",
  highlights: ["Playbooks", "Checklists", "Templates"],
  cards: [
    {
      title: "Experiment Playbook",
      description: "Guidance on setting up repeatable experiments.",
    },
    {
      title: "Tracking Checklist",
      description: "Validate events, goals, and revenue tracking.",
    },
  ],
};

export default function ResourcesEbooksPage() {
  return (
    <SimplePage
      title={content.title}
      description={content.description}
      highlights={content.highlights}
      cards={content.cards}
    />
  );
}
