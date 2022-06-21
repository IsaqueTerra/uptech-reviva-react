import styled from "styled-components";
import theme from "styles/global";

const FooterContacts = styled.ul`
  grid-area: contact;
  justify-self: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 90%;
  word-wrap: break-word;

  &::first-line {
    font-weight: bold;
  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    text-align: center;
    width: 100%;
  }
`;

const ContactsItem = styled.li`
  font-size: 1.8em;
  margin: 0 0 0.7em 0;
`;

const ContactsLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

const ContactsLinkWhats = styled(ContactsLink)`
  &::after {
    background: center/100% url(../../icons/logo-whats.svg);
    content: "";
    display: inline-block;
    height: 0.8em;
    margin: 0 0.2em;
    width: 0.8em;
  }
`;

const ContactsLinkTel = styled(ContactsLink)`
  &::after {
    background: center/100% url(../../icons/logo-tel.svg);
    content: "";
    display: inline-block;
    height: 0.8em;
    margin: 0 0.2em;
    width: 0.8em;
  }
`;

const ContactList = () => {
  return (
    <FooterContacts>
      <ContactsItem>Entre em contato</ContactsItem>
      <ContactsItem>
        <ContactsLink href="#">Contato</ContactsLink>
      </ContactsItem>
      <ContactsItem>
        <ContactsLink href="mailto:reviva@rchlo.com.br?">
          reviva@rchlo.com.br
        </ContactsLink>
      </ContactsItem>
      <ContactsItem>
        <ContactsLinkWhats href="https://web.whatsapp.com/send?phone=#############">
          WhatsApp
        </ContactsLinkWhats>
      </ContactsItem>
      <ContactsItem>
        <ContactsLinkTel href="tel:+551121233321">11 2123-3321</ContactsLinkTel>
      </ContactsItem>
    </FooterContacts>
  );
};

export default ContactList;
