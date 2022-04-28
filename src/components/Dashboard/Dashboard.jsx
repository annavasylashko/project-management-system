import React from "react";

import List from "../List/List";
import { useCardsContext } from "../../contexts/Cards/Cards.context";

import styles from "./Dashboard.module.scss";

const Dashboard = ({ showHeader, sections }) => {
  const { cards } = useCardsContext();

  return (
    <div className={styles["dashboard-content"]}>
      {sections.map((section) => {
        const filteredCards = cards.filter(
          (card) => card.status === section.link.split("/")[1]
        );

        return (
          <div key={section.title}>
            {showHeader && (
              <div className={styles["task-type-section"]}>
                <h2 className={styles["task-type-section-title"]}>
                  {section.title}:
                </h2>
              </div>
            )}
            <List showHeader={showHeader} cards={filteredCards} />
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
