import styled from "styled-components";
import theme from "styles/global";

const FooterNetworkSocial = styled.nav`
  grid-area: social;
  justify-self: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    justify-self: center;
  }
`;

const NetworkSocialTitle = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  margin: 0 0 0.5em 0;
`;

const NetworkSocialListIcons = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  width: 80%;

  @media screen and (max-width: ${theme.breackpoints.xl}) {
    width: 80%;
  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    justify-content: space-around;
    width: 100%;
  }
`;

const Icons = styled.img`
  transition: 0.2s all ease-in-out;

  &:hover {
    margin: 0 1em;
    transform: scale(1.1);
  }
`;

const SocialNetwork = () => {
  const linkSocialNetworks = [
    { href: "#", src: "../../icons/logo-facebook.svg", alt: "facebook" },
    { href: "#", src: "../../icons/logo-twitter.svg", alt: "twitter" },
    { href: "#", src: "../../icons/logo-instagram.svg", alt: "instagram" },
    { href: "#", src: "../../icons/logo-youtube.svg", alt: "youtube" },
  ];

  return (
    <FooterNetworkSocial>
      <NetworkSocialTitle>Siga-nos nas redes sociais</NetworkSocialTitle>
      <NetworkSocialListIcons>
        {linkSocialNetworks.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.href}>
                <Icons src={link.src} alt={link.alt} />
              </a>
            </li>
          );
        })}
      </NetworkSocialListIcons>
    </FooterNetworkSocial>
  );
};

export default SocialNetwork;
