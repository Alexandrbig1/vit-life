import styled from "styled-components";
import { SiAdafruit } from "react-icons/si";
import { primaryFont } from "../fonts";

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LogoIcon = styled(SiAdafruit)`
  font-size: 2.4rem;
`;

export const LogoText = styled.span`
  font-family: ${primaryFont};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1.48px;
  cursor: pointer;

  /* background: linear-gradient(to right, #ff105f, #ffad06); */
  /* background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202)); */

  background: linear-gradient(to right, rgb(67, 124, 205), rgb(255, 16, 95));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }

  @media (min-width: 768px) {
    font-size: 2.6rem;
  }
`;
