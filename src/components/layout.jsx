import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  position: relative;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 2.4rem 3.2rem;
  }
`;
