import styled from "styled-components";


export const LocationContainer = styled.div`
  width: 111.1rem;
  height: 36.4rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 123rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

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