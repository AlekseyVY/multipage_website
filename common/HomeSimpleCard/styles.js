import styled from "styled-components";


export const HomeSimpleCardContainer = styled.div`
  width: 35rem;
  height: 41.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

export const TextContainer = styled.div`
  width: 35rem;
  height: 16.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`


