import React from "react"
import Link from "next/link"
import styled from "styled-components"
import Head from "../components/head"
import Nav from "../components/nav"

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  backdrop-filter: rgba(1, 111, 185, 0.4);
`

const Title = styled.h2`
  color: white;
`

const Home = () => (
  <div>
    <Head title="E-Commerce Consulting & Emergency Response | out:grow" />
    <Nav />
     
    <Section style={{ backgroundImage: "url(/static/consulting.jpg)" }}>
      <Title>Redefining e-commerce consulting.</Title>
    </Section>
  </div>
)

export default Home
