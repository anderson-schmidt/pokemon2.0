import * as React from "react";
//import Header from "../components/Header";
import Banner from "../components/Banner";
import AboutSection from "../components/AboutSection";
import Layout from "../components/layout";
//import Footer from "../components/Footer";
import "../components/layout.module.css";

export default function IndexPage() {
  return(
  <Layout>
    <Banner />
    <AboutSection />
  </Layout>
  )
}

export const Head = () => <title>Pokémon Club</title>
