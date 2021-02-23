import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  height: 279.6rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 390.8rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 530.1rem;
  }
`;


export const ProjectCardContainer = styled.div`
  width: 111.1rem;
  height: 98.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 69.8rem;
    margin-top: 12rem;
    height: 202rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
    height: 306.8rem;
  }
`

export const LinkToPortfoliContainer = styled.div`
  width: 111.1rem;
  height: 30.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26rem;
  @media (max-width: 768px){
    width: 76.8rem;
    flex-direction: column;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    margin-bottom: 36rem;
  }
`