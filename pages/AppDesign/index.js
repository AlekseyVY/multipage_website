import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import {
  CommonPortfolioCardContainerWrapper,
  DummyCard,
  LinkContainer,
  MainContainer
} from "../../styles/appdesign/styles";
import SimpleHero from "../../common/SimpleHero/SimpleHero";
import CommonPortfolioCardContainer from "../../common/CommonPortfolioCardContainer/CommonPortfolioCardContainer";
import PromoCardDesign from "../../common/PromoCardDesign/PromoCardDesign";
import {BigOvalWeb} from "../../styles/webdesign/styles";


const AppDesign = () => {
  return (
    <MainContainer>
      <BigOvalWeb/>
      <Header />
      <SimpleHero mainText={'App Design'} textTop={'Our mobile designs bring intuitive digital solutions'} textBot={' to your customers right at their fingertips.'}/>
      <CommonPortfolioCardContainerWrapper>
        <CommonPortfolioCardContainer type={'app'}/>
        <DummyCard/>
      </CommonPortfolioCardContainerWrapper>
      <LinkContainer>
        <PromoCardDesign type={'web'}/>
        <PromoCardDesign type={'graphic'}/>
      </LinkContainer>
      <Footer />
    </MainContainer>
  )
}

export default AppDesign;