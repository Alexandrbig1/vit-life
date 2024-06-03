import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderDropdownIcon,
  HeaderNavLinks,
  HeaderNavMenu,
  HeaderNavWrapper,
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
              <HeaderNavLinks>about</HeaderNavLinks>
            </li>
            <li>
              <HeaderProductsWrapper>
                <HeaderNavLinks $product={true}>products</HeaderNavLinks>
                <HeaderDropdownIcon />
              </HeaderProductsWrapper>
            </li>
            <li>
              <HeaderNavLinks>apparel</HeaderNavLinks>
            </li>
            <li>
              <HeaderNavLinks>sale</HeaderNavLinks>
            </li>
            <li>
              <HeaderNavLinks>join us</HeaderNavLinks>
            </li>
          </HeaderNavMenu>
        </nav>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderNavWrapper>
    </HeaderContainer>
  );
}

export default Header;
