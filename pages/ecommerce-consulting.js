import React, { Component } from "react"
import styled from "styled-components"
import dynamic from "next/dynamic"
import Link from "next/link"
import {
  BulletPoint,
  Button,
  ButtonWrapper,
  Footer,
  Head,
  Nav,
  Paragraph,
  ServicePageHeader as Header,
  Title,
  Wire
} from "../components"
import media from "../styles/mediaQueries"
import { blue, lightBlue, black, white } from "../styles/colors"

dynamic(import("slick-carousel/slick/slick.css"))

const PageWrapper = styled.div`
  padding: 1.2rem;
  ${media.smallTablet`padding: 3rem;`}
`

const SliderItem = styled.img`
  height: 2rem;
  width: auto !important;  
  margin: 0 .5rem;
  ${media.smallTablet`margin: 0 2rem;`}
  ${media.laptop`
    height: 3rem;
    margin: 0 2.5rem;
  `}
`

const Blue = styled.span`
  color: rgb(${blue});
`

const BulletPointWrapper = styled.div`
  margin-top: 2.5rem;
  ${media.tablet`margin-left: 28rem;`}
  ${media.laptop`margin-right: 13rem;`}
`

const StyledLink = styled.a`
  text-decoration: none;
  color: rgb(${black});

  &:hover {
    ${props => props.withUnderline && `text-decoration: underline;`}
    text-decoration-color: rgb(${blue});
  }
`

class Consulting extends Component {
  constructor() {
    super()

    this.state = {
      isServer: true
    }
  }

  componentDidMount() {
    this.setState((state) => state.isServer && { isServer: false })
  }

  render() {
    const Slider = dynamic(import("react-slick"), {
      ssr: this.state.isServer
    })

    const StyledSlider = styled(Slider)`
      width: 100vw;
    
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    
      ${media.tablet`padding-left: 27.5rem;`}
      ${media.laptop`margin: 3rem 0;`}
    `

    return (
      <div style={{ position: "relative" }}>
        <Head title="E-Commerce Technology Consulting | E-Commerce Developer Help | Reaction Commerce | out:grow" />
        <Nav />

        <Header
          backgroundImage="/consulting.jpg"
          body={[
            "Throughought the lifecycle of a project, all technical teams face issues and challenges that they are not prepared for, causing them to get stuck and lose precious time.",
            "Our industry-renowned consulting service gives your team access to our engineers’ invaluable experience, and ensures that your project is kept on track."
          ]}
          buttonTextColor={blue}
          overlayColor={lightBlue}
          title="Your own developers. Supercharged."
        />

        <Wire color={blue} />

        <PageWrapper id="section-content">
          <Title color={blue} noMarginTop>We know your stack.</Title>
          <StyledSlider {...{
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true
          }}>
            <div>
              <Link href="/reaction-commerce" passHref>
                <StyledLink>
                  <SliderItem src="/reaction-logo.png" loading="lazy" />
                </StyledLink>
              </Link>
            </div>
            <SliderItem src="/salesforce-cc-logo.png" loading="lazy"/>
            <SliderItem src="/bigcommerce-logo.png" loading="lazy" />
          </StyledSlider>

          <Paragraph>Our engineers have accumulated <Blue>dozens of years of experience</Blue> on <Link href="/reaction-commerce" passHref><StyledLink withUnderline><Blue>Reaction Commerce</Blue></StyledLink></Link>.</Paragraph>
          <Paragraph>Unlike most consultancy companies, we <Blue>focus exclusively</Blue> on Reaction Commerce and its stack (Node.js, MongoDB, GraphQL, React, Next.js) to provide our clients with a <Blue>truly unique expertise</Blue>.</Paragraph>

          <ButtonWrapper>
            <Button backgroundColor={blue} color={white} href="/contact">Talk to an expert</Button>
          </ButtonWrapper>

          <Title color={blue}>Get expert developer help.</Title>

          <Paragraph>The biggest development issues arise either mid-project, or at a critical pre-delivery stage. Too often, <Blue>these roadblocks cause sensible delays</Blue> and force teams to <Blue>postpone deliveries</Blue>.</Paragraph>

          <Paragraph>If you're using <Link href="/reaction-commerce" passHref><StyledLink withUnderline>Reaction Commerce</StyledLink></Link> for the first time, here’s how <Blue>out:grow ensures that your developers never get stuck</Blue>:</Paragraph>

          <BulletPointWrapper>
            <BulletPoint title="Private problem-solving calls" body="Get video and screen-sharing calls with software engineers who know your stack inside out. Dealing with obscure bugs? Got a question about best practices? Stop Googling around and get an expert answer right away." />
            <BulletPoint title="Code reviews" body="Let our experts review and approve your team's pull requests on GitHub or any other VCS, ensuring every line of code meets our standards before getting merged." />
            <BulletPoint title="Unlimited e-mail & chat" body="Give your developers the peace of mind of always getting answers to their technical questions via e-mail, Slack or any other chat app. Available for free during business hours to all our clients." />
          </BulletPointWrapper>

          <ButtonWrapper>
            <Button backgroundColor={blue} color={white} href="/contact">Get developer help</Button>
          </ButtonWrapper>

          <Title color={blue}>Choosing an e-commerce platform.</Title>

          <Paragraph>Are you <Blue>still exploring your options</Blue> for an e-commerce project? A <Blue>custom-tailored feasability report</Blue> will help you make an <Blue>informed business decision</Blue>.</Paragraph>
          <Paragraph>Taking into account your project's unique characteristics, <Blue>our experts will help you decide</Blue> which e-commerce technology is right for you by <Blue>estimating development time</Blue>, warning you of <Blue>technical pitfals</Blue>, and more.</Paragraph>

          <ButtonWrapper>
            <Button backgroundColor={blue} color={white} href="/contact">Get our experts' opinion</Button>
          </ButtonWrapper>

          <Title color={blue}>Let's talk.</Title>

          <Paragraph>Because every project is different, let us provide <Blue>tailored answers to your questions</Blue>. Speak with one of our consultants today to assess how can out:grow help your business reach new heights.</Paragraph>

          <ButtonWrapper>
            <Button backgroundColor={blue} color={white} href="/contact">Get called back</Button>
          </ButtonWrapper>
        </PageWrapper>

        <Footer color={blue} />
      </div>
    )
  }
}

export default Consulting

