
const comicReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_DATA': {
      const comic_array = action.comics;
      return [...state, ...comic_array]
    }
    default: return state;
  }
}
export { comicReducer };