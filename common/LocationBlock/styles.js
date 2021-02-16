import styled from "styled-components";



export const LocationMainContainer = styled.div`
  width: 111.1rem;
  height: 32.6rem;
  margin-bottom: 3.2rem;
`

export const RotationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${props => props.type};
`

export const LocationTextContainer = styled.div`
  width: 73rem;
  height: 32.6rem;
  background: #FDF3F0;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationImageContainer = styled.div`
  width: 35rem;
  height: 32.6rem;
`

export const ImageLoc = styled.img`
  width: 35rem;
  height: 32.6rem;
  border-radius: 1.5rem;
`

export const InnerLocTextContWrap = styled.div`
  width: 54rem;
  display: flex;
  flex-direction: column;
`

export const InnerLocTextBlockWrapper = styled.div`
  display: flex;
`

export const InnerLocTextBlock = styled.div`
  width: 25.5rem;
  height: 7.8rem;
`
export const HWrapper = styled.h2`
  margin-top: 0;
`