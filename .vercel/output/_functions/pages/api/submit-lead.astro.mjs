export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { name, email, resource } = await request.json();
    const notionKey = undefined                              ;
    const dbId = undefined                                  ;
    if (!notionKey || !dbId) {
      return new Response(
        JSON.stringify({ error: "Missing Notion configuration" }),
        { status: 500 }
      );
    }
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${notionKey}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        parent: { database_id: dbId },
        properties: {
          Name: {
            title: [{ text: { content: name } }]
          },
          Email: {
            email
          },
          Resource: {
            select: { name: resource || "Other" }
          }
        }
      })
    });
    if (!response.ok) {
      const error = await response.text();
      console.error("Notion API error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save lead" }),
        { status: 500 }
      );
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
