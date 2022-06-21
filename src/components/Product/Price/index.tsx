import styled from "styled-components";

const EspecificationValue = styled.p`
  font-family: "Franklin Gothic Medium";
  font-size: 1.1em;
  font-weight: bold;
  margin: 0 0 0.5em 0;
`;

const Price = ({ price }: { price: number }) => (
  <EspecificationValue>R$ {price.toFixed(2)}</EspecificationValue>
);

export default Price;
