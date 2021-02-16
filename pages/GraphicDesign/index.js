import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import SimpleHero from "../../common/SimpleHero/SimpleHero";
import CommonPortfolioCardContainer from "../../common/CommonPortfolioCardContainer/CommonPortfolioCardContainer";
import {LinkToPortfoliContainer, MainContainer, ProjectCardContainer} from "../../styles/graphicdesign/styles";
import PromoCardDesign from "../../common/PromoCardDesign/PromoCardDesign";


export default function Index() {
  return (
    <MainContainer>
      <Header />
      <SimpleHero mainText={'Graphic Design'} textTop={'We deliver eye-catching branding materials that are '} textBot={'tailored to meet your business objectives.'}/>
      <ProjectCardContainer>
        <CommonPortfolioCardContainer type={'graph'}/>
      </ProjectCardContainer>
      <LinkToPortfoliContainer>
        <PromoCardDesign type={'app'}/>
        <PromoCardDesign type={'web'}/>
      </LinkToPortfoliContainer>
      <Footer />
    </MainContainer>
  )
}