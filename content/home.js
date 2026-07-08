const home = {
  metaTitle: "out:grow | AI Adoption Consulting for Agencies",
  metaDescription:
    "out:grow helps small and medium web, commerce, and 360 agencies adopt AI into their day-to-day workflows through audits, training, and embedded support.",
  hero: {
    kicker: "ai:adoption for agencies",
    title: "Your agency doesn't have an AI problem.<br/>It has a mapping problem.",
    body: [
      "out:grow maps where AI actually fits your delivery, trains your team on live client projects, and stays on call as your AI bench. Built for 5-to-50-person web, commerce, and 360 agencies.",
    ],
    cta: { label: "Book an audit", href: "/contact" },
    secondary: { label: "See the services", href: "#services" },
    trust: "Replies within one business day, from the founder.",
  },
  servicesIntro: {
    kicker: "what:we:do",
    title: "Three ways in.",
    lead: "Most clients start with an audit. Teams that already know where it hurts go straight to training or support.",
  },
  services: [
    {
      number: "01",
      accentName: "blue",
      href: "/ai-audits",
      title: "AI workflow audits.",
      blurb:
        "Two weeks watching how your team actually works, ending in a sequenced roadmap: the workflows to change first, the tools that fit your stack, and the order to roll them out.",
      bullets: ["Workflow mapping", "Tool selection by fit", "Sequenced rollout plan"],
      linkLabel: "Explore audits",
    },
    {
      number: "02",
      accentName: "red",
      href: "/ai-training",
      title: "Team AI training.",
      blurb:
        "Hands-on workshops run on your real client projects, with role-specific tracks for PMs, designers, and developers. Plus remote 1-on-1 coaching and ongoing enablement.",
      bullets: ["On-site team workshops", "Remote 1-on-1 coaching", "Follow-up office hours"],
      linkLabel: "Explore training",
    },
    {
      number: "03",
      accentName: "darkGreen",
      href: "/ai-support",
      title: "Embedded AI support.",
      blurb:
        "Slack or email access to engineers who already know your stack: same-business-day answers, implementation reviews before work ships, and a monthly workflow audit.",
      bullets: ["Priority response", "Implementation reviews", "White-label bench for your clients"],
      linkLabel: "Explore support",
    },
  ],
  why: {
    kicker: "why:out:grow",
    title: "Run by someone who's run an agency.",
    paragraphs: [
      "out:grow started as a headless-commerce agency, was acquired by Trellis in 2021, and its founder ran engineering through a second acquisition in 2024. This practice is that operating experience, pointed at AI.",
      "The recommendations fit agency reality: no six-month change-management program, no enterprise overhead. Just what your team can put into practice this quarter, with the people you already have.",
    ],
    link: { label: "Meet the founder", href: "/founder" },
    facts: [
      { value: "2 weeks", label: "from audit kickoff to a written, sequenced roadmap" },
      { value: "5 to 50", label: "the agency sizes our recommendations are built for" },
      { value: "Same day", label: "business-day response for support-plan clients" },
      { value: "2", label: "acquisitions operated through, Trellis in 2021 and Zaelab in 2024" },
    ],
  },
}

export default home
