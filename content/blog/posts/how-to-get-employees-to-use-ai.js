const post = {
  slug: "how-to-get-employees-to-use-ai",
  title: "How do I get my employees to actually use AI?",
  metaTitle: "How Do I Get My Employees to Use AI? 9 Tactics That Work",
  metaDescription:
    "Mandates and lunch-and-learns don't move AI usage. Nine tactics that do: workflow defaults, explicit permission, training on live work, and honest answers about job fear.",
  kicker: "ai:and:people",
  accentName: "red",
  date: "2026-05-11",
  excerpt:
    "Usage doesn't follow mandates. It follows defaults, permission, and training on live work. Nine tactics that move a team from curious to habitual.",
  answer: [
    "Employees use AI when it's the easiest way to do their actual job: when leadership visibly uses it, when it's built into the workflow as the default, and when training happens on live work instead of demos. Mandates, dashboards, and one-off workshops don't move usage. Defaults and permission do.",
    "We help agencies through this shift, and the pattern is consistent enough to write down. Here's what blocks usage, the nine tactics that reliably raise it, and the mistakes that set adoption back by months.",
  ],
  takeaways: [
    "People don't resist AI. They resist looking incompetent while learning it, and being made to feel replaceable by it.",
    "Usage follows defaults: make AI part of how a workflow is done, not an optional extra tool.",
    "Train on live client work. Nobody's Monday changes because they watched someone else prompt on demo data.",
    "Address job fear directly and in writing. Unspoken fear is the quietest killer of adoption.",
  ],
  sections: [
    {
      heading: "Why your team isn't using it.",
      paragraphs: [
        "Start with the honest diagnosis. In the agencies we work with, low usage almost never comes from lack of interest. It comes from four quieter blockers.",
      ],
      list: [
        "**No explicit permission.** Nobody has said, in writing, what's allowed. So careful people abstain and bold people use personal accounts in private.",
        "**Fear of looking replaceable.** Getting visibly good at AI can feel like writing the case for your own redundancy. Nobody says this in a meeting.",
        "**Fear of looking incompetent.** Senior people especially. They're experts at the old way, beginners at the new one, and being a beginner in front of juniors is uncomfortable.",
        "**Tools outside the flow of work.** If using AI means leaving the PM tool, the IDE, or the doc to visit a separate chat window and paste context in, most people won't. Friction beats intention.",
      ],
    },
    {
      heading: "The nine tactics that raise usage.",
      steps: [
        {
          title: "Use it visibly at the top",
          body: "The single strongest signal is the founder or leads using AI openly: sharing prompts in Slack, showing drafts in reviews, admitting what didn't work. Usage is social before it's technical.",
        },
        {
          title: "Put permission in writing",
          body: "One page: which tools are sanctioned and paid for, what data can and can't go in, what disclosure clients get. Ambiguity reads as prohibition to careful employees.",
        },
        {
          title: "Change the workflow default, not the person",
          body: "Don't ask people to remember to use AI. Rebuild the workflow so the AI step is how it's done: proposals start from the generator, tickets start from the transcript, QA starts with the sweep.",
        },
        {
          title: "Train on live client work",
          body: "Run sessions on this week's actual deliverables, in role-specific groups: a PM track, a design track, a dev track. Generic prompting workshops evaporate within a week.",
        },
        {
          title: "Pair champions with skeptics",
          body: "Your enthusiast's job is not to be impressive. It's to sit with the skeptic on a real task until the skeptic wins an hour back. Converted skeptics are the best advocates you'll get.",
        },
        {
          title: "Measure in deliverables, not logins",
          body: "Seat activity tells you nothing. Look at where AI shows up in output: proposals shipped from the new process, tickets drafted from transcripts, PRs with assisted tests. That's adoption.",
        },
        {
          title: "Make failure shareable",
          body: "A weekly 'what I tried' thread where botched outputs are as welcome as wins. If only successes get shared, everyone quietly concludes it doesn't work for their tasks.",
        },
        {
          title: "Put it in existing rituals",
          body: "Five minutes in the weekly all-hands for one workflow demo, by a different person each time. No new meetings. Rituals you already have are free distribution.",
        },
        {
          title: "Remove every ounce of friction",
          body: "Paid seats for everyone on the sanctioned tools, SSO, shared prompt libraries or Claude Skills, integrations installed. Every personal-account workaround you prevent is risk removed and signal gained.",
        },
      ],
    },
    {
      heading: "What not to do.",
      list: [
        "**Don't mandate usage quotas.** 'Everyone must use AI daily' produces performative usage and resentment, not changed workflows.",
        "**Don't turn dashboards into surveillance.** The moment usage metrics feel like monitoring, people optimize for the metric and hide the real behavior.",
        "**Don't outsource it to a trainer with no agency context.** Someone who doesn't understand agency delivery will teach party tricks, and your team will notice within ten minutes.",
        "**Don't lead with a ban.** Bans don't stop usage; they stop visibility. You inherit the risk without the learning.",
      ],
    },
    {
      heading: "Say the quiet part about jobs.",
      paragraphs: [
        "Every adoption push happens against a background question nobody asks out loud: am I training my replacement? You can't out-communicate a fear you refuse to name.",
        "The honest answer for most agencies is that AI changes the shape of roles faster than it removes them: production hours shrink while judgment, client-facing, and review hours grow. Say what you can actually commit to. If the goal is doing more work with the same team rather than the same work with fewer people, put that in writing. And if restructuring is genuinely on the table, don't promise otherwise. People can tell.",
        "One commitment that costs little and buys a lot: nobody gets penalized for time spent learning during the transition, and efficiency gains get reinvested in better work before they get harvested as cuts.",
      ],
    },
    {
      heading: "How long it takes.",
      paragraphs: [
        "With defaults changed and training on live work, expect visible movement in the first month and durable habits by the end of a quarter. The curve isn't smooth: usage spikes after each training, sags after each client crunch, and stabilizes wherever the workflow defaults hold.",
        "That's why the defaults matter more than enthusiasm. Enthusiasm decays. A proposal process that starts from a draft doesn't.",
        "If you want the training part handled, our [team AI training](/ai-training) runs on your live client projects, with follow-up office hours while the habits form.",
      ],
      cta: { text: "Ask about training", href: "/contact" },
    },
  ],
  faq: [
    {
      q: "Should AI use be mandatory for employees?",
      a: "Mandating 'use AI' fails because it's vague and unenforceable. Mandating the workflow works: proposals start from the drafting process, tickets come from the transcript pipeline. People can still edit everything; the default just includes the AI step.",
    },
    {
      q: "Should we pay for everyone or run a pilot first?",
      a: "Pay for everyone on the core assistant. Rationing the main tool recreates the personal-account problem you're trying to end. Pilots make sense for expensive role-specific tools, like a coding assistant or a video suite, not for the thing you want to become ambient.",
    },
    {
      q: "What if the most resistant people are senior?",
      a: "That's the norm, not the exception. Give seniors private ramp time (1-on-1 coaching rather than group sessions), and start on tasks they dislike rather than tasks they take pride in. A senior developer rarely wants AI writing the architecture. They're often happy for it to write the tests.",
    },
    {
      q: "How do we measure AI adoption without spying on people?",
      a: "Count outcomes, not activity: proposals shipped through the new flow, meetings with distributed action items, PRs with assisted tests, production hours trending down in timesheet categories. All of it is visible in work artifacts. None of it requires reading anyone's chat history.",
    },
  ],
  related: ["ai-training-for-agency-teams", "ai-for-small-agencies", "will-ai-replace-agencies"],
}

export default post
