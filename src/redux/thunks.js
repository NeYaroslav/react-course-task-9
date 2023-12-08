import { getFacts } from "../services/factsApi";
import { updateFacts } from "./actions";

export const updateFetchedFacts = (numberOfFacts, signal) => async (dispatch) => {
  try {
    const facts = await getFacts({ numberOfFacts, signal });
    dispatch(updateFacts(facts.data));
  } catch (error) {
    console.log(error);
  }
};
