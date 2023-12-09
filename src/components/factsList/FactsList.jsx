import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FactsListItem } from "../factsListItem/FactsListItem";
import { factsSelector } from "../../redux/selectors";
import { updateFetchedFacts } from "../../redux/thunks";
import { getId } from "../../utils/helpers";
import classes from "./factsList.module.css";

export const FactsList = ({ facts, updateFacts }) => {
  useEffect(updateFacts, [updateFacts]);

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

const mapStateToProps = (state) => ({
  facts: factsSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  updateFacts: () => {
    const abortController = new AbortController();
    dispatch(updateFetchedFacts(10, abortController.signal));
    return () => abortController.abort();
  },
});
export const ConnectedFactsList = connect(mapStateToProps, mapDispatchToProps)(FactsList);
