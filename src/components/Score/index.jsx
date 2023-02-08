import React from "react";
import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function Score({ score }) {
  const stars = [1, 2, 3, 4, 5];
  function onClick(e) {
    console.log(e.target);
  }
  const elements = stars.map((el, i) => {
    return (
      <span
        key={i}
        role="img"
        aria-label="filled star"
        name={i + 1}
        onClick={onClick}
      >
        {i < Number(score) ? <AiFillStar size="16" /> : <AiOutlineStar />}
      </span>
    );
  });

  return <Container>{elements}</Container>;
}
