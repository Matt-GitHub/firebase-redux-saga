export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";
export const GET_USERS_FAILED = "GET_USERS_FAILED";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const getUsers = payload => ({
  type: GET_USERS_REQUESTED,
  payload: payload
});

export const getUsersSuccess = payload => ({
  type: GET_USERS_SUCCESS,
  payload
});

export const getUsersFailed = payload => ({
  type: GET_USERS_FAILED,
  payload
});
