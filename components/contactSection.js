"use client"

import styled from "styled-components"
import ContactForm from "./contactForm"
import Kicker from "./kicker"
import OrbField from "./orbField"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import { black, blue, green, lightBlue } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const Section = styled.section`
  position: relative;
  overflow: hidden;
`

const Inner = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 8.5rem 1.2rem 5rem;
  ${media.smallTablet`padding: 10rem 3rem 6.5rem;`}

  display: grid;
  gap: 3rem;
  ${media.tablet`
    grid-template-columns: minmax(0, 1fr) minmax(0, 28rem);
    gap: 4.5rem;
    align-items: start;
  `}
`

const Title = styled.h1`
  font-size: clamp(2.4rem, 5.5vw, 3.8rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: rgb(${black});
  margin-top: 1.2rem;
`

const Body = styled.p`
  margin-top: 1.4rem;
  max-width: 36rem;

  font-size: 1.1rem;
  line-height: 1.65;
  color: rgba(${black}, .68);
`

const Steps = styled.ol`
  list-style: none;
  margin-top: 2.4rem;
`

const Step = styled.li`
  display: grid;
  grid-template-columns: 2.4rem minmax(0, 1fr);
  gap: .4rem;
  padding: .85rem 0;

  border-top: 1px solid rgba(${black}, .08);

  &:last-of-type {
    border-bottom: 1px solid rgba(${black}, .08);
  }
`

const StepNumber = styled.p`
  font-size: 1.15rem;
  font-weight: 900;
  color: rgb(${blue});
`

const StepTitle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: rgb(${black});
`

const StepBody = styled.p`
  grid-column: 2;
  font-size: .92rem;
  font-weight: 300;
  line-height: 1.55;
  color: rgba(${black}, .65);
  margin-top: .15rem;
`

const EmailNote = styled.p`
  margin-top: 1.8rem;
  font-size: .95rem;
  color: rgba(${black}, .6);
`

const EmailLink = styled.a`
  color: rgb(${blue});
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const FormCard = styled.div`
  ${glass}
  border-radius: 24px;
  padding: 1.6rem 1.4rem;
  ${media.smallTablet`padding: 2rem 1.9rem;`}
`

const FormTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: rgb(${black});
  margin-bottom: 1.3rem;
`

export default function ContactSection({ content }) {
  return (
    <Section>
      <OrbField orbs={[
        { color: lightBlue, size: "48rem", top: "-14rem", right: "-12rem", opacity: .5 },
        { color: green, size: "36rem", bottom: "-18rem", left: "-12rem", opacity: .3 },
      ]} />

      <Inner>
        <div>
          <Kicker accent={blue}>{content.hero.kicker}</Kicker>
          <Title dangerouslySetInnerHTML={{ __html: withAccentedPeriod(content.hero.title, blue) }} />

          {content.hero.body.map((paragraph, index) => (
            <Body key={index}>{paragraph}</Body>
          ))}

          <Steps>
            {content.steps.map((step, index) => (
              <Step key={step.title}>
                <StepNumber>{index + 1}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepBody>{step.body}</StepBody>
              </Step>
            ))}
          </Steps>

          <EmailNote>
            Prefer email? <EmailLink href={`mailto:${content.email}`}>{content.email}</EmailLink>
          </EmailNote>
        </div>

        <FormCard>
          <FormTitle dangerouslySetInnerHTML={{ __html: withAccentedPeriod(content.form.title, blue) }} />
          <ContactForm />
        </FormCard>
      </Inner>
    </Section>
  )
}
