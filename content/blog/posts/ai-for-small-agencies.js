const post = {
  slug: "ai-for-small-agencies",
  title: "AI for small agencies: what actually works.",
  metaTitle: "AI for Small Agencies: What Actually Works",
  metaDescription:
    "How small agencies (5 to 50 people) adopt AI without an innovation budget: where it fits in delivery, what it costs, the four failure modes, and a 90-day plan.",
  kicker: "ai:for:agencies",
  accentName: "blue",
  date: "2026-05-04",
  excerpt:
    "Where AI fits in a 5-to-50-person agency, what it costs, why adoption fails, and a 90-day plan that doesn't disrupt client work.",
  answer: [
    "AI works for small agencies when it's attached to specific workflows, not bought as a stack of tools. The agencies getting real gains pick a handful of high-friction processes (proposals, QA, reporting, dev handoff), rebuild each one around an AI step, and measure the before and after. Everything else follows from that.",
    "This guide covers what that looks like for a 5-to-50-person web, commerce, or 360 agency: where AI fits in delivery, what it actually costs, the four ways adoption fails, and a 90-day rollout that doesn't disrupt client work.",
  ],
  takeaways: [
    "Small agencies adopt AI faster than enterprises because the decision chain is short: pick a workflow, change it, and the whole company has changed by Friday.",
    "Budget roughly $30 to $60 per person per month in tool seats. The cost that matters is attention, not software.",
    "Adoption fails four ways: tool sprawl, a single enthusiast, training without workflow change, and a security panic that pushes usage underground.",
    "Change two workflows per quarter. Two changed workflows that stick beat ten experiments that don't.",
  ],
  sections: [
    {
      heading: "Why small agencies are better positioned than they think.",
      paragraphs: [
        "Most AI advice is written for enterprises, so it assumes the hard part is coordination: committees, pilots, governance boards, six-month rollouts. A 15-person agency has none of that overhead. If the founder decides proposals get drafted with AI starting Monday, that's the new process by Friday.",
        "The constraint for a small agency is different: nobody has slack time. Client work fills every hour, so adoption has to happen inside billable work, not beside it. That rules out the enterprise playbook and most of the courses sold online. It doesn't rule out adoption. It just means the unit of change is one workflow at a time.",
        "**Being small is the advantage.** The owner is close enough to delivery to know exactly which tasks eat margin, and the team is small enough that a better process spreads by proximity instead of by memo.",
      ],
    },
    {
      heading: "Where AI fits in agency delivery.",
      paragraphs: [
        "Walk your delivery pipeline end to end and the candidates show up quickly. These are the ones that surface in nearly every audit we run:",
      ],
      bullets: [
        {
          title: "Scoping and estimates",
          body: "Turn discovery-call transcripts into draft scopes, task breakdowns, and estimate ranges that your senior people correct instead of create.",
        },
        {
          title: "Proposals",
          body: "Assemble first drafts from your past proposals, the client's brief, and your case studies. The win is cutting assembly time, not outsourcing judgment.",
        },
        {
          title: "Design",
          body: "Brief expansion, copy variants, moodboard exploration, and accessibility checks before handoff.",
        },
        {
          title: "Development",
          body: "Coding assistants for boilerplate, refactors, tests, and migrations. The gains are real, with review discipline to match.",
        },
        {
          title: "QA",
          body: "First-pass reviews on staging: broken links, spec mismatches, copy errors, responsive breakage. A human signs off; the machine does the sweep.",
        },
        {
          title: "Reporting and client comms",
          body: "Draft monthly reports from analytics exports, summarize project status from your PM tool, and turn meeting recordings into decisions and action items.",
        },
      ],
    },
    {
      heading: "What it actually costs.",
      paragraphs: [
        "For most small agencies the software line is modest. As of mid-2026, the major assistants (ChatGPT Team, Claude Team) run around $25 to $30 per seat per month, a coding assistant adds a similar amount per developer, and a meeting notetaker and an automation platform add a bit more. Call it **$30 to $60 per person per month** depending on role.",
        "The real cost is attention: someone senior spending a few hours a week deciding which workflows change, in what order, and whether the change stuck. Agencies that treat that as overhead get tool sprawl. Agencies that treat it as an operating role get compounding gains.",
        "For a sense of proportion: one recovered billable hour per person per week pays for the entire stack several times over at typical agency rates. The math isn't the hard part. Making the hour actually come back is.",
      ],
    },
    {
      heading: "The four ways adoption fails.",
      bullets: [
        {
          title: "Tool sprawl",
          body: "Five subscriptions, no owner, no changed workflow. Usage spikes for a week after each purchase, then decays. The fix is fewer tools attached to specific processes.",
        },
        {
          title: "The lone enthusiast",
          body: "One developer or PM gets good privately while the org stays unchanged. Without a mandate to spread what works, their gains leave when they do.",
        },
        {
          title: "Training theater",
          body: "A workshop happens, everyone nods, nothing in the delivery process changes. Training sticks only when it's tied to a workflow the team runs the next day.",
        },
        {
          title: "The security panic",
          body: "Leadership bans or stalls, the team uses personal accounts anyway, and the agency gets all the risk with none of the coordination. A written policy beats a ban.",
        },
      ],
    },
    {
      heading: "A 90-day plan that doesn't disrupt client work.",
      paragraphs: [
        "You don't need a transformation program. You need a quarter of deliberate attention. (The longer version of the first step is in our [guide to running an AI workflow audit](/blog/how-to-run-an-ai-workflow-audit).)",
      ],
      steps: [
        {
          title: "Weeks 1 and 2: map",
          body: "Shadow two live projects and log where time actually goes. Interview one person per role. Rank workflows by frequency, time cost, and error cost. Pick two.",
        },
        {
          title: "Weeks 3 to 6: change workflow one",
          body: "Rebuild the first workflow with an AI step, write the new process down in a page, and run it on live client work with a named owner.",
        },
        {
          title: "Weeks 7 to 10: change workflow two, keep one alive",
          body: "Start the second workflow while holding a short weekly check on the first: is it still used, what broke, what needs a template or a better prompt.",
        },
        {
          title: "Weeks 11 to 13: write down what worked",
          body: "Turn the wins into shared assets: a prompt library, templates, or Claude Skills. Decide the next two workflows. That cadence, two per quarter, is the whole system.",
        },
      ],
    },
    {
      heading: "When to bring in help.",
      paragraphs: [
        "Plenty of agencies run this loop themselves. The ones that call us usually have one of three problems: nobody senior has the hours to own it, the team has already accumulated tools that nobody uses, or an earlier attempt fizzled and the second push needs outside credibility.",
        "That's what our [AI workflow audits](/ai-audits) are: two weeks of mapping, a sequenced roadmap, and a rollout your team can execute. If you'd rather do it yourself, the plan above works. It just needs an owner.",
      ],
      cta: { text: "Book an audit", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "Is AI worth it for an agency with fewer than 10 people?",
      a: "Yes, arguably more than for anyone else. In a small team, one person's recovered hours are a visible percentage of total capacity, and there's no coordination overhead to slow the change. The stack costs less per month than one billable hour.",
    },
    {
      q: "What should a small agency automate first?",
      a: "Pick the workflow that is frequent, time-consuming, and low-risk when a first draft is wrong. Proposal assembly, meeting notes to action items, and first-pass QA fit that profile for most agencies. Client-facing deliverables with no human review should come last, or never.",
    },
    {
      q: "Do we need to hire an AI specialist?",
      a: "Not at 5 to 50 people. You need an internal owner (usually a founder or ops lead) who spends a few hours a week on it, plus outside help for the mapping and training if nobody has the bandwidth. A full-time hire only makes sense once you're selling AI work to clients.",
    },
    {
      q: "How do we handle client data and confidentiality?",
      a: "Use team or enterprise plans where your data is excluded from model training, write a one-page policy naming allowed tools and forbidden data types, and add an AI clause to client contracts where relevant. The riskiest setup is the one where staff use personal accounts because nobody gave them a sanctioned one.",
    },
  ],
  related: ["how-to-get-employees-to-use-ai", "ai-stack-for-small-agencies", "how-to-run-an-ai-workflow-audit"],
}

export default post
