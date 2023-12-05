/**
 *
 * @param {{ numberOfFacts: number, signal: AbortSignal }}
 * @returns
 */

export const getFacts = ({ numberOfFacts, signal }) => {
  return fetch(`https://meowfacts.herokuapp.com/?count=${numberOfFacts ?? 10}`, { signal }).then((facts) =>
    facts.json()
  );
};
