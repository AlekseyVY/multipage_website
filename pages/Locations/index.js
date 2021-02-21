import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";
import LocationBlock from "../../common/LocationBlock/LocationBlock";
import {LocationBlockWrapper, MainContainer} from "../../styles/locations/styles";


export default function Locations() {
  return(
    <MainContainer>
      <Header />
      <LocationBlockWrapper>
        <LocationBlock name={'canada'}/>
        <LocationBlock name={'australia'} reverse={true}/>
        <LocationBlock name={'uk'}/>
      </LocationBlockWrapper>
      <Footer />
    </MainContainer>
  )
}