export const AddActions = (movies) => {
  return {
    type: "ADD_MONIES",
    payload: movies,
  };
};

export const AddActions = (favorite) => {
  return {
    type: "ADD_FAVORITE",
    payload: favorite,
  };
};

export const AddActions = (top) => {
  return {
    type: "ADD_TOP",
    payload: top,
  };
};
