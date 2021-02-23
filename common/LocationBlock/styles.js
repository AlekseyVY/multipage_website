import styled from "styled-components";



export const LocationMainContainer = styled.div`
  width: 111.1rem;
  height: 32.6rem;
  margin-bottom: 3.2rem;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 67.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 71.4rem;
  }
`

export const RotationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.type};
  @media (max-width: 768px){
    width: 68.9rem;
    height: unset;
    flex-direction: column;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    flex-direction: column-reverse;
  }
`

export const LocationTextContainer = styled.div`
  width: 73rem;
  height: 32.6rem;
  background: #FDF3F0;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 32.6rem;
    margin-bottom: 3.1rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 39.4rem;
    border-radius: unset;
  }
`

export const LocationImageContainer = styled.div`
  width: 35rem;
  height: 32.6rem;
  @media (max-width: 768px){
    width: 68.9rem;
    height: 32.6rem;
    margin-bottom: 12rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 32rem;
    margin: 0;
  }
`

export const ImageLoc = styled.div`
  width: 35rem;
  height: 32.6rem;
  border-radius: 1.5rem;
  background-image: url(${props => `/assets/locations/desktop/${props.image}`});
  @media (max-width: 768px){
    width: 68.9rem;
    height: 32.6rem;
    background-image: url(${props => `/assets/locations/tablet/${props.image}`});
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 32rem;
    border-radius: unset;
  }
  
`

export const InnerLocTextContWrap = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 375px){
    width: 32.7rem;
    height: 23.4rem;
    text-align: center;
  }
`

export const InnerLocTextBlockWrapper = styled.div`
  display: flex;
  @media (max-width: 375px){
    height: 18rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const InnerLocTextBlock = styled.div`
  width: 25.5rem;
  height: 7.8rem;
`
export const HWrapper = styled.h2`
  margin-top: 0;
`