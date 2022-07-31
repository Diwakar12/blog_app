import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardItem } from "../Card/CardItem/CardItem";
import react from "../../../assets/react.png";

export function Card({ articles }) {
  const { id, title, body } = articles;  

  return (
    <CardItem
      title={title}
      Id={id}
      backgroundImage={react}
      Description={body}
    />
  );
}
