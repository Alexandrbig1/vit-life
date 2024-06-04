import { LogoContainer, LogoIcon, LogoText } from "./Logo.styled";

function Logo() {
  return (
    <LogoContainer
      href="/"
      aria-label="Home Page"
      title="Go to Home Page"
      rel="noopener noreferrer"
    >
      <LogoIcon />
      <LogoText>VitLife</LogoText>
    </LogoContainer>
  );
}

export default Logo;
