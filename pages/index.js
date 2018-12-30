import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Head from "../components/head"
import Nav from "../components/nav"
import Button from "../components/button"

const Overlay = styled.section`
  height: 100%;
  width: 100%;
  padding: 0 1.2rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const SectionWithBackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: 50%;
`

const Title = styled.h2`
  color: white;
  font-size: 2.4rem;
  font-weight: 800;
  letter-spacing: -2px;
`

const Home = () => (
  <div>
    <Head title="E-Commerce Consulting & Emergency Response | out:grow" />
    <Nav />
     
    <SectionWithBackgroundImage style={{ backgroundImage: "url(/static/consulting.jpg)" }}>
      <Overlay style={{ backgroundColor: "rgba(51, 151, 246, .57)" }}>
        <Title>Redefining <br/>e-commerce <br/>consulting.</Title>
        <Button href="/consulting">Learn more</Button>
      </Overlay>
    </SectionWithBackgroundImage>
  </div>
)

export default Home
