import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  height: 279.6rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 356.6rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 478.3rem;
  }
`;


export const CommonPortfolioCardContainerWrapper = styled.div`
  display: flex;
  width: 111.1rem;
  height: 98.8rem;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 69.8rem;
    margin-top: 12rem;
    height: 167.8rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
    height: 255rem;
  }
`

export const DummyCard = styled.div`
  width: 35rem;
  height: 47.8rem;
  @media (max-width: 768px){  
    display: none;
  }
  @media (max-width: 375px){
    display: none;
  }
`


export const LinkContainer = styled.div`
  width: 111.1rem;
  height: 30.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26rem;
  @media (max-width: 768px){
    flex-direction: column;
    width: 68.9rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
  }
`