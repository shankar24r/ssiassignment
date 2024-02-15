import * as types from '../actions/types';

const InitialState = {
    currentName: '',
};

export function profileReducer(state = InitialState, action) {
  switch (action.type) {
    case types.nameState: {
      return {
        ...state,
        currentName: action.payload,
      };
    }
    default:
      return state;
  }
}
