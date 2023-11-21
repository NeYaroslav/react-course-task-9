import React, { useEffect, useState } from "react";
import { getFacts } from "../../services/factsApi";
import { FactsListItem } from "../factsListItem/FactsListItem";
import classes from "./factsList.module.css";
import { getId } from "../../utils/helpers";

export const FactsList = () => {
  const [facts, setFacts] = useState([]);

  const updateFacts = () => {
    getFacts().then(({ data: facts }) => setFacts(facts));
  };

  useEffect(() => {
    updateFacts();
  }, []);

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {facts.map((fact) => (
          <FactsListItem key={getId("facts-list-item")}>{fact}</FactsListItem>
        ))}
      </ul>
      <button
        className={classes.button}
        onClick={updateFacts}>
        Get new facts
      </button>
    </div>
  );
};
