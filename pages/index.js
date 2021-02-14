import Head from 'next/head'
import {MainContainer} from "../styles/styles";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <Footer />
    </MainContainer>
  )
}


