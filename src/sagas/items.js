import { put, takeEvery, all, delay} from 'redux-saga/effects';
import { 
    REQUESTED, 
    SUCCEEDED, 
    FAILED,
    GET_ITEMS
} from '../constants';

import data from '../data.json';

function* getItems(action) {
    try {
        yield delay(1000); //simulate server call latency
        const actions = data.actions;
        const items = data.resources.map(item => {
            item.actions = item.actionIds.map(id => (
                actions.find(el => el.id === id)
            ));
            return item;
        });
        yield put({type: GET_ITEMS + SUCCEEDED, items});
    } catch (e) {
        yield put({type: GET_ITEMS + FAILED, message: e.message});
    }
}

function* commentsSaga() {
    yield all ([
        takeEvery(GET_ITEMS + REQUESTED, getItems),
    ]);
}

export default commentsSaga;