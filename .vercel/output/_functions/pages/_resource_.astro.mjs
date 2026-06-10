/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as defineScriptVars, a as renderSlot, b as addAttribute, e as renderHead, f as createAstro, g as renderComponent } from '../chunks/astro/server_C3CjRDJf.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_DN_pITGV.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ResourceLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResourceLayout;
  const { title, headline, subtitle, pdfUrl, valueProps, ctaText, previewDescription, pages, type, slug } = Astro2.props;
  const typeLabels = {
    "guide": "Guide",
    "cheatsheet": "Cheatsheet",
    "checklist": "Checklist",
    "quick-reference": "Quick Reference",
    "how-to-guide": "How-To Guide"
  };
  const typeLabel = typeLabels[type] || "Guide";
  const badge = `Free ${pages}-Page ${typeLabel}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">', '</head> <body class="bg-white text-dark font-sans antialiased"> <!-- Hero --> <section class="bg-gradient-to-b from-accent-light to-white"> <div class="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center"> <span class="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-6"> ', ' </span> <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-dark"> ', ' </h1> <p class="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"> ', ' </p> <!-- Value Props --> <div class="text-left max-w-md mx-auto space-y-3 mb-10"> ', ' </div> </div> </section> <!-- Form Section --> <section class="max-w-3xl mx-auto px-6 -mt-4"> <div id="form-section" class="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10"> <h2 class="text-2xl font-bold text-center mb-2">Get Instant Access</h2> <p class="text-gray-500 text-center mb-6">', '</p> <!-- Lead Form --> <form id="lead-form" class="space-y-4 max-w-sm mx-auto"> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-1">First Name</label> <input type="text" id="name" name="name" required placeholder="Your first name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label> <input type="email" id="email" name="email" required placeholder="you@example.com" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition"> </div> <button type="submit" class="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 px-6 rounded-lg transition-colors text-lg cursor-pointer"> ', ` </button> <p class="text-xs text-gray-400 text-center">No spam. Unsubscribe anytime.</p> </form> <!-- Success / Resource Reveal (hidden by default) --> <div id="resource-reveal" class="hidden text-center py-6"> <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"> <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <h3 class="text-2xl font-bold mb-2">Here's your `, '!</h3> <p class="text-gray-500 mb-6">Click below to view or download.</p> <a', ' target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 px-8 rounded-lg transition-colors text-lg"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>\nView & Download ', ' </a> </div> </div> </section> <!-- Sales Copy (from markdown body) --> <section class="max-w-3xl mx-auto px-6 py-16"> <div class="prose prose-lg prose-gray max-w-none prose-headings:text-dark prose-h2:text-2xl prose-h3:text-xl prose-a:text-accent prose-strong:text-dark"> ', ' </div> </section> <!-- Footer --> <footer class="border-t border-gray-100 py-8 text-center text-sm text-gray-400">\n&copy; ', " </footer> <!-- Form handling script --> <script>(function(){", `
    const form = document.getElementById('lead-form');
    const reveal = document.getElementById('resource-reveal');

    async function captureLead(name, email) {
      const res = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, resource: slug }),
      });
      if (!res.ok) throw new Error('Failed');
    }

    function showResource() {
      form.classList.add('hidden');
      reveal.classList.remove('hidden');
    }

    // Check for URL parameters (name/email pre-filled from DM automation)
    const params = new URLSearchParams(window.location.search);
    const mcName = params.get('name') || params.get('first_name') || '';
    const mcEmail = params.get('email') || '';

    if (mcName && mcEmail) {
      captureLead(mcName, mcEmail).catch(() => {});
      showResource();
    } else if (mcEmail) {
      document.getElementById('email').value = mcEmail;
    } else if (mcName) {
      document.getElementById('name').value = mcName;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();

      try {
        await captureLead(name, email);
        showResource();
      } catch (err) {
        btn.textContent = originalText;
        btn.disabled = false;
        showResource();
      }
    });
  })();<\/script> </body> </html>`])), addAttribute(subtitle, "content"), title, renderHead(), badge, headline, subtitle, valueProps.map((prop) => renderTemplate`<div class="flex items-start gap-3"> <span class="text-accent font-bold text-lg mt-0.5">&#10003;</span> <span class="text-gray-700">${prop}</span> </div>`), previewDescription, ctaText, typeLabel.toLowerCase(), addAttribute(pdfUrl, "href"), typeLabel, renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear(), defineScriptVars({ slug }));
}, "/Users/kajalsoni/Desktop/AI-Content-System/ai-content-system/lead-pages/src/layouts/ResourceLayout.astro", void 0);

const $$Astro = createAstro();
const $$resource = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$resource;
  const { resource } = Astro2.params;
  const resources = await getCollection("resources");
  const entry = resources.find((r) => r.id.replace(/\.md$/, "") === resource);
  if (!entry) {
    return Astro2.redirect("/");
  }
  const slug = entry.id.replace(/\.md$/, "");
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "ResourceLayout", $$ResourceLayout, { "title": entry.data.title, "headline": entry.data.headline, "subtitle": entry.data.subtitle, "pdfUrl": entry.data.pdfUrl, "valueProps": entry.data.valueProps, "ctaText": entry.data.ctaText, "previewDescription": entry.data.previewDescription, "pages": entry.data.pages, "type": entry.data.type, "slug": slug }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/kajalsoni/Desktop/AI-Content-System/ai-content-system/lead-pages/src/pages/[resource].astro", void 0);

const $$file = "/Users/kajalsoni/Desktop/AI-Content-System/ai-content-system/lead-pages/src/pages/[resource].astro";
const $$url = "/[resource]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$resource,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
