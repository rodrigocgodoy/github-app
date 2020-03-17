import { takeLatest, put, call, delay } from 'redux-saga/effects';

import api from '../../services/api';

function apiSearchUser(user) {
  return user !== '' && api.get(`/users/${user}`);
}

function apiSearchRepos(user) {
  return user !== '' && api.get(`/users/${user}/repos`);
}

function* searchGithub(action) {
  try {
    const responseUser = yield call(apiSearchUser, action.payload.user);
    const responseRepos = yield call(apiSearchRepos, action.payload.user);

    yield delay(1000);
    yield put({
      type: 'SUCCESS_SEARCH_GITHUB',
      payload: { dataUser: responseUser.data, DataRepos: responseRepos.data }
    });
  } catch (err) {
    yield put({ type: 'FAILURE_SEARCH_GITHUB' });
  }
}

export default function* root() {
  yield takeLatest('REQUEST_SEARCH_GITHUB', searchGithub);
}
