import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = props => (
  <StyledList>
    {props.items.map((item, i) => (
      <li key={i}>{props.render(item)}</li>
    ))}
  </StyledList>
);

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;
