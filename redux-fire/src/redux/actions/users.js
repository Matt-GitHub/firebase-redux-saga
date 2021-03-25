export const GET_USERS_REQUESTED = "GET_USERS_REQUESTED";
export const GET_USERS_FAILED = "GET_USERS_FAILED";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";

export const ADD_USER = "ADD_USER";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_FAILED";

export const EDIT_USER = "EDIT_USER";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILED = "EDIT_USER_FAILED";

export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILED = "DELETE_USER_FAILED";

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

export const addUser = payload => ({
  type: ADD_USER,
  payload
});

export const addUserSuccess = payload => ({
  type: ADD_USER_SUCCESS,
  payload
});

export const addUserFailed = payload => ({
  type: ADD_USER_FAILED,
  payload
});

export const editUser = payload => ({
  type: EDIT_USER,
  payload
});

export const editUserSuccess = payload => ({
  type: EDIT_USER_SUCCESS,
  payload
});

export const editUserFailed = payload => ({
  type: EDIT_USER_FAILED,
  payload
});

export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
});

export const deleteUserSuccess = payload => ({
  type: DELETE_USER_SUCCESS,
  payload
});

export const deleteUserFailed = payload => ({
  type: DELETE_USER_FAILED,
  payload
});
