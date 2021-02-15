import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {
  HeroContainer,
  InnerHeroContainer,
  LinkToPortfoliContainer,
  MainContainer,
  MainText,
  ProjectCardContainer
} from "./styles";
import CommonPortfolioCardContainer from "../common/CommonPortfolioCardContainer/CommonPortfolioCardContainer";
import PromoCardDesign from "../common/PromoCardDesign/PromoCardDesign";


export default function WebDesign() {
  return(
    <MainContainer>
      <Header />
      <HeroContainer>
        <InnerHeroContainer>
          <div>
            <MainText>Web Design</MainText>
          </div>
          <div>
            <div>
              We build websites that serve as powerful marketing tools
            </div>
            <div>
              and bring memorable brand experiences.
            </div>
          </div>
        </InnerHeroContainer>
      </HeroContainer>
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

