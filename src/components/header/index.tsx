import React from "react";
import HeaderStyles, {
  Logo,
  NavButtonsContainer,
  ContactUsButton,
  NavButton,
} from "./styles";
import Link from "../Link";
import useResponsive from "../../helpers/useMediaQuery";
import HamburgerMenu from "./HamburgerMenu";

const Header: React.FC = () => {
  const { sm } = useResponsive();
  const data = [
    { text: "Organizations", path: "/volunteers" },
    { text: "Volunteers", path: "/volunteers" },
    { text: "Team", path: "/volunteers" },
    { text: "Blog", path: "/volunteers" },
  ];

  return (
    <HeaderStyles>
      <Link to="/">
        <Logo />
      </Link>
      {sm ? (
        <HamburgerMenu data={data} />
      ) : (
        <NavButtonsContainer>
          {data.map(({ path, text }, index) => (
            <NavButton href={path} key={`nav-button-${index}`}>
              {text}
            </NavButton>
          ))}
          <Link to="/contact">
            <ContactUsButton>Contact Us</ContactUsButton>
          </Link>
        </NavButtonsContainer>
      )}
    </HeaderStyles>
  );
};

export default Header;
