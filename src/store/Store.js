import { createStore} from 'redux'
import NoticeReduser from '../Redux/NoticeReduser'

import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'



const store = createStore(NoticeReduser, {}, applyMiddleware(ReduxThunk));



export default store

