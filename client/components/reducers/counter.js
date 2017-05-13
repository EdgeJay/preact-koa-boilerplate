const initial = {
  counterValue: 0,
};

const actions = {
  INC_COUNTER: ({ counterValue, ...state }) => ({
    counterValue: counterValue + 1,
    ...state,
  }),
};

export default (state = initial, action) => (
  actions && actions[action.type] ? actions[action.type](state) : state
);
