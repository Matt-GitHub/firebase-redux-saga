import * as type from "../actions/users";
import { stat } from "fs";

const initialState = {
  users: [],
  loading: false,
  error: null,
  editing: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
    case type.ADD_USER:
    case type.EDIT_USER:
    case type.DELETE_USER:
      return {
        ...state,
        loading: true
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case type.GET_USERS_FAILED:
    case type.ADD_USER_FAILED:
    case type.EDIT_USER_FAILED:
    case type.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case type.ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload]
      };
    case type.EDIT_USER_SUCCESS: {
      const updatedUser = state.users.map(user => {
        if (user.uid === action.payload.uid) {
          return {
            ...action.payload
          };
        }
        return user;
      });
      return {
        ...state,
        loading: false,
        users: updatedUser
      };
    }
    case type.DELETE_USER_SUCCESS:
      const userList = state.users.filter(
        user => user.uid !== action.payload.uid
      );
      return {
        ...state,
        loading: false,
        users: userList
      };
    default:
      return state;
  }
}
