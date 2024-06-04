import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderDropdownIcon,
  HeaderNavLinkProduct,
  HeaderNavLinks,
  HeaderNavMenu,
  HeaderNavWrapper,
  HeaderProductsDropdown,
  HeaderProductsDropdownWrapper,
  HeaderProductsText,
  HeaderProductsWrapper,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavWrapper>
        <nav>
          <HeaderNavMenu>
            <li>
              <HeaderNavLinks to="/">home</HeaderNavLinks>
            </li>
            <li>
              <HeaderNavLinks to="about">about</HeaderNavLinks>
            </li>
            <li style={{ position: "relative" }}>
              <HeaderProductsDropdownWrapper>
                <HeaderNavLinks to="products" $product={true}>
                  <HeaderProductsWrapper>
                    <span>products</span>
                    <HeaderDropdownIcon />
                  </HeaderProductsWrapper>
                </HeaderNavLinks>
                <HeaderProductsDropdown>
                  <li>
                    <h4>All Supps</h4>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                  <li>
                    <h4>Shop By Type</h4>
                    <HeaderProductsText>Best Sellers</HeaderProductsText>
                    <HeaderProductsText>Gear</HeaderProductsText>
                    <HeaderProductsText>Protein</HeaderProductsText>
                    <HeaderProductsText>Muscle Builder</HeaderProductsText>
                    <HeaderProductsText>Recovery</HeaderProductsText>
                    <HeaderProductsText>Pre-Workout</HeaderProductsText>
                    <HeaderProductsText>Immunity + Welness</HeaderProductsText>
                  </li>
                </HeaderProductsDropdown>
              </HeaderProductsDropdownWrapper>
            </li>
            <li>
              <HeaderNavLinks to="apparel">apparel</HeaderNavLinks>
            </li>
            <li>
              <HeaderNavLinks to="sale">sale</HeaderNavLinks>
            </li>
            <li>
              <HeaderNavLinks to="join_us">join us</HeaderNavLinks>
            </li>
          </HeaderNavMenu>
        </nav>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderNavWrapper>
    </HeaderContainer>
  );
}

export default Header;
