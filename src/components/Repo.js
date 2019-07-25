import React from "react";
import styled from "styled-components";

const RepoItem = styled.div`
  text-align: left;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export default function({ item }) {
  return (
    <RepoItem>
      <h3>
        <a href={item.html_url}>{item.name}</a>
      </h3>
      <p>{item.description}</p>
    </RepoItem>
  );
}
