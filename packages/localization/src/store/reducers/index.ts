import { combineReducers, createStore, compose } from 'redux';
import languageReducer from './languageReducer';
import localizationReducer from './localizationReducers';

const rootReducer = combineReducers({
    language: languageReducer,
    localization: localizationReducer
});

// TypeScript does not know the type of the property. Therefore, you will get the error; Property ‘__REDUX_DEVTOOLS_EXTENSION_COMPOSE__’ does not exist on type ‘Window’.
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>

export default store;
