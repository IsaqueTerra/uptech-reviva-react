import {
  FooterNetworkSocial,
  Icons,
  NetworkSocialListIcons,
  NetworkSocialTitle,
} from "./styles";

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
