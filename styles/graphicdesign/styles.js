import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 228.6rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    height: 286.2rem;
  }
  @media (max-width: 375px){
    width: 37.5rem;
    height: 374.7rem;
  }
`;


export const ProjectCardContainer = styled.div`
  width: 111.1rem;
  height: 47.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 69.8rem;
    height: 99.4rem;
    margin-top: 12rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
    height: 151.4rem;
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
    flex-direction: column;
    width: 69.8rem;
  }
  @media (max-width: 375px){
    width: 32.7rem;
  }
`