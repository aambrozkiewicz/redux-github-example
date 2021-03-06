import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const RepoItem = styled.div`
  text-align: left;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default function({ item }) {
  return (
    <RepoItem>
      <h3>
        <a href={item.html_url}>{item.name}</a>
      </h3>
      <p>{item.description}</p>
      <IconText type="star-o" text={item.stargazers_count} />
    </RepoItem>
  );
}
