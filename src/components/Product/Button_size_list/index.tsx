import { Fragment } from "react";
import { ProductSize, SizeInput, SizeLabel } from "./styles";

const Sizes = ({ id, listSizes }: { id: number; listSizes: string[] }) => {
  return (
    <ProductSize>
      {listSizes.map((size: string, index) => (
        <Fragment key={listSizes[index]}>
          <SizeInput
            type="radio"
            id={`size-${size}-` + id}
            name={`size_model-` + id}
          />
          <SizeLabel htmlFor={`size-${size}-` + id}>{size}</SizeLabel>
        </Fragment>
      ))}
    </ProductSize>
  );
};

export default Sizes;
