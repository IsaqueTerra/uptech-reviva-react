import { Fragment } from "react";
import styled from "styled-components";

const ProductSize = styled.div`
  display: flex;
  font-size: 1.8em;
  font-weight: 800;
  grid-area: 2 / 1 / 3 / 3;
  justify-self: flex-end;
  margin: 0 0.5em 0 0;
  padding: 0;
  text-align: center;
  z-index: 999;
`;

const SizeInput = styled.input`
  display: none;

  &:checked + .size_label {
    background-color: black;
    border: solid 1px $color-details;
    color: $primary-color-negative;
    font-weight: bold;
  }
`;

const SizeLabel = styled.label`
  background-color: #ffffffad;
  border-radius: 0.3em;
  border: solid 1px;
  box-sizing: border-box;
  display: inline-block;
  height: 1.5em;
  margin: 0.2em;
  padding-top: 0.1em;
  text-align: center;
  width: 1.5em;

  &:hover {
    background-color: #e6e6e6;
    box-shadow: 1px 1px 2px 1px #00000044;
    cursor: pointer;
  }
`;

const Sizes = ({
  id,
  listSizes,
  style,
}: {
  id: number;
  listSizes: string[];
  style?: React.CSSProperties;
}) => {
  return (
    <ProductSize style={style}>
      {listSizes.map((size: string, index) => (
        <Fragment key={listSizes[index]}>
          <SizeInput
            type="radio"
            id={`size-${size}-` + id}
            name={`size_model-` + id}
          />
          <SizeLabel
            htmlFor={`size-${size}-` + id}
          >
            {size}
          </SizeLabel>
        </Fragment>
      ))}
    </ProductSize>
  );
};

export default Sizes;
