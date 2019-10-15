import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import reducer from '../reducers';

const persistedReducer = persistReducer({
    key: 'root',
    storage
}, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)

export {
    store,
    persistor
}
