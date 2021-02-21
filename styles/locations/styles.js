import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 197rem;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px){
    width: 76.8rem;
    height: 323.7rem;
  }
`;

export const LocationBlockWrapper = styled.div`
  margin-bottom: 26rem;
  @media (max-width: 768px){
    margin-bottom: 0;
    margin-top: 12.8rem;
  }
`