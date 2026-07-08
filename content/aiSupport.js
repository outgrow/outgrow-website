const aiSupport = {
  path: "/ai-support",
  metaTitle: "Embedded AI Support for Agencies",
  metaDescription:
    "Direct access to AI engineers for agency teams: priority support, implementation reviews, and monthly workflow audits, with white-label support for agencies serving their own clients.",
  hero: {
    kicker: "ai:support",
    title: "Embedded AI support, on demand.",
    body: [
      "AI adoption doesn't stop after the training session. New models ship, workflows break, and someone on your team ends up debugging a prompt at 6pm instead of shipping client work.",
      "An out:grow support plan gives your team direct access to AI engineers who already know your stack, so problems get solved instead of stalling a delivery."
    ],
    cta: { label: "Get a support plan", href: "/contact" },
    secondary: { label: "What's included", href: "#section-content" }
  },
  sections: [
    {
      title: "Direct access when you need it.",
      paragraphs: [
        "Slack or email access to engineers who've implemented the exact workflow you're stuck on: agentic coding setups, automation pipelines, model selection, prompt debugging.",
        "**No ticket queue, no account manager relay.** You talk directly to the person who can fix it."
      ],
      bullets: [
        { title: "Priority response", body: "Support-plan clients get same-business-day answers, so a broken automation doesn't sit unresolved for a week." },
        { title: "Implementation reviews", body: "Send us a workflow or prompt chain before it ships to a client, and we'll flag what will break at scale." },
        { title: "Monthly workflow audit", body: "A recurring check on what's working, what's been quietly abandoned, and what's worth adopting next." }
      ],
      cta: { text: "Get a support plan", href: "/contact" }
    },
    {
      title: "For agencies supporting agencies.",
      paragraphs: [
        "If you're a web or commerce agency and your own clients are asking about AI, we can sit behind the scenes as your technical bench: helping you scope, price and deliver AI work without hiring for it internally."
      ],
      cta: { text: "Talk about white-label support", href: "/contact" }
    }
  ]
}

export default aiSupport
