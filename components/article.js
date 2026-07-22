"use client"

import Link from "next/link"
import styled from "styled-components"
import Button from "./button"
import Kicker from "./kicker"
import OrbField from "./orbField"
import InlineText from "./inlineText"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import { black } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const glowPresets = [
  { size: "46rem", top: "-18rem", right: "-12rem", opacity: .5 },
  { size: "36rem", top: "10rem", left: "-16rem", opacity: .32 },
]

const Header = styled.header`
  position: relative;
  overflow: hidden;
`

const Column = styled.div`
  position: relative;
  z-index: 1;

  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1.2rem;
  ${media.smallTablet`padding: 0 3rem;`}
`

const HeaderInner = styled(Column)`
  padding-top: 8.5rem;
  padding-bottom: 1rem;
  ${media.smallTablet`padding-top: 10rem;`}
`

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1.6rem;

  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
  color: rgba(${black}, .5);
  transition: color .15s ease;

  &:hover {
    color: rgb(${props => props.$accent});
  }
`

const Title = styled.h1`
  font-size: clamp(2.1rem, 5vw, 3.1rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: rgb(${black});
  margin-top: 1.1rem;
`

const Meta = styled.p`
  margin-top: 1.3rem;
  font-size: .9rem;
  color: rgba(${black}, .55);
`

const MetaLink = styled(Link)`
  color: rgba(${black}, .7);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: rgb(${props => props.$accent});
  }
`

const Lede = styled.p`
  margin-top: 1.4rem;

  font-size: 1.13rem;
  line-height: 1.7;
  color: rgba(${black}, .72);

  & + & {
    margin-top: 1rem;
  }
`

const Body = styled.div`
  padding-bottom: 4.5rem;
  ${media.smallTablet`padding-bottom: 6rem;`}
`

const Takeaways = styled.aside`
  ${glass}
  border-radius: 18px;
  padding: 1.5rem 1.6rem;
  margin-top: 2rem;
`

const TakeawaysList = styled.ul`
  list-style: none;
  margin-top: .9rem;
  display: grid;
  gap: .7rem;
`

const TakeawaysItem = styled.li`
  position: relative;
  padding-left: 1.3rem;

  font-size: .98rem;
  line-height: 1.6;
  color: rgba(${black}, .75);

  &::before {
    content: ":";
    position: absolute;
    left: 0;
    font-weight: 900;
    color: rgb(${props => props.$accent});
  }
`

const H2 = styled.h2`
  font-size: clamp(1.55rem, 3vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: rgb(${black});
  margin-top: 3rem;
`

const P = styled.p`
  margin-top: 1.1rem;

  font-size: 1.04rem;
  line-height: 1.75;
  color: rgba(${black}, .72);
`

const List = styled.ul`
  list-style: none;
  margin-top: 1.1rem;
  display: grid;
  gap: .8rem;
`

const ListItem = styled.li`
  position: relative;
  padding-left: 1.35rem;

  font-size: 1.02rem;
  line-height: 1.7;
  color: rgba(${black}, .72);

  &::before {
    content: ":";
    position: absolute;
    left: 0;
    font-weight: 900;
    color: rgb(${props => props.$accent});
  }
`

const Steps = styled.ol`
  list-style: none;
  margin-top: 1.3rem;
  display: grid;
  gap: 1.15rem;
`

const Step = styled.li`
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: .8rem;
`

const StepNumber = styled.p`
  font-size: .92rem;
  font-weight: 900;
  letter-spacing: .08em;
  line-height: 1.7;
  color: rgb(${props => props.$accent});
`

const StepTitle = styled.p`
  font-weight: 600;
  font-size: 1.02rem;
  line-height: 1.55;
  color: rgb(${black});
`

const StepBody = styled.p`
  margin-top: .3rem;
  font-size: .98rem;
  line-height: 1.65;
  color: rgba(${black}, .68);
`

const Cards = styled.div`
  display: grid;
  gap: .9rem;
  margin-top: 1.3rem;

  ${media.smallTablet`grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));`}
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

const TableWrapper = styled.div`
  margin-top: 1.3rem;
  overflow-x: auto;
  border: 1px solid rgba(${black}, .09);
  border-radius: 14px;
`

const Table = styled.table`
  width: 100%;
  min-width: 36rem;
  border-collapse: collapse;
  font-size: .93rem;

  th {
    text-align: left;
    font-weight: 600;
    color: rgb(${black});
    padding: .8rem .95rem;
    background: rgba(${black}, .04);
  }

  td {
    padding: .8rem .95rem;
    border-top: 1px solid rgba(${black}, .07);
    color: rgba(${black}, .7);
    line-height: 1.5;
    vertical-align: top;
  }

  td:first-child {
    font-weight: 600;
    color: rgb(${black});
  }
`

const CtaWrapper = styled.div`
  margin-top: 1.6rem;
`

const FaqQuestion = styled.h3`
  margin-top: 1.8rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  color: rgb(${black});
`

const FaqAnswer = styled.p`
  margin-top: .5rem;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(${black}, .7);
`

const Author = styled.aside`
  ${glass}
  border-radius: 18px;
  margin-top: 3.5rem;
  padding: 1.4rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.1rem;
`

const AuthorPhoto = styled.img`
  flex-shrink: 0;
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 14px;
  object-fit: cover;
`

const AuthorName = styled.p`
  font-weight: 600;
  color: rgb(${black});
`

const AuthorBio = styled.p`
  margin-top: .25rem;
  font-size: .92rem;
  line-height: 1.55;
  color: rgba(${black}, .65);
`

const RelatedGrid = styled.div`
  display: grid;
  gap: .9rem;
  margin-top: 1.3rem;

  ${media.smallTablet`grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));`}
`

