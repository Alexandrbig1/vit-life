import styled from "styled-components";
import { primaryFont } from "../fonts";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 4.8rem 2.4rem;
`;

export const AboutMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 2.4rem;
  width: 100%;
`;

export const AboutItem = styled.li`
  padding: 4.8rem 2.4rem 2.4rem;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  border-radius: 1.2rem;
  position: relative;

  &:nth-child(1) {
    border-radius: 16% 84% 10% 90% / 86% 15% 85% 14%;
    border-left: 2px solid ${(p) => p.theme.colors.accentColor};
  }

  &:nth-child(2) {
    border-radius: 37% 63% 41% 59% / 57% 29% 71% 43%;
    border-bottom: 0.4px solid ${(p) => p.theme.colors.accentColor};
  }

  &:nth-child(3) {
    border-radius: 91% 15% 85% 9% / 37% 63% 20% 80%;
    border-right: 1px solid ${(p) => p.theme.colors.accentColor};
  }
`;

export const AboutItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
`;

export const AboutItemCardTitle = styled.h3`
  font-family: ${primaryFont};
  text-align: center;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 1.33333;
  color: ${(props) => props.theme.mainTextColor};
`;

export const AboutItemCardText = styled.p`
  font-family: ${primaryFont};
  text-align: center;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.33333;
  color: ${(props) => props.theme.mainTextColor};
`;

export const AboutItemCardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  z-index: 3;
  border-radius: 50rem;

  border-top: 1px solid ${(p) => p.theme.colors.accentColor};
  border-right: 1px solid ${(p) => p.theme.colors.accentColor};
`;

export const AboutItemCardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  background-color: transparent;
  border: 3px solid ${(p) => p.theme.colors.mainBgColor};
  border-radius: 50rem;

  position: absolute;
  top: -2.8rem;
  left: 3.2rem;
`;

export const AboutItemCardIconDelivery = styled(LiaShippingFastSolid)`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.mainTextColor};
`;

export const AboutItemCardIconReturn = styled(GiReturnArrow)`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.mainTextColor};
`;

export const AboutItemCardIconSupport = styled(BiSupport)`
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.mainTextColor};
`;
