import { MoonIcon, SunIcon, ThemeSwitcherBtn } from "./ThemeSwitcher.styled";

// eslint-disable-next-line react/prop-types
function ThemeSwitcher({ toggleTheme, isDarkTheme }) {
  const handleThemeSwitcher = () => {
    toggleTheme();
  };

  return (
    <ThemeSwitcherBtn
      type="button"
      aria-label="Toggle Theme"
      title="Toggle Theme"
      onClick={handleThemeSwitcher}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </ThemeSwitcherBtn>
  );
}

export default ThemeSwitcher;
