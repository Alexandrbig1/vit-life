import styled from "styled-components";
import { primaryFont } from "../fonts";

export const GoalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoalText = styled.p`
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 400;
  text-align: center;
  line-height: 1.13333;
  margin-bottom: 4.8rem;
  color: ${(p) => p.theme.colors.secondaryTextColor};
`;

export const GoalMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
`;
