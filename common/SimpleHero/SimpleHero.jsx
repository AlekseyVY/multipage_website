import {HeroContainer, InnerHeroContainer, MainText, TextBlock} from "./styles";


const SimpleHero = ({mainText = '', textTop = '', textBot = ''}) => {

  return(
    <HeroContainer>
      <InnerHeroContainer>
        <div>
          <MainText>{mainText}</MainText>
        </div>
        <div>
          <TextBlock>
            {textTop}
          </TextBlock>
          <TextBlock>
            {textBot}
          </TextBlock>
        </div>
      </InnerHeroContainer>
    </HeroContainer>
  )
}

export default SimpleHero;