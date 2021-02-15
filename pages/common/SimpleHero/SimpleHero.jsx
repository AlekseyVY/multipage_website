import {HeroContainer, InnerHeroContainer, MainText} from "./styles";


const SimpleHero = ({mainText = '', textTop = '', textBot = ''}) => {

  return(
    <HeroContainer>
      <InnerHeroContainer>
        <div>
          <MainText>{mainText}</MainText>
        </div>
        <div>
          <div>
            {textTop}
          </div>
          <div>
            {textBot}
          </div>
        </div>
      </InnerHeroContainer>
    </HeroContainer>
  )
}

export default SimpleHero;