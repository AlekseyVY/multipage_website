import Head from 'next/head'
import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {
  BigOval, BigOvalCopy,
  CardContainer,
  H1Hero,
  HeroButtonContainer,
  HeroContainer,
  HeroImage,
  HeroPTextContainer,
  HeroTextContainer,
  ImageContainer, InnerCardContainer, MainContainer, MottoContainer,
  Oval
} from "../styles/homepage/styles";
import Button from "../common/Button/Button";
import PromoCardDesign from "../common/PromoCardDesign/PromoCardDesign";
import HomeSimpleCard from "../common/HomeSimpleCard/HomeSimpleCard";

export default function Home() {
  return (
    <MainContainer>
      <BigOval/>
      <BigOvalCopy/>
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
      <CardContainer>
          <PromoCardDesign height={'64rem'} type={"web"}/>
        <InnerCardContainer>
          <div>
            <PromoCardDesign type={"app"}/>
          </div>
          <div>
            <PromoCardDesign type={"graphic"}/>
          </div>
        </InnerCardContainer>
      </CardContainer>
      <MottoContainer>
        <div>
          <HomeSimpleCard type={'pas'}/>
        </div>
        <div>
          <HomeSimpleCard type={'res'}/>
        </div>
        <div>
          <HomeSimpleCard type={'fri'}/>
        </div>
      </MottoContainer>
      <Footer />
    </MainContainer>
  )
}


