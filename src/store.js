/**
 * Created by s70c3 on 11.02.17.
 */
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
export default store;