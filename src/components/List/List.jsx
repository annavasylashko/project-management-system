import classNames from "classnames";
import React from "react";

import Card from "../Card/Card";

import styles from "./List.module.scss";

const List = ({ showHeader, cards }) => {
  return (
    <div
      className={classNames(styles["list-container"], {
        [styles["dashboard-list"]]: showHeader,
      })}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          status={card.status}
        />
      ))}
    </div>
  );
};

export default List;
