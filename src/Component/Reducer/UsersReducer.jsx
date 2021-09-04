const initialState = {
  movies: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIES":
      return { ...state.movies, movies: [...state.movies, action.paylod] };

    default:
      return state;
  }
};
