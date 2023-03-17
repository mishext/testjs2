import React from "react";
import "./index.css";

export default function Card(props) {
  const { cardNumber, cardButton, cardContent, statusNumber } = props;
  return (
    <div className="stylesComponent">
      <p className={cardNumber}>{statusNumber}</p>
      <button className={cardButton}>{cardContent}</button>
    </div>
  );
}
