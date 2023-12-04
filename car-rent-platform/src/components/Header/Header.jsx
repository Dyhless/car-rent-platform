import { HeaderWrap, Link, List } from "./Header.styled";
import LogoHeader from "./LogoHeader";

const Header = () => {
  return (
    <HeaderWrap>
      <LogoHeader />
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="catalog">Catalog</Link>
        </li>
        <li>
          <Link to="favorites">Favorites</Link>
        </li>
      </List>
    </HeaderWrap>
  );
};

export default Header;
