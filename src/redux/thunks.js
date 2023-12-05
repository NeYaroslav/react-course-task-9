import { getFacts } from "../services/factsApi";
import { updateDate, updateFacts } from "./actions";

export const updateFetchedFacts = (numberOfFacts) => async (dispatch) => {
  const abortController = new AbortController();

  const facts = await getFacts({ numberOfFacts, signal: abortController.signal });
  dispatch(updateFacts(facts.data));

  return abortController.abort;
};

export const updateDateConstatntly = () => (dispatch) => {
  const intervalLabel = setInterval(() => {
    dispatch(updateDate(new Date()));
  }, 1000);

  return () => {
    clearInterval(intervalLabel);
  };
};
