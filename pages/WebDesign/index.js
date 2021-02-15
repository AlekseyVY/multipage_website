import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {
  LinkToPortfoliContainer,
  MainContainer,
  ProjectCardContainer
} from "./styles";
import CommonPortfolioCardContainer from "../common/CommonPortfolioCardContainer/CommonPortfolioCardContainer";
import PromoCardDesign from "../common/PromoCardDesign/PromoCardDesign";
import SimpleHero from "../common/SimpleHero/SimpleHero";


export default function WebDesign() {
  return(
    <MainContainer>
      <Header />
      <SimpleHero mainText={'Web Design'} textTop={'We build websites that serve as powerful marketing tools '} textBot={'and bring memorable brand experiences.'}/>
      <ProjectCardContainer>
        <CommonPortfolioCardContainer type={'web'}/>
      </ProjectCardContainer>
      <LinkToPortfoliContainer>
        <PromoCardDesign type={'app'}/>
        <PromoCardDesign type={'graphic'}/>
      </LinkToPortfoliContainer>
      <Footer />
    </MainContainer>
  )
}

