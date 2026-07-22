const post = {
  slug: "how-to-run-an-ai-workflow-audit",
  title: "How to run an AI workflow audit at your agency.",
  metaTitle: "How to Run an AI Workflow Audit at Your Agency",
  metaDescription:
    "A step-by-step method: shadow real projects, score workflows for AI fit, and produce a sequenced 90-day roadmap. The same structure we use in client audits.",
  kicker: "ai:audits",
  accentName: "blue",
  date: "2026-06-02",
  excerpt:
    "Shadow real projects, score workflows on five axes, and write a roadmap with owners and checkpoints. The full method, usable internally in two weeks.",
  answer: [
    "An AI workflow audit maps how work actually moves through your agency, scores each workflow for AI fit, and ends in a sequenced rollout plan with owners and checkpoints. Run internally, it takes about two weeks: one of observation, one of scoring and writing. Here's the full method, the same structure we use in [client audits](/ai-audits).",
  ],
  takeaways: [
    "Audit workflows, not tools. A tool list tells you what to buy; a workflow map tells you what to change.",
    "Shadow real projects instead of surveying. People describe the process as it's documented; projects reveal it as it's done.",
    "Score each candidate on frequency, time, error tolerance, and data sensitivity against implementation lift.",
    "The deliverable is a sequenced roadmap: two workflows a quarter, each with an owner, a tool, and a checkpoint date.",
  ],
  sections: [
    {
      heading: "What an audit is, and is not.",
      paragraphs: [
        "The word audit suggests compliance. This is closer to a time-and-motion study with an AI lens: where do hours actually go, which of those hours are pattern work, and in what order should you change things.",
        "It is not a tool evaluation. Tools come last, chosen to fit workflows you've already ranked. Agencies that start from a tool list end up with subscriptions in search of a problem.",
      ],
    },
    {
      heading: "The method, step by step.",
      steps: [
        {
          title: "Choose two or three delivery paths",
          body: "Not departments: paths. 'New build from lead to launch', 'retainer month', 'campaign sprint'. Follow work the way it flows, across roles.",
        },
        {
          title: "Shadow live projects for a week",
          body: "Sit in the standups, watch the handoffs, read the tickets. Log where time goes and where it leaks: re-typing, reformatting, chasing context, waiting on review.",
        },
        {
          title: "Interview one person per role",
          body: "Thirty minutes each, three questions: what do you re-type most, what part of the week do you dread, where does work wait on you. The dread question finds automation candidates faster than any process doc.",
        },
        {
          title: "Build the candidate list",
          body: "Every recurring task you observed, one line each: who does it, how often, how long it takes, what breaks when it's wrong, what data it touches.",
        },
        {
          title: "Score each candidate",
          body: "Frequency times time saved, discounted by error cost and data sensitivity, divided by implementation lift. The rubric below makes it concrete.",
        },
        {
          title: "Sequence and write the roadmap",
          body: "Two workflows per quarter, each with an owner, the tool, the new process on one page, and a checkpoint date to judge whether it stuck.",
        },
      ],
    },
    {
      heading: "The scoring rubric.",
      paragraphs: [
        "Score each candidate 1 to 5 on five axes, multiply the first two, then discount by the rest. Precision doesn't matter; separation does. You're looking for the four or five candidates that clearly beat the field.",
      ],
      list: [
        "**Frequency.** Daily scores 5; quarterly scores 1. Frequency is what compounds.",
        "**Time.** Hours per occurrence, summed across everyone who touches it.",
        "**Error tolerance.** How cheap is a wrong first draft? Internal drafts score high; anything that reaches a client without review scores 1.",
        "**Data sensitivity.** Public or routine internal data scores high; credentials, health, and payment data score 1 and wait for proper controls.",
        "**Lift, inverted.** Prompt-and-template changes score 5; anything needing engineering scores lower.",
      ],
    },
    {
      heading: "What audits usually find.",
      paragraphs: [
        "Every agency believes its situation is unique. The findings mostly aren't. The usual suspects:",
      ],
      bullets: [
        {
          title: "Proposal assembly",
          body: "Senior hours spent copying structure from old decks and rewriting the same service descriptions.",
        },
        {
          title: "Meeting re-entry",
          body: "Decisions made on calls, then re-typed into tickets, summaries, and follow-up emails by hand.",
        },
        {
          title: "Status reporting",
          body: "PMs assembling weekly updates from information that already exists in the PM tool.",
        },
        {
          title: "First-pass QA",
          body: "Checklist sweeps done by expensive people, inconsistently, under deadline pressure.",
        },
        {
          title: "Dev context switching",
          body: "Developers reconstructing context on every return to a codebase: what was decided, where things live, why.",
        },
      ],
    },
    {
      heading: "The mistakes that sink internal audits.",
      list: [
        "**Surveying instead of shadowing.** Surveys return the org chart's view of the process. The audit's value is the gap between that and reality.",
        "**Auditing everything.** All workflows at once means finishing none. Two or three delivery paths give you more than enough to act on.",
        "**Letting the tool decide.** 'We already pay for X, where can we use it' inverts the whole exercise.",
        "**No named owners.** A roadmap without owners is a wish list. Every line needs a person and a date.",
      ],
    },
    {
      heading: "Do it yourself, or bring us in.",
      paragraphs: [
        "Everything above is doable internally if someone senior can protect two weeks of attention. The honest reasons agencies hire us instead: nobody has the two weeks, teams are more candid with an outsider, and we've seen enough agencies to benchmark yours against what similar teams changed first.",
        "Our [audit](/ai-audits) runs this method with your team and ends in the same deliverable: a sequenced roadmap you execute with the people you already have.",
      ],
      cta: { text: "Book an audit", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "How long should an AI audit take?",
      a: "Two weeks for a 5-to-50-person agency: one for observation and interviews, one for scoring and writing. Anything past three weeks is drift, not depth.",
    },
    {
      q: "Who should run an internal AI audit?",
      a: "Someone senior enough to see across roles and blunt enough to write down what they actually saw. Ops leads and founders fit. The person whose workflows score worst does not.",
    },
    {
      q: "How often should we repeat the audit?",
      a: "A light pass twice a year: re-walk one delivery path, re-score, adjust the roadmap. The full version is worth repeating when the team or the service mix changes materially.",
    },
    {
      q: "What should the final deliverable look like?",
      a: "A short written roadmap: the ranked list with scores, the top four to six workflows with owner, tool, new process, and checkpoint date, and a parking lot of what you deliberately deferred. If it doesn't fit in a few pages, it won't be used.",
    },
  ],
  related: ["ai-for-small-agencies", "ai-stack-for-small-agencies", "how-to-get-employees-to-use-ai"],
}

export default post
