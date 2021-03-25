import { all } from "redux-saga/effects";
import {
  userSaga,
  addUserWatcher,
  editUserWatcher,
  deleteUserWatcher
} from "./users";

export default function* rootSaga() {
  yield all([
    userSaga(),
    addUserWatcher(),
    editUserWatcher(),
    deleteUserWatcher()
  ]);
}
