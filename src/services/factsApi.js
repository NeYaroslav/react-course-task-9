export const getFacts = (n = 10) => {
  return fetch(`https://meowfacts.herokuapp.com/?count=${n}`).then((facts) => facts.json());
};
