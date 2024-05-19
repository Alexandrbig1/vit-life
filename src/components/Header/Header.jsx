import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {
  HeaderContainer,
  HeaderNavMenu,
  HeaderNavWrapper,
} from "./Header.styled";

// eslint-disable-next-line react/prop-types
function Header({ toggleTheme, isDarkTheme }) {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavWrapper>
        <nav>
          <HeaderNavMenu>
            <li>about</li>
            <li>products</li>
            <li>apparel</li>
            <li>sale</li>
            <li>join us</li>
          </HeaderNavMenu>
        </nav>
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </HeaderNavWrapper>
    </HeaderContainer>
  );
}

export default Header;
