const CHECK_STATUS = 'CHECK_STATUS';
const firstState = [];

export default function categoriesReducer(state = firstState, action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

const checkStatus = (status) => ({
  type: CHECK_STATUS,
  payload: status,
});

export { checkStatus };
