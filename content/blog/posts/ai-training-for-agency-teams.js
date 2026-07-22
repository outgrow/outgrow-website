const post = {
  slug: "ai-training-for-agency-teams",
  title: "Why most AI training fails at agencies (and the format that works).",
  metaTitle: "AI Training for Agency Teams: What Actually Sticks",
  metaDescription:
    "Why the standard AI workshop changes nothing, and the format that does: role-specific sessions on live client work, artifacts left behind, and office hours after.",
  kicker: "ai:training",
  accentName: "red",
  date: "2026-06-16",
  excerpt:
    "The two-hour feature tour changes nothing. Role-specific sessions on live client work, with artifacts and office hours, change Mondays.",
  answer: [
    "Most AI training fails because it teaches tools instead of changing workflows: a two-hour feature tour on demo data, applause, and an unchanged Monday. Training that sticks looks different: role-specific groups, live client work on screen, artifacts left behind (prompts, templates, skills), and office hours while the habits form.",
  ],
  takeaways: [
    "Nobody's workflow changes because they watched someone else prompt. People change when their own task, on screen, gets faster.",
    "Train by role. A PM, a designer, and a developer need different sessions, not front-row seats to each other's.",
    "Every session should produce real deliverables and leave artifacts behind: a prompt library, templates, or Claude Skills.",
    "Follow-up beats intensity: office hours in the weeks after move more usage than a longer workshop.",
  ],
  sections: [
    {
      heading: "The standard workshop, and why it changes nothing.",
      paragraphs: [
        "You've seen the format: an outside speaker, a deck of capabilities, impressive demos on generic examples, a list of prompting tips. Everyone leaves mildly inspired. Two weeks later, usage is exactly where it was.",
        "The failure isn't the speaker. It's the transfer assumption: that watching capability translates into changed behavior. It doesn't, for the same reason watching a cooking show doesn't change what you make for dinner. The gap between 'I saw it work' and 'it's how I work' is where all the value sits, and the standard workshop never crosses it.",
      ],
    },
    {
      heading: "The format that works.",
      list: [
        "**Role-specific tracks.** PMs on scoping, tickets, and client comms. Designers on briefs, exploration, and handoff. Developers on coding agents, review discipline, and tests. Mixed-audience sessions bore everyone in rotation.",
        "**Live client work.** This week's proposal, this sprint's tickets, this staging site. Demo data lets everyone stay hypothetical. Real work forces the questions that matter, like 'what about our NDA client' and 'this output is wrong, now what'.",
        "**Small groups, hands on keyboards.** Six to ten people, everyone driving their own session. Watching is the failure mode.",
        "**Artifacts left behind.** Every session ends with something that persists: prompts in the shared library, a template, a [Claude Skill](/blog/claude-skills-for-agencies) encoding the process just practiced.",
        "**Office hours after.** Four to six weeks of a weekly hour where people bring stuck moments from real work. This is where habits either form or quietly die, and it's the part almost everyone skips.",
      ],
    },
    {
      heading: "What each role should learn first.",
      bullets: [
        {
          title: "Project managers",
          body: "Meeting-to-ticket flow, scope drafting from discovery calls, status reporting from the PM tool, and first-draft client emails in the account's voice.",
        },
        {
          title: "Designers",
          body: "Brief expansion, variant exploration, copy drafts for mockups, accessibility and handoff checks. AI speeds the work around the craft without replacing the craft.",
        },
        {
          title: "Developers",
          body: "A coding assistant used well: context discipline, test-first prompting, review standards for generated code, and knowing when to stop prompting and think.",
        },
        {
          title: "Account leads and leadership",
          body: "Reading AI-drafted work critically, pricing implications, and what to tell clients about how the agency uses AI.",
        },
      ],
    },
    {
      heading: "Measuring whether it worked.",
      paragraphs: [
        "Skip the post-workshop survey. Satisfaction doesn't predict usage. Look at deliverables four weeks out: proposals started from the new process, tickets drafted from transcripts, PRs with generated tests, reports assembled from exports. If the artifacts of work don't show it, the training didn't take, whatever the feedback forms said.",
      ],
    },
    {
      heading: "In-house champion, outside trainer, or both?",
      paragraphs: [
        "An internal champion knows your clients and stack, but often lacks the time and the standing to change how senior people work. An outside trainer brings patterns from other agencies and the credibility of distance, but needs your context to avoid teaching party tricks. The combination works best: outside for the format and the first sessions, inside for continuity.",
        "That's how our [team training](/ai-training) is built: role-specific workshops on your live projects, artifacts left in your accounts, then office hours while it settles. On-site or remote.",
      ],
      cta: { text: "Ask about training", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "How long should AI training for employees take?",
      a: "A half-day per role track, then a weekly office hour for a month. Multi-day bootcamps front-load more than people can absorb. The durable format is short sessions plus supported practice.",
    },
    {
      q: "Should we train everyone at once?",
      a: "Everyone should get access and the usage policy at the same time, but train in role groups, starting where the workflow wins are clearest (usually PMs and developers). A whole-company session is a kickoff, not training.",
    },
    {
      q: "Do people need prerequisites before AI training?",
      a: "No. Mixed skill levels are fine within a role track because everyone works on their own tasks. The one real prerequisite is paid access to the sanctioned tools before the session, not after.",
    },
    {
      q: "Is remote AI training as effective as in-person?",
      a: "Both work in different places. In-person concentrates attention for the kickoff sessions; remote fits 1-on-1 coaching and office hours better. What doesn't work is a recorded course assigned as homework.",
    },
  ],
  related: ["how-to-get-employees-to-use-ai", "claude-skills-for-agencies", "ai-for-small-agencies"],
}

export default post
