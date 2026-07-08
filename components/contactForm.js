"use client"

import { useState } from "react"
import styled, { css } from "styled-components"
import Button from "./button"
import { black, blue, darkGreen, red, white } from "../styles/colors"

const Form = styled.form`
  width: 100%;
`

const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: .4rem;

  font-size: .85rem;
  font-weight: 600;
  color: rgba(${black}, .68);
`

const fieldStyles = css`
  display: block;
  width: 100%;

  padding: .85rem 1rem;
  border: 1px solid rgba(${black}, .14);
  border-radius: 14px;

  font-family: inherit;
  font-size: 1rem;
  color: rgb(${black});
  background: rgba(${white}, .9);

  transition: border-color .15s ease, box-shadow .15s ease;

  &:focus {
    outline: none;
    border-color: rgb(${blue});
    box-shadow: 0 0 0 4px rgba(${blue}, .14);
  }
`

const TextInput = styled.input`
  ${fieldStyles}
`

const Textarea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
`

const FieldWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;

  &:first-of-type {
    margin-top: 0;
  }
`

const ButtonWrapper = styled.div`
  margin-top: 1.4rem;
`

const Error = styled.p`
  color: rgb(${red});
  font-size: .9rem;
  margin-top: 1rem;
`

const Success = styled.p`
  color: rgb(${darkGreen});
  font-size: 1rem;
  font-weight: 600;
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
        <Label htmlFor="company">Agency</Label>
        <TextInput id="company" name="company" onChange={handleChange} value={fields.company} />
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="message">What are you trying to figure out?</Label>
        <Textarea id="message" name="message" rows={5} onChange={handleChange} value={fields.message} required />
      </FieldWrapper>

      <HoneypotField tabIndex={-1} autoComplete="off" name="website" />

      <ButtonWrapper>
        <Button
          accent={blue}
          type="submit"
          disabled={status === "sending" || status === "sent"}
        >
          {status === "sent" ? "Thank you!" : "Send message"}
        </Button>
      </ButtonWrapper>

      {status === "sent" && <Success>We got it. We'll reply within one business day.</Success>}
      {status === "error" && <Error>Something went wrong. Please email us directly at contact@outgrow.io.</Error>}
    </Form>
  )
}
