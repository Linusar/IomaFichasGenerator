import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  left: ${props => (props.left ? props.left : 1)}px;
  top: ${props => (props.top ? props.top : 1)}px;
`;

const Span = styled.span`
  font-family: Arial, serif;
  font-size: ${props => (props.size ? props.size : 15)}px;
  color: ${props => (props.color ? props.color : "Black")};
  font-weight: ${props => (props.fontweight ? props.fontweight : 700)};
  font-style: normal;
  text-decoration: none;
`;

const Row = ({ children, size, left, top, color, fontweight }) => {
  return (
    <Div left={left} top={top}>
      <Span size={size} color={color} fontweight={fontweight}>
        {children}
      </Span>
    </Div>
  );
};

export default Row;
