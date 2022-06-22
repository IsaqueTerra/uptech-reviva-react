import styled from "styled-components";
import theme from "styles/global";

const EspecificationValue = styled.p`
  font-family: "Franklin Gothic Medium";
  font-size: 1.1em;
  font-weight: bold;
  margin: 0 0 0.5em 0;

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    font-size: 1em;
  }
`;

const Price = ({ price }: { price: number }) => (
  <EspecificationValue>R$ {price.toFixed(2)}</EspecificationValue>
);

export default Price;
