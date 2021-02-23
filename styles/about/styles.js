import styled from "styled-components";
import {lightPeach, peach, white} from "../colors";

export const MainContainer = styled.div`
  display: flex;
  height: 353.2rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 466.3rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 509.4rem;
  }
`;



export const HeroContainer = styled.div`
  width: 111.1rem;
  height: 48rem;
  display: flex;
  background: ${lightPeach};
  justify-content: space-between;
  border-radius: 1.5rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  color: ${white};
  @media (max-width: 768px){
    width: 68.9rem;
    height: 63.2rem;
    flex-direction: column-reverse;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 71.5rem;
    border-radius: unset;
  }
`

export const Oval_1 = styled.div`
  width: 64rem;
  height: 64rem;
  border-radius: 90%;
  position: absolute;
  z-index: -1;
  bottom: 0%;
  left: 0%;
  background: linear-gradient(90deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  @media (max-width: 768px){
    bottom: 12%;
    left: -20%;
}
  @media (max-width: 375px){
    width: 29.2rem;
    height: 29.2rem;
    bottom: 30%;
    left: 22%;
  }
`

export const HeroInnerRight = styled.div`
  @media (max-width: 768px){
    width: 68.9rem;
    height: 31.2rem;
    z-index: 1;
  }
  @media (max-width: 375px){
    width: 37.5rem;
  }
`

export const HeroInnerLeft = styled.div`
  width: 63.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 31.2rem;
    z-index: 2;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 39.5rem;
  }
`


export const HeroMainText = styled.div`
  width: 45.8rem;
  display: flex;
  @media (max-width: 768px){
    justify-content: center;
  }
  @media (max-width: 375px){
    font-size: 3.2rem;
    line-height: 3.6rem;
    width: 32.7rem;
  }
`

export const HeroSecondText = styled.div`
  width: 45.8rem;
  @media (max-width: 375px){
    width: 32.7rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
`

export const HeroImage = styled.div`
  border-bottom-right-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  width: 47.6rem;
  height: 48rem;
  background-image: url(${props => `/assets/about/desktop/${props.image}`});
  @media (max-width: 768px) {
    width: 68.9rem;
    height: 32rem;
    border-radius: 1.5rem 1.5rem 0 0;
    background-image: url(${props => `/assets/about/tablet/${props.image}`});
    z-index: 1;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 32rem;
    background-image: url(${props => `/assets/about/mobile/${props.image}`});
  }
`

export const PromoBlockContainer = styled.div`
  width: 111.1rem;
  height: 64rem;
  background: #FDF3F0;
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: -1;
  overflow: hidden;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 73.6rem;
    flex-direction: column;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 86.5rem;
    border-radius: unset;
  }
`

export const PromorOval_1 = styled.div`
  width: 29.2rem;
  height: 29.2rem;
  border-radius: 90%;
  position: absolute;
  opacity: 6%;
  background: linear-gradient(-90deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  bottom: 0%;
  right: 19%;
  z-index: -2;
  @media (max-width: 768px){
    bottom: 10%;
    left: 50%;
  }
  @media (max-width: 375px){
    top: 38%;
    left: 15%;
  }
`
export const PromorOval_2 = styled.div`
  width: 29.2rem;
  height: 29.2rem;
  border-radius: 90%;
  position: absolute;
  opacity: 6%;
  background: linear-gradient(0deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  bottom: 0%;
  right: 45%;
  z-index: -2;
  @media (max-width: 768px){
    bottom: 10%;
    left: 7.8%;
  }
  @media (max-width: 375px){
    bottom: -5%;
    left: 15%;
  }
`

export const PromoImage = styled.div`
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  width: 47.6rem;
  height: 64rem;
  background-image: url(${props => `/assets/about/desktop/${props.image}`});
  @media (max-width: 768px){
    border-radius: 1.5rem 1.5rem 0 0;
    width: 68.9rem;
    height: 32rem;
    background-image: url(${props => `/assets/about/tablet/${props.image}`});
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 32rem;
    background-image: url(${props => `/assets/about/mobile/${props.image}`});
    border-radius: unset;
  }
`

export const RightInnerPromoContainer = styled.div`
  width: 63.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 41.6rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 54.5rem;
  }
`

export const InnerPromoTextContainer = styled.div`
  width: 44.5rem;
  height: 33.2rem;
  @media (max-width: 768px){
    width: 57.2rem;
    height: 28rem;
    text-align: center;
  }
  @media (max-width: 375px){
    width: 32.7rem;
    height: 38.5rem;
  }
`

export const PromoMainText = styled.h2`
  color: ${peach};
  margin-top: 0;
  @media (max-width: 375px){
    font-size: 3.2rem;
    line-height: 3.6rem;
  }
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
  position: relative;
  z-index: -1;
  overflow: hidden;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 73.6rem;
    flex-direction: column;  
    margin-bottom: 0
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 86.5rem;
  }
`

export const PromorOval_3 = styled.div`
  width: 29.2rem;
  height: 29.2rem;
  border-radius: 90%;
  position: absolute;
  opacity: 6%;
  background: linear-gradient(-90deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  bottom: 0%;
  left: 26.5%;
  z-index: -2;
  @media (max-width: 768px){
    bottom: 10%;
    left: 50%;
  }
  @media (max-width: 375px){
    top: 38%;
    left: 15%;
  }
`
export const PromorOval_4 = styled.div`
  width: 29.2rem;
  height: 29.2rem;
  border-radius: 90%;
  position: absolute;
  opacity: 6%;
  background: linear-gradient(0deg, rgba(93,2,2,0), rgba(93,2,2,0.5));
  bottom: 0%;
  left: 0%;
  z-index: -2;
  @media (max-width: 768px){
    bottom: 10%;
    left: 7.5%;
  }
  @media (max-width: 375px){
    bottom: -5%;
    left: 15%;
  }
`

export const PromoImageTwo = styled.div`
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  width: 47.6rem;
  height: 64rem;
  background-image: url(${props => `/assets/about/desktop/${props.image}`});
  @media (max-width: 768px){
    border-radius: 1.5rem 1.5rem 0 0;
    width: 68.9rem;
    height: 32rem;
    background-image: url(${props => `/assets/about/tablet/${props.image}`});
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 32rem;
    background-image: url(${props => `/assets/about/mobile/${props.image}`});
    border-radius: unset;
  }
`

export const PromoSecondText = styled.div`
  @media (max-width: 375px){
    width: 32.7rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    text-align: center;
  }
`