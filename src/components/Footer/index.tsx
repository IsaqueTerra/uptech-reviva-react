import Logo from "../Logo";
import SocialNetwork from "./Social_Network";
import { linksMenuNavigation, listContacts } from "./data";
import SignUpNewsletter from "./SignUpNewsletter";
import ListLink from "./Contact_List";
import { BaseFooter, FooterStyle, WrapperLogoFooter } from "./styles";

const Footer = () => {
  return (
    <BaseFooter>
      <FooterStyle>
        <WrapperLogoFooter>
          <Logo />
        </WrapperLogoFooter>
        <ListLink title="Menu" listLink={linksMenuNavigation} gridArea="menu" />
        <SocialNetwork />
        <ListLink title="Entre em contato" listLink={listContacts} />
        <SignUpNewsletter />
      </FooterStyle>
    </BaseFooter>
  );
};

export default Footer;
