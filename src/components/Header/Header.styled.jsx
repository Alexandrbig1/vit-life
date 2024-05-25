import styled from "styled-components";
import { primaryFont } from "../fonts";
import { IoMdArrowDropdown } from "react-icons/io";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;
  height: 6.4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background-color: lightblue;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderNavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const HeaderNavLinks = styled.span`
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: ${primaryFont};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;

export const HeaderDropdownIcon = styled(IoMdArrowDropdown)`
  font-size: 1.6rem;
`;

export const HeaderProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
`;
