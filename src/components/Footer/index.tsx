import Logo from "../Logo";
import ContactList from "./Contact_List";
import MenuFooter from "./Menu";
import SignUp from "./SignUpNewsletter";
import SocialNetwork from "./Social_Network";
import styled from "styled-components";
import theme from "styles/global";

const FooterStyle = styled.footer`
  background-color: ${theme.colors.primary};
  box-sizing: border-box;
  color: ${theme.colorsNegative.primary};
  display: grid;
  grid-template-areas:
    "logo logo logo logo"
    "menu social contact newsletter";
  grid-template-columns: 21% 21% 21% 37%;
  grid-template-rows: 30% 70%;
  margin: 7.2em auto auto auto;
  max-width: ${theme.breackpoints.xxl};
  padding: 4.2em 4.2em;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    gap: 2em;
    grid-template-areas:
      "logo logo"
      "menu social"
      "contact newsletter";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 8em 1fr 1fr;
    padding: 1em;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    grid-template-areas:
      "logo"
      "menu"
      "contact"
      "newsletter"
      "social";
    grid-template-columns: 1fr;
    grid-template-rows: 8em;
  }
`;

const BaseFooter = styled.section`
  background-color: ${theme.colors.primary};
`;

const Footer = () => {
  return (
    <BaseFooter>
      <FooterStyle>
        <Logo />
        <MenuFooter />
        <SocialNetwork />
        <ContactList />
        <SignUp />
      </FooterStyle>
    </BaseFooter>
  );
};

export default Footer;