const RelatedCard = styled(Link)`
  ${glass}
  display: block;
  border-radius: 18px;
  padding: 1.2rem 1.3rem;
  text-decoration: none;
  transition: transform .18s ease, box-shadow .18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px rgba(${black}, .1);
  }
`

const RelatedTitle = styled.p`
  margin-top: .55rem;
  font-weight: 600;
  font-size: .98rem;
  line-height: 1.45;
  color: rgb(${black});
`

// Long-form blog article: single reading column, glass takeaways box, numbered
// steps and card grids in the site's editorial style, FAQ, author, related posts.
export default function Article({ post, accent, glow, dateLabel, minutes, related = [] }) {
  return (
    <article>
      <Header>
        <OrbField orbs={glow.map((color, index) => ({ color, ...glowPresets[index % glowPresets.length] }))} />

        <HeaderInner>
          <BackLink href="/blog" $accent={accent}>&larr; All posts</BackLink>
          <Kicker accent={accent}>{post.kicker}</Kicker>
          <Title dangerouslySetInnerHTML={{ __html: withAccentedPeriod(post.title, accent) }} />
          <Meta>
            By <MetaLink href="/founder" $accent={accent}>Loan Laux</MetaLink> &middot; {dateLabel} &middot; {minutes} min read
          </Meta>

          {post.answer.map((paragraph, index) => (
            <Lede key={index}>
              <InlineText text={paragraph} color={accent} />
            </Lede>
          ))}
        </HeaderInner>
      </Header>

      <Body>
        <Column>
          {post.takeaways && (
            <Takeaways>
              <Kicker accent={accent}>key:takeaways</Kicker>
              <TakeawaysList>
                {post.takeaways.map((takeaway, index) => (
                  <TakeawaysItem key={index} $accent={accent}>
                    <InlineText text={takeaway} color={accent} />
                  </TakeawaysItem>
                ))}
              </TakeawaysList>
            </Takeaways>
          )}

          {post.sections.map(section => (
            <section key={section.heading}>
              <H2 dangerouslySetInnerHTML={{ __html: withAccentedPeriod(section.heading, accent) }} />

              {section.paragraphs?.map((paragraph, index) => (
                <P key={index}>
                  <InlineText text={paragraph} color={accent} />
                </P>
              ))}

              {section.list && (
                <List>
                  {section.list.map((item, index) => (
                    <ListItem key={index} $accent={accent}>
                      <InlineText text={item} color={accent} />
                    </ListItem>
                  ))}
                </List>
              )}

              {section.steps && (
                <Steps>
                  {section.steps.map((step, index) => (
                    <Step key={step.title}>
                      <StepNumber $accent={accent}>{String(index + 1).padStart(2, "0")}:</StepNumber>
                      <div>
                        <StepTitle>{step.title}</StepTitle>
                        <StepBody><InlineText text={step.body} color={accent} /></StepBody>
                      </div>
                    </Step>
                  ))}
                </Steps>
              )}

              {section.bullets && (
                <Cards>
                  {section.bullets.map(bullet => (
                    <Card key={bullet.title}>
                      <Mark $accent={accent}>:</Mark>
                      <CardTitle>{bullet.title}</CardTitle>
                      <CardBody>{bullet.body}</CardBody>
                    </Card>
                  ))}
                </Cards>
              )}

              {section.table && (
                <TableWrapper>
                  <Table>
                    <thead>
                      <tr>
                        {section.table.columns.map(column => <th key={column}>{column}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </TableWrapper>
              )}

              {section.cta && (
                <CtaWrapper>
                  <Button accent={accent} href={section.cta.href}>{section.cta.text}</Button>
                </CtaWrapper>
              )}
            </section>
          ))}

          {post.faq && (
            <section>
              <H2 dangerouslySetInnerHTML={{ __html: withAccentedPeriod("Frequently asked questions.", accent) }} />
              {post.faq.map(({ q, a }) => (
                <div key={q}>
                  <FaqQuestion>{q}</FaqQuestion>
                  <FaqAnswer><InlineText text={a} color={accent} /></FaqAnswer>
                </div>
              ))}
            </section>
          )}

          <Author>
            <AuthorPhoto src="/loan-laux.jpg" alt="Loan Laux, founder of out:grow" />
            <div>
              <AuthorName>Loan Laux</AuthorName>
              <AuthorBio>
                Founder of out:grow. Built and exited a headless commerce agency, ran engineering
                through two acquisitions, and now runs out:grow&apos;s AI adoption practice
                for agencies. <MetaLink href="/founder" $accent={accent}>More about Loan</MetaLink>
              </AuthorBio>
            </div>
          </Author>

          {related.length > 0 && (
            <section>
              <H2 dangerouslySetInnerHTML={{ __html: withAccentedPeriod("Keep reading.", accent) }} />
              <RelatedGrid>
                {related.map(relatedPost => (
                  <RelatedCard key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <Mark $accent={accent}>:</Mark>
                    <RelatedTitle>{relatedPost.title}</RelatedTitle>
                  </RelatedCard>
                ))}
              </RelatedGrid>
            </section>
          )}
        </Column>
      </Body>
    </article>
  )
}
