import styled from "styled-components";
import { primaryFont } from "../fonts";

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OfferText = styled.p`
  font-size: 1.8rem;
  font-family: ${primaryFont};
  font-weight: 500;
  text-align: center;
  line-height: 1.13333;
  margin-bottom: 4.8rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const OfferMenu = styled.ul`
  padding: 2.4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
`;

export const OfferMenuItem = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;
