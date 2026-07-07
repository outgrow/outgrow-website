import { Resend } from "resend"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  const body = await request.json()
  const { name, email, company, message, website } = body || {}

  if (website) {
    return Response.json({ ok: true })
  }

  if (typeof name !== "string" || !name.trim() || typeof message !== "string" || !message.trim()) {
    return Response.json({ error: "Missing required fields." }, { status: 400 })
  }

  if (typeof email !== "string" || !emailPattern.test(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "out:grow <contact@outgrow.io>",
      to: "contact@outgrow.io",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        message,
      ].filter(Boolean).join("\n"),
    })

    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: "Failed to send message." }, { status: 500 })
  }
}
