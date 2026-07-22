import { blue, darkGreen, green, lightBlue, red } from "../../styles/colors"
import aiForSmallAgencies from "./posts/ai-for-small-agencies"
import howToGetEmployeesToUseAi from "./posts/how-to-get-employees-to-use-ai"
import claudeSkillsForAgencies from "./posts/claude-skills-for-agencies"
import customAiAgentsForAgencies from "./posts/custom-ai-agents-for-agencies"
import howToRunAnAiWorkflowAudit from "./posts/how-to-run-an-ai-workflow-audit"
import aiStackForSmallAgencies from "./posts/ai-stack-for-small-agencies"
import aiTrainingForAgencyTeams from "./posts/ai-training-for-agency-teams"
import chatgptVsClaudeForAgencies from "./posts/chatgpt-vs-claude-for-agencies"
import whiteLabelAiServicesForAgencies from "./posts/white-label-ai-services-for-agencies"
import willAiReplaceAgencies from "./posts/will-ai-replace-agencies"

// Newest first.
export const posts = [
  aiForSmallAgencies,
  howToGetEmployeesToUseAi,
  claudeSkillsForAgencies,
  customAiAgentsForAgencies,
  howToRunAnAiWorkflowAudit,
  aiStackForSmallAgencies,
  aiTrainingForAgencyTeams,
  chatgptVsClaudeForAgencies,
  whiteLabelAiServicesForAgencies,
  willAiReplaceAgencies,
].sort((a, b) => (a.date < b.date ? 1 : -1))

export const postsBySlug = Object.fromEntries(posts.map(post => [post.slug, post]))

const accents = { blue, red, green, darkGreen, lightBlue }

const glows = {
  blue: [lightBlue, blue],
  red: [red, blue],
  green: [green, lightBlue],
  darkGreen: [darkGreen, green],
  lightBlue: [lightBlue, green],
}

export function postAccent(post) {
  return accents[post.accentName] || blue
}

export function postGlow(post) {
  return glows[post.accentName] || glows.blue
}

const countWords = value => {
  if (!value) return 0
  if (typeof value === "string") return value.split(/\s+/).filter(Boolean).length
  if (Array.isArray(value)) return value.reduce((sum, item) => sum + countWords(item), 0)
  if (typeof value === "object") return Object.values(value).reduce((sum, item) => sum + countWords(item), 0)
  return 0
}

export function readingTime(post) {
  const words = countWords([post.answer, post.takeaways, post.sections, post.faq])
  return Math.max(2, Math.round(words / 200))
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00Z`))
}
