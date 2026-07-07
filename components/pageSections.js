"use client"

import styled from "styled-components"
import Title from "./title"
import Paragraph from "./paragraph"
import BulletPoint from "./bulletPoint"
import Button from "./button"
import ButtonWrapper from "./buttonWrapper"
import InlineText from "./inlineText"
import media from "../styles/mediaQueries"
import { white } from "../styles/colors"

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const BulletPointWrapper = styled.div`
  margin-top: 2.5rem;
  ${media.tablet`margin-left: 28rem;`}
  ${media.laptop`margin-right: 13rem;`}
`

export default function PageSections({ color, sections, id }) {
  return (
    <PageWrapper id={id}>
      {sections.map((section, index) => (
        <div key={section.title}>
          <Title $color={color} $noMarginTop={index === 0}>{section.title}</Title>

          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <Paragraph key={paragraphIndex}>
              <InlineText text={paragraph} color={color} />
            </Paragraph>
          ))}

          {section.bullets && (
            <BulletPointWrapper>
              {section.bullets.map(bullet => (
                <BulletPoint key={bullet.title} title={bullet.title} body={bullet.body} />
              ))}
            </BulletPointWrapper>
          )}

          {section.cta && (
            <ButtonWrapper>
              <Button backgroundColor={color} color={white} href={section.cta.href}>{section.cta.text}</Button>
            </ButtonWrapper>
          )}
        </div>
      ))}
    </PageWrapper>
  )
}
