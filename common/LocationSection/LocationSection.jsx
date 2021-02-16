import Button from "../Button/Button";
import {Circle, ImageContainer, LocationCardContainer, LocationContainer} from "./styles";
const canada = '/assets/shared/desktop/illustration-canada.svg'
const australia = '/assets/shared/desktop/illustration-australia.svg'
const uk = '/assets/shared/desktop/illustration-united-kingdom.svg'

const LocationSection = () => {

  return (
    <LocationContainer>
      <LocationCardContainer>
        <ImageContainer>
          <img src={canada} alt={'canada icon'}/>
          <Circle deg={'0deg'}/>
        </ImageContainer>
        <div>
          <h3>
            CANADA
          </h3>
        </div>
        <div>
          <Button isLight={false} text={'SEE LOCATION'}/>
        </div>
      </LocationCardContainer>
      <LocationCardContainer>
        <ImageContainer>
          <img src={australia} alt={'australia icon'}/>
          <Circle deg={'270deg'}/>
        </ImageContainer>
        <div>
          <h3>
            AUSTRALIA
          </h3>
        </div>
        <div>
          <Button isLight={false} text={'SEE LOCATION'}/>
        </div>
      </LocationCardContainer>
      <LocationCardContainer>
        <ImageContainer>
          <img src={uk} alt={'UK icon'}/>
          <Circle deg={'180deg'}/>
        </ImageContainer>
        <div>
          <h3>
            UNITED KINGDOM
          </h3>
        </div>
        <div>
          <Button isLight={false} text={'SEE LOCATION'}/>
        </div>
      </LocationCardContainer>
    </LocationContainer>
  )
}


export default LocationSection;