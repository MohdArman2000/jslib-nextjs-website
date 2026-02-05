import { withBasePath } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-10 sm:py-14">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h1>
        <p className="text-black/60 mb-8">
          Have a request for a QA scenario or a new page? Share the details and
          we will add it to this test site.
        </p>
        <form
          className="grid gap-4"
          method="get"
          action={withBasePath("/contact/thanks")}
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              className="h-12 rounded-xl border border-black/10 px-4 bg-white"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@company.com"
              className="h-12 rounded-xl border border-black/10 px-4 bg-white"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="topic" className="text-sm font-medium">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="h-12 rounded-xl border border-black/10 px-4 bg-white"
              defaultValue="experiment"
            >
              <option value="experiment">Experiment setup</option>
              <option value="tracking">Tracking validation</option>
              <option value="ui">UI change request</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Describe the QA scenario or page you want."
              className="rounded-xl border border-black/10 px-4 py-3 bg-white"
            />
          </div>
          <button
            type="submit"
            className="h-12 rounded-full bg-black text-white px-6 w-fit hover:bg-black/80 transition-all"
          >
            Send message
          </button>
        </form>
      </div>
    </main>
  );
}
