import { all } from 'redux-saga/effects';
import UsersSagas from './users-saga';

export default function* rootSaga(){
    yield all([
        ...UsersSagas
    ])
}