import {
  HWrapper,
  ImageLoc, InnerLocTextBlock, InnerLocTextBlockWrapper, InnerLocTextContWrap,
  LocationImageContainer,
  LocationMainContainer,
  LocationTextContainer,
  RotationWrapper
} from "./styles";

const LocationBlock = ({reverse = false, name = 'canada'}) => {
  const data = {
    canada: {
      name: 'Canada',
      leftMainText: 'Designo Central Office',
      leftSecTextTop: '3886 Wellington Street',
      leftSecTextBot: 'Toronto, Ontario M9C 3J5',
      RightMainText: 'Contact',
      RightSecTextTop: 'P : +1 253-863-8967',
      RightSecTextBot: 'M : contact@designo.co',
      image: 'image-map-canada.png'
    },
    australia: {
      name: 'Australia',
      leftMainText: 'Designo AU Office',
      leftSecTextTop: '19 Balonne Street',
      leftSecTextBot: 'New South Wales 2443',
      RightMainText: 'Contact',
      RightSecTextTop: 'P : (02) 6720 9092',
      RightSecTextBot: 'M : contact@designo.au',
      image: 'image-map-australia.png'
    },
    uk: {
      name: 'United Kingdom',
      leftMainText: 'Designo UK Office',
      leftSecTextTop: '13  Colorado Way',
      leftSecTextBot: 'Rhyd-y-fro SA8 9GA',
      RightMainText: 'Contact',
      RightSecTextTop: 'P : 078 3115 1400',
      RightSecTextBot: 'M : contact@designo.uk',
      image: 'image-map-uk.png'
    }
  }

  let show
  switch (name){
    case 'canada': {
      show = data.canada
      break
    }
    case 'australia': {
      show = data.australia
      break;
    }
    case 'uk': {
      show = data.uk
      break;
    }
    default:
      break;
  }

  let type;
  reverse ? type = 'row-reverse' : type = 'row';

  return (
    <LocationMainContainer>
      <RotationWrapper type={type}>
        <LocationTextContainer>
          <InnerLocTextContWrap>
            <div>
              <HWrapper>
                {show.name}
              </HWrapper>
            </div>
            <div>
              <InnerLocTextBlockWrapper>
                <InnerLocTextBlock>
                  <div>
                    <strong>
                      {show.leftMainText}
                    </strong>
                  </div>
                  <div>
                    {show.leftSecTextTop}
                  </div>
                  <div>
                    {show.leftSecTextBot}
                  </div>
                </InnerLocTextBlock>
                <InnerLocTextBlock>
                  <div>
                    <strong>
                      {show.RightMainText}
                    </strong>
                  </div>
                  <div>
                    <div>
                      {show.RightSecTextTop}
                    </div>
                    <div>
                      {show.RightSecTextBot}
                    </div>
                  </div>
                </InnerLocTextBlock>
              </InnerLocTextBlockWrapper>
            </div>
          </InnerLocTextContWrap>
        </LocationTextContainer>
        <LocationImageContainer>
          <ImageLoc image={show.image}/>
        </LocationImageContainer>
      </RotationWrapper>
    </LocationMainContainer>
  )
}


export default LocationBlock;