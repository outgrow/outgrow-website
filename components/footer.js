"use client"

import Link from "next/link"
import styled from "styled-components"
import Button from "./button"
import Kicker from "./kicker"
import OrbField from "./orbField"
import media from "../styles/mediaQueries"
import { black, green, lightBlue, red, white } from "../styles/colors"
import { withAccentedPeriod } from "../lib/typography"

const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background: rgb(${black});
  color: rgb(${white});
`

const Inner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.2rem;
  ${media.smallTablet`padding: 0 3rem;`}
`

const CtaBlock = styled.div`
  padding: 5rem 0 4.5rem;
  ${media.smallTablet`padding: 6.5rem 0 5.5rem;`}
`

const CtaTitle = styled.h2`
  font-size: clamp(2.1rem, 5vw, 3.3rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.06;
  max-width: 44rem;
  margin-top: 1.1rem;
`

const CtaBody = styled.p`
  margin-top: 1.2rem;
  max-width: 36rem;
  font-size: 1.05rem;
  line-height: 1.65;
  color: rgba(${white}, .66);
`

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .9rem;
  margin-top: 2.2rem;
`

const Spacer = styled.div`
  padding-top: 3.5rem;
`

const Grid = styled.div`
  border-top: 1px solid rgba(${white}, .12);
  padding: 3rem 0 1.5rem;

  display: grid;
  gap: 2.5rem;
  ${media.smallTablet`grid-template-columns: 1.5fr 1fr 1fr;`}
`

const Logo = styled.img`
  height: 1.15rem;
  width: auto;
  display: block;
`

const Tagline = styled.p`
  margin-top: 1rem;
  max-width: 17rem;
  font-size: .9rem;
  line-height: 1.55;
  color: rgba(${white}, .55);
`

const ColumnTitle = styled.p`
  font-size: .85rem;
  font-weight: 600;
  color: rgba(${white}, .5);
`

const LinkList = styled.ul`
  list-style: none;
  margin-top: .8rem;
`

const LinkItem = styled.li`
  padding: .3rem 0;
`

const FooterLink = styled(Link)`
  color: rgba(${white}, .78);
  text-decoration: none;
  font-size: .95rem;
  transition: color .15s ease;

  &:hover {
    color: rgb(${white});
  }
`

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;

  padding: 1.2rem 0 2rem;
  font-size: .85rem;
  color: rgba(${white}, .45);
`

const EmailLink = styled.a`
  color: rgba(${white}, .6);
  text-decoration: none;

  &:hover {
    color: rgb(${white});
  }
`

const Footer = ({ showCta = true }) => (
  <Wrapper>
    <OrbField orbs={[
      { color: lightBlue, size: "42rem", top: "-12rem", right: "-8rem", opacity: .38 },
      { color: red, size: "32rem", bottom: "-14rem", left: "-10rem", opacity: .24 },
      { color: green, size: "34rem", top: "38%", left: "40%", opacity: .26 },
    ]} />

    <Inner>
      {showCta ? (
        <CtaBlock>
          <Kicker accent={lightBlue} onDark>work:with:us</Kicker>
          <CtaTitle dangerouslySetInnerHTML={{
            __html: withAccentedPeriod("Figure out what AI changes for your agency.", lightBlue),
          }} />
          <CtaBody>
            Tell us how your team works today. You'll hear back from the founder within one business day.
          </CtaBody>
          <CtaRow>
            <Button variant="light" href="/contact">Get in touch</Button>
            <Button variant="ghostDark" href="mailto:contact@outgrow.io">contact@outgrow.io</Button>
          </CtaRow>
        </CtaBlock>
      ) : (
        <Spacer />
      )}

      <Grid>
        <div>
          <Logo alt="out:grow logo" src="/logo-white.svg" height="18px" width="83px" />
          <Tagline>AI adoption consulting for web, commerce, and 360 agencies.</Tagline>
        </div>

        <nav aria-label="Services">
          <ColumnTitle>services:</ColumnTitle>
          <LinkList>
            <LinkItem><FooterLink href="/ai-audits">AI Audits</FooterLink></LinkItem>
            <LinkItem><FooterLink href="/ai-training">AI Training</FooterLink></LinkItem>
            <LinkItem><FooterLink href="/ai-support">AI Support</FooterLink></LinkItem>
          </LinkList>
        </nav>

        <nav aria-label="Company">
          <ColumnTitle>company:</ColumnTitle>
          <LinkList>
            <LinkItem><FooterLink href="/founder">Founder</FooterLink></LinkItem>
            <LinkItem><FooterLink href="/contact">Contact Us</FooterLink></LinkItem>
            <LinkItem><FooterLink href="/privacy">Privacy Policy</FooterLink></LinkItem>
          </LinkList>
        </nav>
      </Grid>

      <Bottom>
        <p>Copyright &copy; 2026 Outgrow FZE.</p>
        <EmailLink href="mailto:contact@outgrow.io">contact@outgrow.io</EmailLink>
      </Bottom>
    </Inner>
  </Wrapper>
)

export default Footer
