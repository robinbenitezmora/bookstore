const CHECK_STATUS = 'CHECK_STATUS';
const firstState = [];

function categoriesReducer(state = firstState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
}

const checkStatus = (status) => ({
  type: CHECK_STATUS,
  payload: status,
});

export { categoriesReducer, checkStatus };
