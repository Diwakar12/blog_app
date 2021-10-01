import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardItem } from "../Card/CardItem/CardItem";
import react from "../../../assets/react.png";

export function Card({articles}) {
  const { id, title, body } = articles;
  const history = useHistory()

  
  const handleArticlesClick = () => {
    history.push(`/${id}`)
 }


  return (
    <section className="position-relative pt-2">
    <div className="container" data-sticky-container>
    <div class="row">
      <CardItem
        title={title}
        Id={id}
        backgroundImage={react}
        Description={body}
      />
    </div>
    </div>
    </section>
  );
}
