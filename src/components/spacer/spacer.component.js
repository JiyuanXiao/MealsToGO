import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVarinat = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) =>
  `${positionVarinat[position]}:${theme.space[sizeVariant[size]]}`;

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
