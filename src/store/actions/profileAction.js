import * as types from './types';

export function nameDetails(data) {
    return {
      type: types.nameState,
      payload: data,
    };
  }

  export function LogoutCall() {
    return {
      type: "USER_LOGOUT",
      payload: "",
    };
  }