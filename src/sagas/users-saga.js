import { call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/users-actions';
import * as api from '../api/users';

function* getUsers(){
    try {
        const result = yield call(api.getUsers);
        // console.log(result);
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    } catch (error) {
        console.log(error);
    }
}


function* watchGetUsersRequest() {
    yield takeLatest(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
]

export default usersSagas;