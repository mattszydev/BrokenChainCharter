import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Booking from "../components/booking"
import BreakDown from "../components/breakdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Booking/>
    <BreakDown/>
  </Layout>
)

export default IndexPage
