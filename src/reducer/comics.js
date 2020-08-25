const INIT_STATE = {
  comics: [],
  message: 'No comics to be found',
};

const comicReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'FETCH_DATA': {
      const result = action.fetch;
    };
    default: return state;
  }
}
export { comicReducer };
