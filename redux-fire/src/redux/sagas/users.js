import { call, put, takeEvery } from "redux-saga/effects";
import { getUsersSuccess, getUsersFailed } from "../actions/users";
import { userRef } from "../../firebase";

async function getApi() {
  try {
    let userArray = [];
    userRef.once("value", snap => {
      snap.forEach(data => {
        userArray.push(data.val());
      });
    });
    return userArray;
  } catch (err) {
    throw new Error("error fetching data");
  }
}

function* fetchUsers() {
  try {
    const users = yield call(getApi);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailed(err.message));
  }
}

function* userSaga() {
  yield takeEvery("GET_USERS_REQUESTED", fetchUsers);
}

export default userSaga;
