const initialState = {
  filter: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER': {
      return action.format;
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
