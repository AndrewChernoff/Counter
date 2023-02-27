import { combineReducers, compose, legacy_createStore as createStore} from 'redux';
import counterReducer from './reducers/counterReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    counter: counterReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers()
    );

export type AppStoreType = ReturnType<typeof rootReducer>

export default store;