import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import userData from "./modules/UserData";
import rootReducer from "./modules";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
)

export default store;