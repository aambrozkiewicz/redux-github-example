import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Spinner = styled(Spin)`
  display: block;
  margin: 2rem;
`;

const List = props =>
  props.loading ? (
    <Spinner indicator={antIcon} />
  ) : (
    <StyledList>
      {props.items.map((item, i) => (
        <li key={i}>{props.render(item)}</li>
      ))}
    </StyledList>
  );

List.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default List;
