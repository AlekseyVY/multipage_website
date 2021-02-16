import styled from "styled-components";
import {lightPeach, peach} from "../colors";

export const MainContainer = styled.div`
  display: flex;
  height: 353.2rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;



export const HeroContainer = styled.div`
  width: 111.1rem;
  height: 48rem;
  display: flex;
  background: ${lightPeach};
  justify-content: space-between;
  border-radius: 1.5rem;
`

export const HeroInnerRight = styled.div`
`

export const HeroInnerLeft = styled.div`
  width: 63.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const HeroMainText = styled.div`
  width: 45.8rem;
  display: flex;
`

export const HeroSecondText = styled.div`
  width: 45.8rem;
`

export const HeroImage = styled.img`
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`

export const PromoBlockContainer = styled.div`
  width: 111.1rem;
  height: 64rem;
  background: #FDF3F0;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
`

export const PromoImage = styled.img`
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`

export const RightInnerPromoContainer = styled.div`
  width: 63.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerPromoTextContainer = styled.div`
  width: 44.5rem;
  height: 33.2rem;
`

export const PromoMainText = styled.h2`
  color: ${peach};
  margin-top: 0;
`

export const LocationContainer = styled.div`
  width: 111.1rem;
  height: 36.4rem;
  display: flex;
  justify-content: space-between;

`

export const LocationCardContainer = styled.div`
  width: 35rem;
  height: 36.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ImageContainer = styled.div`
  position: relative;
`

export const Circle = styled.div`
  position: absolute;
  width: 20.2rem;
  height: 20.2rem;
  border-radius: 90%;
  background: linear-gradient(${props => props.deg}, rgba(93, 2, 2, 0.01) 0%, rgba(93, 2, 2, 0.5) 100%);
  top: 0%;
  opacity: 20.27%;
`

export const PromoBlockContainerDown = styled.div`
  width: 111.1rem;
  height: 64rem;
  background: #FDF3F0;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 26rem;
`

export const PromoImageTwo = styled.img`
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
`

