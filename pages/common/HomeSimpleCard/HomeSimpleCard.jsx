import {Circle, HomeSimpleCardContainer, ImageContainer, TextContainer} from "./styles";


const HomeSimpleCard = ({ type = 'pas'}) => {
  const backgroundArray = ['/assets/home/desktop/illustration-passionate.svg', '/assets/home/desktop/illustration-resourceful.svg',
    '/assets/home/desktop/illustration-friendly.svg']
  const mainTextArray = ['PASSIONATE', 'RESOURCEFUL', 'FRIENDLY']
  const secondaryTextArray = ['Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.']

  let bG, mT, sT
  switch(type){
    case "pas":{
      bG = backgroundArray[0]
      mT = mainTextArray[0]
      sT = secondaryTextArray[0]
      break;
    }
    case "res":{
      bG = backgroundArray[1]
      mT = mainTextArray[1]
      sT = secondaryTextArray[1]
      break;
    }
    case "fri":{
      bG = backgroundArray[2]
      mT = mainTextArray[2]
      sT = secondaryTextArray[2]
      break;
    }
    default:
      break;
  }
  return (
    <HomeSimpleCardContainer>
      <ImageContainer>
        <img src={bG} alt={mT}/>
        {type === "pas" ? <Circle deg={'270deg'}/> : type === 'res' ? <Circle deg={'180deg'}/> : <Circle deg={'0deg'}/>}
      </ImageContainer>
      <TextContainer>
        <h3>
          {mT}
        </h3>
        <div>
          {sT}
        </div>
      </TextContainer>
    </HomeSimpleCardContainer>
  )
}



export default HomeSimpleCard;