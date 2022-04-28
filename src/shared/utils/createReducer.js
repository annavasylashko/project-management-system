/**
 * Use this function to create reducer with initialState and action
 * filtering functionality. Also you can use it to combine simple reducer
 * functions into one.
 *
 * @param initialState
 * An initial state that will be used if undefined passed as a state
 *
 * @param actions
 * A list of actions that this reducer will handle. No other actions will reach
 * the reducer logic
 *
 * @returns
 * A function that will receive actual reducer as a parameter.
 *
 * @example
 * To create a simple reducer:
 * js
 * const initialState = { location: undefined, children: [] };
 *
 * export default createReducer(initialState, routingActionTypes.UPDATE_PAIRWISE)(
 *   (state, action) => ({
 *     ...state,
 *     ...action.payload,
 *   }),
 * );
 *
 *
 * To create a combined reducer:
 * js
 * import config from './config';
 * import user from './user';
 * import createReducer from '../../api/createReducer';
 *
 * export default createReducer()({
 *   user,
 *   config,
 * });
 *
 */
const createReducer = (initialState, actions) => (reducer) => {
  // firstly store info about what we have received: reducer function or object
  // with reducers
  const reducerType = typeof reducer;

  // create utility variables in order to get actions and initial state
  let combinedInitialState = {};
  let combinedActionsSet = new Set();

  if (reducerType === "function") {
    // developer can pass one single action or an array of actions that
    // this reducer is interested in
    if (actions instanceof Array) {
      combinedActionsSet = new Set(actions);
    } else {
      combinedActionsSet.add(actions);
    }

    combinedInitialState = initialState;
  } else if (reducerType === "object") {
    const combinedActionsList = [];

    // 1) filter undefined actions in a combined reducer object
    // 2) get actions list and initial state from object that stores reducers
    Object.entries(reducer)
      .filter(([, composedReducer]) => composedReducer.actions !== undefined)
      .forEach(([key, composedReducer]) => {
        combinedActionsList.push(...composedReducer.actions);
        combinedInitialState[key] = composedReducer.initialState;
      });

    combinedActionsSet = new Set(combinedActionsList);
  }

  // finally wrap reducer in proxy function that will filter out all unnecessary
  // actions
  const reducerProxy = (state = combinedInitialState, action) => {
    if (combinedActionsSet.size !== 0 && !combinedActionsSet.has(action.type)) {
      return state;
    }

    if (reducerType === "object") {
      return Object.keys(reducer).reduce((acc, key) => {
        acc[key] = reducer[key](state[key], action);

        return acc;
      }, {});
    }

    if (reducerType === "function") {
      return reducer(state, action);
    }

    // TODO: maybe throw an error here? If programmer passed as a reducer
    // parameter a value with an unsupported type
    return state;
  };

  // and store info about actions and initialState of this particular reducer
  // for correct composition
  reducerProxy.actions = combinedActionsSet;
  reducerProxy.initialState = combinedInitialState;

  return reducerProxy;
};

export default createReducer;
