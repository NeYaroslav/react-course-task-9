export const actionsTypes = {
  updateDate: "update-date",
  updateFacts: "update-facts",
};

/**
 * @param {Date} payload
 */
export const updateDate = (payload) => ({
  type: actionsTypes.updateDate,
  payload,
});

/**
 * @param {string[]} payload
 */
export const updateFacts = (payload) => ({
  type: actionsTypes.updateFacts,
  payload,
});
