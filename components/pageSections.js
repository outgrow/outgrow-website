"use client"

import styled from "styled-components"
import Button from "./button"
import InlineText from "./inlineText"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import { black } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const Wrapper = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 2rem 1.2rem 4.5rem;
  ${media.smallTablet`padding: 3rem 3rem 6rem;`}
`

const Section = styled.section`
  display: grid;
  gap: 1.6rem;
  padding: 3rem 0;
  border-top: 1px solid rgba(${black}, .08);

  &:first-of-type {
    border-top: 0;
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  ${media.tablet`
    grid-template-columns: minmax(0, 19rem) minmax(0, 1fr);
    gap: 3.5rem;
    padding: 4rem 0;
  `}
`

const SectionHead = styled.div`
  ${media.tablet`
    position: sticky;
    top: 6.5rem;
    align-self: start;
  `}
`

const Index = styled.p`
  font-size: .9rem;
  font-weight: 900;
  letter-spacing: .12em;
  color: rgb(${props => props.$accent});
`

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.4vw, 2.35rem);
  font-weight: 900;
  letter-spacing: -0.025em;
  line-height: 1.12;
  color: rgb(${black});
  margin-top: .7rem;
`

const Paragraph = styled.p`
  font-size: 1.04rem;
  line-height: 1.7;
  color: rgba(${black}, .7);

  & + & {
    margin-top: 1rem;
  }
`

const Bullets = styled.div`
  display: grid;
  gap: .9rem;
  margin-top: 1.8rem;

  ${media.smallTablet`grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));`}
`

const Card = styled.div`
  ${glass}
  border-radius: 18px;
  padding: 1.25rem 1.3rem;
`

const Mark = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1;
  color: rgb(${props => props.$accent});
`

const CardTitle = styled.p`
  font-weight: 600;
  font-size: .98rem;
  color: rgb(${black});
  margin-top: .6rem;
`

const CardBody = styled.p`
  font-weight: 300;
  font-size: .9rem;
  line-height: 1.55;
  color: rgba(${black}, .68);
  margin-top: .35rem;
`

const CtaWrapper = styled.div`
  margin-top: 2rem;
`

// Editorial section layout: sticky numbered titles on the left, content on the right.
export default function PageSections({ accent, sections, id, numbered = true }) {
  return (
    <Wrapper id={id}>
      {sections.map((section, index) => (
        <Section key={section.title}>
          <SectionHead>
            {numbered && <Index $accent={accent}>{String(index + 1).padStart(2, "0")}:</Index>}
            <SectionTitle dangerouslySetInnerHTML={{ __html: withAccentedPeriod(section.title, accent) }} />
          </SectionHead>

          <div>
            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <Paragraph key={paragraphIndex}>
                <InlineText text={paragraph} color={accent} />
              </Paragraph>
            ))}

            {section.bullets && (
              <Bullets>
                {section.bullets.map(bullet => (
                  <Card key={bullet.title}>
                    <Mark $accent={accent}>:</Mark>
                    <CardTitle>{bullet.title}</CardTitle>
                    <CardBody>{bullet.body}</CardBody>
                  </Card>
                ))}
              </Bullets>
            )}

            {section.cta && (
              <CtaWrapper>
                <Button accent={accent} href={section.cta.href}>{section.cta.text}</Button>
              </CtaWrapper>
            )}
          </div>
        </Section>
      ))}
    </Wrapper>
  )
}
