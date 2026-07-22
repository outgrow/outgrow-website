const post = {
  slug: "claude-skills-for-agencies",
  title: "Claude Skills for agencies: put your playbooks to work.",
  metaTitle: "Claude Skills for Agencies: A Practical Guide",
  metaDescription:
    "What Claude Skills are, why they fit agency work, six skills worth building first (brand voice, QA checklists, estimates), and how to write your first SKILL.md.",
  kicker: "claude:skills",
  accentName: "green",
  date: "2026-05-18",
  excerpt:
    "Skills turn agency process (brand voice, QA checklists, estimate formats) into behavior Claude applies automatically. What they are and which to build first.",
  answer: [
    "Claude Skills are folders of instructions, templates, and optional scripts that Claude loads automatically when a task calls for them. Each skill starts with a SKILL.md file describing when it applies. For an agency, they're the mechanism that turns internal process (brand guidelines, QA checklists, estimate formats) into behavior any team member can invoke with consistent results.",
    "Agencies sell repeatable process. Skills make that process executable. This guide covers how they work, six skills worth building first, and how to write and maintain them without a developer.",
  ],
  takeaways: [
    "A skill is a folder with a SKILL.md file: instructions, examples, and optionally templates and scripts. Claude sees only the name and description until a task matches.",
    "Skills work across the Claude apps, Claude Code, and the API, so one QA checklist can serve a PM in chat and a developer in the terminal.",
    "The best first skills encode judgment you repeat weekly: proposal structure, brand voice per client, QA checklists, code standards.",
    "Treat skills like code: version them in git, give each one an owner, review changes.",
  ],
  sections: [
    {
      heading: "What Claude Skills actually are.",
      paragraphs: [
        "Anthropic introduced Skills in late 2025 as a way to give Claude procedural knowledge without stuffing it into every prompt. A skill is a folder containing a SKILL.md file (instructions in plain Markdown, with a name and description at the top) plus any supporting files: templates, examples, reference docs, even scripts Claude can execute.",
        "The mechanism that makes them practical is progressive disclosure. Claude sees only each skill's name and description by default, and pulls in the full contents when the task matches. That means you can maintain dozens of skills without them competing for attention, and the same skill works in the Claude apps, in [Claude Code](https://claude.com/claude-code), and through the API.",
        "If you've built a prompt library, skills are the next step: prompts you don't have to find, paste, or remember to use.",
      ],
    },
    {
      heading: "Why this fits agencies better than most companies.",
      paragraphs: [
        "An agency's product is repeatable process applied with judgment: how you scope, how you write, how you QA, what your proposals promise. That process usually lives in senior people's heads and a few half-updated Notion pages. Every new hire re-learns it. Every rushed week erodes it.",
        "Skills change the economics of writing process down. Documentation used to be a cost you paid so humans could maybe read it later. **A skill is documentation that executes**: write the QA checklist once, and every first-pass QA in the company runs it, including the one done by the person who joined on Monday.",
        "The consistency shows up client-side too: brand voice held across every writer, estimates in the same structure whether a senior or a junior drafts them. That's the thing agencies sell and struggle to guarantee.",
      ],
    },
    {
      heading: "Six skills worth building first.",
      bullets: [
        {
          title: "Client brand voice",
          body: "One skill per key client: voice rules, banned phrases, approved terminology, and three annotated examples of on-brand copy. Applied whenever anyone writes for that client.",
        },
        {
          title: "Proposal and estimate format",
          body: "Your proposal structure, pricing presentation rules, and two of your best past proposals as reference. Drafts come out sounding like your agency, not like a model.",
        },
        {
          title: "QA checklist",
          body: "Your pre-launch checklist as an executable sweep: links, meta tags, responsive breakpoints, tracking, accessibility basics. Run on every staging URL before a human signs off.",
        },
        {
          title: "Code standards",
          body: "For dev teams in Claude Code: stack conventions, review rules, testing expectations, deployment gotchas. The assistant writes code the way your team does.",
        },
        {
          title: "Meeting-to-ticket format",
          body: "How your agency writes tickets: fields, acceptance criteria, sizing conventions. Paired with a transcript, it turns calls into sprint-ready tickets.",
        },
        {
          title: "Client reporting",
          body: "Your monthly report structure and tone, so a report drafted from analytics exports matches what your account leads would have written by hand.",
        },
      ],
    },
    {
      heading: "How to write your first skill.",
      steps: [
        {
          title: "Pick a process you repeat weekly",
          body: "Frequency beats ambition. A proposal format used twice a week beats a grand strategy skill used twice a year.",
        },
        {
          title: "Write the SKILL.md",
          body: "Name, a one-line description of when it applies (this is how Claude decides to load it, so make it specific), then instructions written as if onboarding a sharp new hire: rules, steps, edge cases.",
        },
        {
          title: "Add real examples",
          body: "Two or three annotated examples of good output beat ten abstract rules. Include one bad example with a note on why it's wrong if the failure mode is common.",
        },
        {
          title: "Test on live tasks for a week",
          body: "Run it on real work, note where the output drifts, and tighten the instructions. Skills improve the way SOPs do: through contact with reality.",
        },
        {
          title: "Distribute and version it",
          body: "Skills are just folders, so a git repo works as the source of truth. Claude Code picks them up per project, and team workspaces in the Claude apps let you share them org-wide. Name an owner. Review changes like code.",
        },
      ],
    },
    {
      heading: "Skills, Projects, custom GPTs, MCP: which does what?",
      paragraphs: ["The names blur together; the jobs don't."],
      list: [
        "**Skills** carry procedural knowledge: how to do a task your way. They load on demand and can include files and scripts.",
        "**Claude Projects** carry context: the documents and background for a client or engagement. A project is where work happens; skills are how it gets done.",
        "**MCP connectors** carry access: live connections to your PM tool, drive, or database through the Model Context Protocol. A skill can tell Claude what to do with what a connector fetches.",
        "**Custom GPTs** are OpenAI's packaging of instructions plus files into a shareable chatbot. They're the closest analogue on the ChatGPT side, scoped to chat rather than to every surface.",
      ],
    },
    {
      heading: "Governance, briefly.",
      paragraphs: [
        "Skills drift the way all documentation drifts, so put lightweight controls in early: one owner per skill, changes through review, client-specific skills checked for anything confidential before they're shared beyond the account team, and a quarterly prune of skills nobody invokes.",
        "If you want help building the first set, skill-building is part of our [team training](/ai-training): we write the first two or three with your team on live work, then hand over the pattern. For the bigger ecosystem question, see [ChatGPT vs Claude for agency work](/blog/chatgpt-vs-claude-for-agencies).",
      ],
      cta: { text: "Ask about training", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "Do Claude Skills work in Claude Code?",
      a: "Yes. Claude Code reads skills from project and user skill directories, and plugins can bundle them. The same folder format works in the Claude apps and via the API, which is what makes skills practical as a company-wide standard.",
    },
    {
      q: "Do we need a developer to write skills?",
      a: "No. A skill made of instructions, examples, and templates is plain Markdown and files. You only need a developer if you want the skill to run scripts.",
    },
    {
      q: "Can we put client data in a skill?",
      a: "Put client rules in (voice, terminology, structure) and keep client secrets out (credentials, unreleased plans, anything under NDA you wouldn't paste into a team-visible doc). Skills are distributed by design, so treat their contents as visible to everyone who has them.",
    },
    {
      q: "How are skills different from a prompt library?",
      a: "A prompt library relies on people finding the right prompt and pasting it at the right moment. A skill removes both steps: Claude loads it when the task matches. In practice, that difference is most of the adoption battle.",
    },
  ],
  related: ["chatgpt-vs-claude-for-agencies", "custom-ai-agents-for-agencies", "ai-training-for-agency-teams"],
}

export default post
