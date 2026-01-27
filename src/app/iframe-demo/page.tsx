const iframeHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>QA Iframe Content</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f6f4f5;
        color: #111827;
      }
      .wrap {
        padding: 24px;
      }
      .card {
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        padding: 20px;
        max-width: 520px;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 16px;
      }
      .btn {
        height: 40px;
        border-radius: 999px;
        border: 1px solid #111827;
        padding: 0 16px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.15s ease;
      }
      .btn:active {
        transform: scale(0.95);
      }
      .btn-primary {
        background: #111827;
        color: #ffffff;
      }
      .btn-secondary {
        background: #ffffff;
        color: #111827;
      }
      .btn-muted {
        background: #f3f4f6;
        color: #374151;
        border-color: #d1d5db;
      }
      .badge {
        display: inline-block;
        font-size: 12px;
        padding: 4px 10px;
        border-radius: 999px;
        background: #111827;
        color: #ffffff;
        margin-bottom: 12px;
      }
      h2 {
        margin: 0 0 8px;
        font-size: 20px;
      }
      p {
        margin: 0;
        color: #6b7280;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <span class="badge">Embedded QA</span>
        <h2>Static Iframe Content</h2>
        <p>
          This content is rendered inside an iframe for client-side validation
          and experiment testing.
        </p>
        <div class="actions">
          <button class="btn btn-primary" type="button">Primary CTA</button>
          <button class="btn btn-secondary" type="button">Secondary CTA</button>
          <button class="btn btn-muted" type="button">Muted CTA</button>
        </div>
      </div>
    </div>
  </body>
</html>
`;

export default function IframeDemoPage() {
  return (
    <main className="max-w-frame mx-auto px-4 xl:px-0 py-10 sm:py-14">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Iframe Demo</h1>
        <p className="text-black/60 mb-6">
          This page embeds static HTML inside an iframe for testing purposes.
        </p>
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <iframe
            title="QA static iframe"
            className="w-full h-[320px] rounded-xl border border-black/10"
            srcDoc={iframeHtml}
          />
        </div>
      </div>
    </main>
  );
}
