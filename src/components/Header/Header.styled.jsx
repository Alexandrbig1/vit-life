import styled from "styled-components";
import { primaryFont } from "../fonts";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

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
  background-color: ${(p) => p.theme.colors.headerBgColor};

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
  align-items: start;
  gap: 1.2rem;
`;

export const HeaderNavLinkProduct = styled(NavLink)`
  color: ${(p) => p.theme.colors.secondaryHeaderTextColor};
  font-family: ${primaryFont};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;

  /* padding-bottom: 0.4rem; */
  /* border-bottom: 1px solid transparent; */
  /* border-bottom: ${(p) => (p.$product ? "" : `1px solid transparent`)}; */

  transition: all var(--primary-transition);

  /* &:hover {
    border-bottom: ${(p) =>
    p.$product ? "" : `1px solid ${p.theme.colors.headerTextColor}`};
    color: ${(p) => p.theme.colors.headerTextColor};
  } */
`;

export const HeaderProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const HeaderNavLinks = styled(NavLink)`
  color: ${(p) => p.theme.colors.secondaryHeaderTextColor};
  font-family: ${primaryFont};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.36px;

  padding-bottom: 0.4rem;
  /* border-bottom: ${(p) => (p.$product ? "" : `1px solid transparent`)}; */
  border-bottom: 1px solid transparent;

  transition: all var(--primary-transition);

  &:hover {
    border-bottom: ${(p) =>
      p.$product ? "" : `1px solid ${p.theme.colors.headerTextColor}`};
    cursor: pointer;
    color: ${(p) => p.theme.colors.headerTextColor};
  }

  &.active {
    border-bottom: ${(p) =>
      p.$product ? "" : `1px solid ${p.theme.colors.headerTextColor}`};
    cursor: pointer;
    color: ${(p) => p.theme.colors.headerTextColor};
  }
`;

export const HeaderDropdownIcon = styled(IoMdArrowDropdown)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.secondaryHeaderTextColor};
  transition: all var(--primary-transition);
`;

export const HeaderProductsDropdown = styled.ul`
  /* opacity: 0; */
  /* pointer-events: none; */
  position: absolute;
  top: 2.4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2rem;
  background-color: aliceblue;
  border-radius: 0.8rem;
  z-index: 100;

  transition: all var(--primary-transition);

  display: none;
  gap: 2.4rem;
  align-items: start;
  justify-content: space-between;
  width: auto;

  & > li {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;

    & > h4 {
      font-family: ${primaryFont};
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: -0.32px;
      color: ${(p) => p.theme.colors.headerTextColor};
      white-space: nowrap;
    }
  }
`;

export const HeaderProductsText = styled.span`
  font-family: ${primaryFont};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.28px;
  color: ${(p) => p.theme.colors.secondaryHeaderTextColor};
  white-space: nowrap;
  cursor: pointer;
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.headerTextColor};
  }
`;

export const HeaderProductsDropdownWrapper = styled.div`
  transition: all var(--primary-transition);
  cursor: pointer;

  &:hover {
    ${HeaderDropdownIcon} {
      color: ${(p) => p.theme.colors.headerTextColor};
    }
  }
  &:hover {
    ${HeaderNavLinkProduct} {
      color: ${(p) => p.theme.colors.headerTextColor};
    }
  }
  &:hover {
    ${HeaderProductsDropdown} {
      display: flex;
    }
  }
`;
