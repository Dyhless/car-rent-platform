import { LogoLink, LogoIcon, LogoText } from "../Logo/Logo.styled";

const Logo = () => {
  return (
    <LogoLink to="*">
      <LogoIcon />
      <LogoText>Rental&nbsp;Car</LogoText>
    </LogoLink>
  );
};

export default Logo;
