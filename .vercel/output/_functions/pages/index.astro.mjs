/* empty css                                      */
import { c as createComponent, e as renderHead, r as renderTemplate, b as addAttribute } from '../chunks/astro/server_C3CjRDJf.mjs';
import 'piccolore';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DN_pITGV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const resources = await getCollection("resources");
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Free Resources</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-white text-dark font-sans antialiased"> <div class="max-w-2xl mx-auto px-6 py-20 text-center"> <h1 class="text-4xl font-extrabold mb-4">Free Resources</h1> <p class="text-gray-500 text-lg mb-12">Guides, cheatsheets, and checklists to level up your skills.</p> ${resources.length === 0 ? renderTemplate`<p class="text-gray-400 text-sm">No resources yet. Add a <code>.md</code> file to <code>src/content/resources/</code> to get started.</p>` : renderTemplate`<div class="space-y-4 text-left"> ${resources.map((r) => renderTemplate`<a${addAttribute(`/${r.id.replace(/\.md$/, "")}`, "href")} class="block border border-gray-200 rounded-xl p-6 hover:border-accent hover:shadow-md transition"> <div class="flex items-center justify-between"> <div> <h2 class="font-bold text-lg">${r.data.title}</h2> <p class="text-gray-500 text-sm mt-1">${r.data.previewDescription}</p> </div> <span class="text-accent font-semibold text-sm whitespace-nowrap ml-4">${r.data.pages}-page ${r.data.type} &rarr;</span> </div> </a>`)} </div>`} </div> </body></html>`;
}, "/Users/kajalsoni/Desktop/AI-Content-System/ai-content-system/lead-pages/src/pages/index.astro", void 0);

const $$file = "/Users/kajalsoni/Desktop/AI-Content-System/ai-content-system/lead-pages/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
