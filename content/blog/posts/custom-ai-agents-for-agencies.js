const post = {
  slug: "custom-ai-agents-for-agencies",
  title: "Custom AI agents for agencies: build, buy, or configure?",
  metaTitle: "Custom AI Agents for Agencies: Build, Buy, or Configure",
  metaDescription:
    "What custom AI agents can do for an agency today, what building one involves, honest cost expectations, and a decision path: configure first, build when volume justifies it.",
  kicker: "ai:agents",
  accentName: "darkGreen",
  date: "2026-05-26",
  excerpt:
    "Agents that earn their keep, the three tiers from configured to custom, what building actually involves, and where agencies get burned.",
  answer: [
    "A custom AI agent is software that pairs a language model with tools and a goal, then works through multi-step tasks (triaging intake, drafting tickets, sweeping staging sites) without a human driving every step. For most agencies the right first move is not building one. It's configuring agents on platforms you already run, and graduating to custom builds only where the workflow is genuinely yours.",
    "This post draws the line between agents and chatbots, lists the agency workflows where agents reliably work today, and lays out the build-buy-configure decision with honest numbers on cost and maintenance.",
  ],
  takeaways: [
    "An agent differs from a chatbot in one way that matters: it takes actions through tools, in a loop, toward a goal. That's also why it needs guardrails a chatbot doesn't.",
    "Three tiers: agent features inside tools you own, configured agents on automation platforms, custom builds on an agent SDK. Cost and maintenance rise an order of magnitude per tier.",
    "The demo-to-production gap is the defining risk: a workflow that works in a demo has not yet met your edge cases.",
    "Custom agents are products. If nobody owns the agent after launch, it will quietly rot.",
  ],
  sections: [
    {
      heading: "What counts as an agent (and what's just a chatbot)?",
      paragraphs: [
        "Vendors call everything an agent now, so draw the line where it's useful. A chatbot answers when asked. An agent is given a goal and tools (read the inbox, query the PM system, run a browser, call an API) and loops: act, check the result, act again, until done or stuck.",
        "That loop is both the power and the risk. A chatbot that's wrong wastes a reply. An agent that's wrong takes wrong actions. Which is why every serious agency deployment keeps a human review step wherever the agent's output leaves the building.",
      ],
    },
    {
      heading: "Agency workflows where agents earn their keep today.",
      paragraphs: [
        "The pattern across all five: clear inputs, a defined output format, and a human checkpoint before anything client-facing ships.",
      ],
      bullets: [
        {
          title: "Meeting-to-ticket pipelines",
          body: "Call recording in, sprint-ready tickets out, in your format, waiting for a PM's approval. One of the clearest wins we see in agency delivery.",
        },
        {
          title: "First-pass QA",
          body: "An agent sweeps staging: links, forms, breakpoints, copy against spec, and files what it finds as tickets with screenshots.",
        },
        {
          title: "Client report drafting",
          body: "Pull the month's analytics and project activity, draft the report in your house format, flag anomalies for the account lead.",
        },
        {
          title: "Intake triage",
          body: "Read inbound requests, classify them, gather the missing details, and route to the right person with context attached.",
        },
        {
          title: "Code review assistance",
          body: "First-pass review on every PR against your standards, so senior review time goes to design and risk instead of formatting and typos.",
        },
      ],
    },
    {
      heading: "Build, buy, or configure: the three tiers.",
      paragraphs: ["Escalate through three tiers, and stop at the first one that holds:"],
      steps: [
        {
          title: "Agent features in tools you already pay for",
          body: "Your PM tool, help desk, and CRM are all shipping agent features. Turn them on and test before buying anything new. Cost: nothing but attention.",
        },
        {
          title: "Configured agents on automation platforms",
          body: "n8n, Make, Zapier, and similar platforms let you wire a model to your systems with guardrails, in days rather than months. This covers most agency use cases, including everything in the list above.",
        },
        {
          title: "Custom builds on an agent SDK",
          body: "The Claude Agent SDK, OpenAI's Agents SDK, and similar frameworks, connected to your systems (increasingly through MCP). Weeks to build, ongoing cost to maintain. Justified when the workflow is high-volume, differentiated, or productized for clients.",
        },
      ],
    },
    {
      heading: "What building custom actually involves.",
      paragraphs: ["The public conversation is about picking a framework. The actual work is mostly elsewhere:"],
      list: [
        "**Connections.** The agent needs clean access to your PM tool, docs, and data, usually through MCP servers or APIs. Half the build time goes here.",
        "**Evals.** A test set of real cases with known-good outputs, run on every change. Without evals, every tweak is a guess and every regression is invisible.",
        "**Guardrails.** Permissions (what it may do without approval), spend caps, and logging you can actually read when something looks off.",
        "**Maintenance.** Models change, APIs change, your process changes. Budget real hours per month, or watch quality decay silently.",
      ],
    },
    {
      heading: "Where agencies get burned.",
      list: [
        "**The demo-to-production gap.** The demo ran on the happy path. Production is edge cases: the client who replies in French, the transcript with three overlapping speakers, the PDF that's a scan.",
        "**Fixed-fee contracts with per-token costs.** If you sell agent work at a fixed price, model usage is a cost line that moves. Meter it early and cap it contractually.",
        "**Thin-wrapper dependence.** If a vendor's whole product is a prompt on someone else's model, expect churn: those features get absorbed by the platforms underneath.",
        "**Skipping the baseline.** If you didn't measure the workflow before the agent, you can't prove the agent helped, and you'll fund it on faith until finance asks questions.",
      ],
    },
    {
      heading: "A sane path in.",
      paragraphs: [
        "Pick one workflow with clear inputs and outputs and a human already reviewing the result. Measure its current cost in hours. Configure a tier-one or tier-two version and run it for a month against that baseline. Graduate to a custom build only if the volume and the remaining gap justify it.",
        "If you want a second pair of eyes on where agents fit your delivery, or an implementation review before something ships to a client, that's what our [embedded AI support](/ai-support) covers. We also scope exactly this during [audits](/ai-audits).",
      ],
      cta: { text: "Talk it through", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "How much does a custom AI agent cost to build?",
      a: "Configured agents on automation platforms: days of setup, tool subscriptions, and model usage, typically a few hundred dollars a month at agency volumes. Custom SDK builds: weeks of engineering to a reliable first version, plus ongoing maintenance hours and usage costs. The maintenance line is the one that surprises people.",
    },
    {
      q: "Can we sell custom agents to our clients?",
      a: "Yes, and agencies increasingly do: intake bots, support triage, content pipelines. Price the maintenance in (a retainer, not a one-off), cap model usage contractually, and be explicit about accuracy expectations and review responsibilities. Our post on white-label AI services covers the delivery models.",
    },
    {
      q: "What's the difference between an AI agent and an automation?",
      a: "An automation follows a fixed path: trigger, steps, done. It breaks when reality deviates. An agent decides its next step from context, so it handles variation at the cost of predictability. Plenty of agent projects should be automations, and knowing which you need is most of the architecture.",
    },
    {
      q: "Which model should we build agents on?",
      a: "Whichever your team can evaluate, with a design that lets you swap. Model rankings change quarterly, and agents hard-wired to one provider's quirks age badly. Claude is strong on tool use and coding; the differences that matter will show up in your evals, not in public benchmarks.",
    },
  ],
  related: ["claude-skills-for-agencies", "white-label-ai-services-for-agencies", "ai-for-small-agencies"],
}

export default post
