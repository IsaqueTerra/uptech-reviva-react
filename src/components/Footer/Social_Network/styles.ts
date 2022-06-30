import styled from "styled-components";
import theme from "styles/global";

export const FooterNetworkSocial = styled.nav`
grid-area: social;
justify-self: center;
margin: 0;
padding: 0;

@media screen and (max-width: ${theme.breakpoints.lg}) {
  justify-self: center;
}
`;

export const NetworkSocialTitle = styled.p`
font-size: 1.8em;
font-weight: bold;
margin: 0 0 0.5em 0;
`;

export const NetworkSocialListIcons = styled.ul`
align-items: center;
display: flex;
justify-content: space-between;
list-style: none;
padding: 0;
width: 80%;

@media screen and (max-width: ${theme.breakpoints.xl}) {
  width: 80%;
}

@media screen and (max-width: ${theme.breakpoints.lg}) {
  justify-content: space-around;
  width: 100%;
}
`;

export const Icons = styled.img`
transition: 0.2s all ease-in-out;

&:hover {
  margin: 0 1em;
  transform: scale(1.1);
}
`;
