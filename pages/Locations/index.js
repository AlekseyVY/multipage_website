import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import LocationBlock from "../../common/LocationBlock/LocationBlock";
import {LocationBlockWrapper, MainContainer} from "../../styles/locations/styles";


export default function Locations() {
  return(
    <MainContainer>
      <Header />
      <LocationBlockWrapper>
        <LocationBlock />
        <LocationBlock reverse={true}/>
        <LocationBlock />
      </LocationBlockWrapper>
      <Footer />
    </MainContainer>
  )
}