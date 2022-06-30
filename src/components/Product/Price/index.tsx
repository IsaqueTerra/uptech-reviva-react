import { SpecificationValue } from "./styles";

const Price = ({ price }: { price: number }) => (
  <SpecificationValue>R$ {price.toFixed(2)}</SpecificationValue>
);

export default Price;
