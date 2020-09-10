const comicReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DATA': {
      const comicArray = action.comics;
      return [...state, ...comicArray];
    }
    default: return state;
  }
};
export default comicReducer;
