import {MainText, PortfolioCardContainer, TextContainer} from "./styles";


const CommonPortfolioCard = ({card}) => {

  return (
    <PortfolioCardContainer icon={card.img}>
      <TextContainer>
        <div>
          <MainText>
            {card.name}
          </MainText>
        </div>
        <div>
          {card.text_top}
        </div>
        <div>
          {card.text_bot}
        </div>
      </TextContainer>
    </PortfolioCardContainer>
  )
}


export default CommonPortfolioCard;