import {
  HeroContainer,
  InnerHeroContainer,
  MainText,
  SimpleHeroOval_1,
  SimpleHeroOval_2,
  SimpleHeroOval_3, SimpleHeroOval_4, SimpleHeroOval_5,
  TextBlock
} from "./styles";



const SimpleHero = ({mainText = '', textTop = '', textBot = ''}) => {

  return(
    <HeroContainer>
      <SimpleHeroOval_1/>
      <SimpleHeroOval_2/>
      <SimpleHeroOval_3/>
      <SimpleHeroOval_4/>
      <SimpleHeroOval_5/>
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