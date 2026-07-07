"use client"

import { useState } from "react"
import styled from "styled-components"
import Button from "./button"
import media from "../styles/mediaQueries"
import { black, blue, red, white } from "../styles/colors"

const Form = styled.form`
  width: 100%;
  ${media.tablet`max-width: 50%;`}
  ${media.tablet`margin-left: 28rem;`}
`

const Label = styled.label`
  display: block;
  width: 100%;
  color: rgb(${black});
  font-size: 0.9rem;
`

const TextInput = styled.input`
  display: block;
  width: 100%;
  height: 1.3rem;
  ${media.veryLargeSmartphone`height: 1.9rem`}
  padding: .8rem .9rem;
  border: 1px solid rgb(${blue});
  border-radius: 15px;
  font-family: Axiforma, Helvetica, "sans-serif";
  background: rgb(${white});
`

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid rgb(${blue});
  border-radius: 15px;
  font-family: Axiforma, "sans-serif";
  padding: 0.7rem 1rem;
  background: rgb(${white});
`

const FieldWrapper = styled.div`
  width: 100%;
  margin: .4rem 0;
`

const ButtonWrapper = styled.div`
  margin: 1rem 0 0 0;
`

const Error = styled.p`
  color: rgb(${red});
  font-size: .9rem;
  margin-top: 1rem;
`

const Success = styled.p`
  color: rgb(${blue});
  font-size: 1rem;
  font-weight: 800;
  margin-top: 1rem;
`

const HoneypotField = styled.input`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
`

const defaultFields = {
  name: "",
  email: "",
  company: "",
  message: "",
}

export default function ContactForm() {
  const [fields, setFields] = useState(defaultFields)
  const [status, setStatus] = useState("idle")

  const handleChange = (event) =>
    setFields(current => ({ ...current, [event.target.name]: event.target.value }))

  const handleSubmit = async (event) => {
    event.preventDefault()

    const website = event.target.website.value

    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website }),
      })

      if (!response.ok) throw new Error()

      setStatus("sent")
      setFields(defaultFields)
    } catch {
      setStatus("error")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FieldWrapper>
        <Label htmlFor="name">Name</Label>
        <TextInput id="name" name="name" onChange={handleChange} value={fields.name} required />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="email">Email</Label>
        <TextInput id="email" name="email" type="email" onChange={handleChange} value={fields.email} required />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="company">Company</Label>
        <TextInput id="company" name="company" onChange={handleChange} value={fields.company} />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} onChange={handleChange} value={fields.message} required />
      </FieldWrapper>

      <HoneypotField tabIndex={-1} autoComplete="off" name="website" />

      <ButtonWrapper>
        <Button
          backgroundColor={blue}
          color={white}
          type="submit"
          disabled={status === "sending" || status === "sent"}
        >
          {status === "sent" ? "Thank you!" : "Send"}
        </Button>
      </ButtonWrapper>

      {status === "sent" && <Success>We got it. We'll reply within one business day.</Success>}
      {status === "error" && <Error>Something went wrong. Please email us directly at contact@outgrow.io.</Error>}
    </Form>
  )
}
