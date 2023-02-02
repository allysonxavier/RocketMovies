import React from "react";
import { Container } from "./styles";

export function Score({ score }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < score) {
      stars.push(
        <span key={i} role="img" aria-label="filled star">
          ⭐️
        </span>
      );
    } else {
      stars.push(
        <span key={i} role="img" aria-label="empty star">
          ☆
        </span>
      );
    }
  }
  return <Container>{stars}</Container>;
}
