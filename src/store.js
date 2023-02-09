import { legacy_createStore as createStore } from 'redux';
import rootReducer from "./reducers/index"
import { composeWithDevTools } from 'redux-devtools-extension';


console.log(rootReducer); 
const store = createStore(rootReducer, composeWithDevTools());

export default store;

