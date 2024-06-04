import styled from "styled-components";
import { primaryFont } from "../fonts";

export const HeadTitle = styled.h2`
  font-size: 2.4rem;
  font-family: ${primaryFont};
  font-weight: 700;
  text-align: center;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainTextColor};
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  white-space: nowrap;
`;
