import Head from 'next/head'
import {MainContainer} from "../styles/styles";
import Header from "./common/Header/Header";
import Footer from "./common/Footer/Footer";
import {
  H1Hero,
  HeroButtonContainer,
  HeroContainer,
  HeroImage,
  HeroPTextContainer,
  HeroTextContainer,
  ImageContainer,
  Oval
} from "./styles";
import Image from 'next/image'
import Button from "./common/Button/Button";

export default function Home() {
  return (
    <MainContainer>
      <Header />
      <HeroContainer>
        <Oval/>
        <ImageContainer>
          <HeroImage src={'/assets/home/desktop/image-hero-phone.png'} alt={'Phone'}/>
        </ImageContainer>
        <HeroTextContainer>
          <div>
            <H1Hero>
              Award-winning custom designs and digital branding solutions
            </H1Hero>
          </div>
          <HeroPTextContainer>
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </HeroPTextContainer>
          <HeroButtonContainer>
            <Button isLight={true} text={'LEARN MORE'}/>
          </HeroButtonContainer>
        </HeroTextContainer>
      </HeroContainer>
      <Footer />
    </MainContainer>
  )
}


