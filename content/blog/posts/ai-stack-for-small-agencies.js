const post = {
  slug: "ai-stack-for-small-agencies",
  title: "The AI stack for a small agency: what to pay for, what to skip.",
  metaTitle: "The AI Tool Stack for Small Agencies",
  metaDescription:
    "Four core tools cover most agency needs: a team assistant, a coding assistant, a meeting notetaker, and an automation platform. What to buy, skip, and consolidate.",
  kicker: "tools:and:stack",
  accentName: "blue",
  date: "2026-06-09",
  excerpt:
    "Four categories cover most agency needs. Most stacks we audit have twice the subscriptions and half the usage. The full list, plus what to cancel.",
  answer: [
    "A 5-to-50-person agency needs four core AI tools: a team assistant (ChatGPT Team or Claude Team), a coding assistant if you ship code, a meeting notetaker, and an automation platform. Most agency stacks we audit have twice the subscriptions and half the usage. Here's the full stack, what each layer is for, and what to cancel.",
  ],
  takeaways: [
    "Four categories cover most agency needs; everything else is situational.",
    "Buy team plans, not personal accounts: data controls, shared assets, and admin visibility are the point.",
    "The most common waste is single-purpose tools duplicating what the assistant already does.",
    "Re-evaluate quarterly with usage numbers in hand. The stack that was right in January is bloated by June.",
  ],
  sections: [
    {
      heading: "The four core layers.",
      paragraphs: ["Whatever your service mix, these four layers do the heavy lifting:"],
      bullets: [
        {
          title: "Team assistant",
          body: "ChatGPT Team or Claude Team, around $25 to $30 a seat. The workhorse: writing, analysis, research, client comms. Pick one as the default; see our comparison for which.",
        },
        {
          title: "Coding assistant",
          body: "Claude Code, Cursor, or GitHub Copilot for every developer. If you ship code, this is the single highest-return seat in the stack.",
        },
        {
          title: "Meeting notetaker",
          body: "Granola, Fathom, Fireflies, or the recorder built into your video tool. The value isn't the transcript; it's what you pipe the transcript into: tickets, summaries, CRM notes.",
        },
        {
          title: "Automation platform",
          body: "Zapier, Make, or n8n to wire the other three into your PM tool and inbox. This is where individual productivity becomes team workflow.",
        },
      ],
    },
    {
      heading: "Situational additions.",
      paragraphs: ["Add these when the work justifies them, not before:"],
      list: [
        "**Design and image tools** (Figma's AI features, Midjourney) when visual production is a real share of billable work.",
        "**Video and audio tools** for shops producing motion or podcast work.",
        "**SEO and content-ops platforms** if you run content retainers at volume. Below that, the assistant plus a checklist covers it.",
        "**Support and chatbot platforms** when you operate ongoing support for clients, or resell it: see [white-label AI services](/blog/white-label-ai-services-for-agencies).",
      ],
    },
    {
      heading: "What to skip.",
      list: [
        "**Single-purpose wrappers.** A subscription that's one prompt on top of the same models your assistant runs. Check whether your assistant already does it. It usually does.",
        "**AI upsells inside tools you barely use.** Paying extra for AI features in a platform the team already ignores doesn't fix the ignoring.",
        "**Lifetime deals and tool hoarding.** If nobody owns rolling a tool into a workflow, it isn't a bargain. It's clutter with a login.",
        "**Anything without team data controls.** No workspace-level opt-out of training, no SSO path, no export: not for client work.",
      ],
    },
    {
      heading: "The consolidation pass.",
      paragraphs: [
        "Before adding anything, list what you already pay for, per seat, with last month's active users next to each line. The arithmetic does the arguing: ten seats of a $30 tool nobody opened is $3,600 a year, and most agencies find at least one of those.",
        "Then check overlap: the notetaker inside your video tool versus the standalone one, assistant features inside the PM tool versus the assistant you pay for, three people with personal subscriptions to the same product. Consolidating onto team plans is usually cheaper and always more governable.",
      ],
    },
    {
      heading: "Choosing the assistant.",
      paragraphs: [
        "The default-assistant decision matters more than any other line item, because it's where shared prompts, projects, and skills accumulate. We've written a full comparison: [ChatGPT vs Claude for agency work](/blog/chatgpt-vs-claude-for-agencies). The short version: content-heavy and dev-heavy shops tend toward Claude, mixed 360 shops with heavy image needs tend toward ChatGPT, and either beats splitting the team across both with no default.",
      ],
    },
    {
      heading: "A buying checklist.",
      list: [
        "**Training opt-out** at the workspace level, in writing.",
        "**SSO, or at minimum centralized billing**, so offboarding actually offboards.",
        "**Shared assets**: team prompt libraries, projects, or skills, not just individual chats.",
        "**API access**, so the automation layer can build on it.",
        "**Export**, so leaving is possible without losing the accumulated context.",
      ],
    },
    {
      heading: "Want the audit version?",
      paragraphs: [
        "A stack decision is downstream of a workflow map. If you'd rather have the map made for you (what to change first, which tools fit, in what order), that's our [AI workflow audit](/ai-audits).",
      ],
      cta: { text: "Book an audit", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "How much should a small agency budget for AI tools?",
      a: "$30 to $60 per person per month covers the core stack at 2026 prices: an assistant seat for everyone, a coding assistant for developers, a notetaker and automation platform spread across the team. Model API usage for automations adds a variable line that stays small until you productize.",
    },
    {
      q: "Should we buy team plans or use the API?",
      a: "Both, for different jobs. Team plans are for humans: chat, projects, shared assets. The API is for automations and anything you build. Mixing them up leads to either paying per token for daily chat or wiring production workflows through a chat interface.",
    },
    {
      q: "Are free tiers fine for client work?",
      a: "No. Consumer tiers put data-handling choices in each employee's hands instead of yours, and offer no admin controls, audit trail, or workspace-level training opt-out. Team plans are the cost of doing client work responsibly.",
    },
    {
      q: "How often should we re-evaluate the stack?",
      a: "Quarterly, lightly: pull usage, check overlap, and hold a one-in-one-out bar for new tools. The heavyweight annual procurement process enterprises run is overkill. The discipline of actually cancelling is not.",
    },
  ],
  related: ["chatgpt-vs-claude-for-agencies", "ai-for-small-agencies", "custom-ai-agents-for-agencies"],
}

export default post
