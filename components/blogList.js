"use client"

import Link from "next/link"
import styled from "styled-components"
import Kicker from "./kicker"
import OrbField from "./orbField"
import media from "../styles/mediaQueries"
import { glass } from "../styles/glass"
import { black, blue, green, lightBlue, red } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const Header = styled.section`
  position: relative;
  overflow: hidden;
`

const HeaderInner = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 8.5rem 1.2rem 3rem;
  ${media.smallTablet`padding: 10.5rem 3rem 3.5rem;`}
`

const Title = styled.h1`
  font-size: clamp(2.4rem, 5.5vw, 3.8rem);
  font-weight: 900;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: rgb(${black});

  max-width: 44rem;
  margin-top: 1.2rem;
`

const Lede = styled.p`
  margin-top: 1.4rem;
  max-width: 40rem;

  font-size: 1.13rem;
  line-height: 1.65;
  color: rgba(${black}, .68);
`

const Grid = styled.div`
  position: relative;
  z-index: 1;

  max-width: 72rem;
  margin: 0 auto;

  padding: 0 1.2rem 4.5rem;
  ${media.smallTablet`padding: 0 3rem 6rem;`}

  display: grid;
  gap: 1rem;
  ${media.smallTablet`grid-template-columns: repeat(2, minmax(0, 1fr));`}
`

const PostCard = styled(Link)`
  ${glass}
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 1.6rem 1.7rem;
  text-decoration: none;
  transition: transform .18s ease, box-shadow .18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(${black}, .1);
  }
`

const PostTitle = styled.h2`
  margin-top: .8rem;

  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.22;
  color: rgb(${black});
`

const Excerpt = styled.p`
  margin-top: .7rem;

  font-size: .95rem;
  line-height: 1.6;
  color: rgba(${black}, .66);
`

const PostMeta = styled.p`
  margin-top: auto;
  padding-top: 1.1rem;

  font-size: .85rem;
  color: rgba(${black}, .5);
`

// Blog index: typographic header over the orb field, then a glass card per post.
export default function BlogList({ posts }) {
  return (
    <>
      <Header>
        <OrbField orbs={[
          { size: "52rem", top: "-16rem", right: "-14rem", opacity: .55, color: lightBlue },
          { size: "44rem", bottom: "-24rem", left: "-14rem", opacity: .4, color: green },
          { size: "30rem", top: "36%", right: "28%", opacity: .28, color: red },
        ]} />

        <HeaderInner>
          <Kicker accent={blue}>the:blog</Kicker>
          <Title dangerouslySetInnerHTML={{
            __html: withAccentedPeriod("AI adoption for agencies, written down.", blue),
          }} />
          <Lede>
            Practical guides from audits, trainings, and support retainers with 5-to-50-person
            web, commerce, and 360 agencies. Written by the founder, from client work.
          </Lede>
        </HeaderInner>
      </Header>

      <Grid>
        {posts.map(post => (
          <PostCard key={post.slug} href={`/blog/${post.slug}`}>
            <Kicker accent={post.accent}>{post.kicker}</Kicker>
            <PostTitle dangerouslySetInnerHTML={{ __html: withAccentedPeriod(post.title, post.accent) }} />
            <Excerpt>{post.excerpt}</Excerpt>
            <PostMeta>{post.dateLabel} &middot; {post.minutes} min read</PostMeta>
          </PostCard>
        ))}
      </Grid>
    </>
  )
}
