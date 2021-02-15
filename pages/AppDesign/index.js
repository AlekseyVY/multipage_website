import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import {MainContainer} from "./styles";
import SimpleHero from "../common/SimpleHero/SimpleHero";


const AppDesign = () => {
  return (
    <MainContainer>
      <Header />
      <SimpleHero mainText={'App Design'} textTop={'Our mobile designs bring intuitive digital solutions'} textBot={' to your customers right at their fingertips.'}/>
      <Footer />
    </MainContainer>
  )
}

export default AppDesign;