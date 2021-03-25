import { call, put, takeEvery, takeLeading } from "redux-saga/effects";
import {
  getUsersSuccess,
  getUsersFailed,
  GET_USERS_REQUESTED,
  ADD_USER,
  addUserSuccess,
  addUserFailed,
  EDIT_USER,
  editUserSuccess,
  editUserFailed,
  DELETE_USER,
  deleteUserFailed,
  deleteUserSuccess
} from "../actions/users";
import { userRef, dbRef } from "../../firebase";

async function getUsers() {
  try {
    let userData = [];
    await userRef.once("value", snap => {
      snap.forEach(data => {
        userData.push(data.val());
      });
    });
    return userData;
  } catch (err) {
    throw new Error("error fetching data");
  }
}

function* fetchUsers() {
  try {
    const users = yield call(getUsers);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailed(err.message));
  }
}

export function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
}

async function addNewUser(content) {
  try {
    let insertValue = {};
    insertValue[content.uid] = content;
    await userRef.update(insertValue);
    return insertValue;
  } catch (err) {
    throw new Error("error adding user");
  }
}

function* addUserSaga(action) {
  try {
    const data = yield call(addNewUser, action.payload);
    yield console.log(
      "action",
      action,
      "payload",
      action.payload,
      "data",
      data
    );
    yield put(addUserSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addUserFailed(error.message));
  }
}

export function* addUserWatcher() {
  yield takeLeading(ADD_USER, addUserSaga);
}

async function editUser(content) {
  try {
    dbRef.child(`users/${content.uid}`).set(content);
  } catch (err) {
    throw new Error("error adding user");
  }
}

function* editUserSaga(action) {
  try {
    const data = yield call(editUser, action.payload);
    yield put(editUserSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(editUserFailed(error.message));
  }
}

export function* editUserWatcher() {
  yield takeLeading(EDIT_USER, editUserSaga);
}

async function deleteUser(content) {
  try {
    dbRef.child(`users/${content.uid}`).remove();
  } catch (err) {
    throw new Error("error deleting user");
  }
}

function* deleteUserSaga(action) {
  try {
    const data = yield call(deleteUser, action.payload);
    yield put(deleteUserSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(deleteUserFailed(error.message));
  }
}

export function* deleteUserWatcher() {
  yield takeLeading(DELETE_USER, deleteUserSaga);
}
