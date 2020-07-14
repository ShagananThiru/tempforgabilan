import {
    HOME_PAGE_NOTICE_DWONLOAD_SUCCESS
  } from '../Action/Types';
  
  const INITIAL_STATE = {
    noticeData: null
  };


  
  const NoticeReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
          
      case HOME_PAGE_NOTICE_DWONLOAD_SUCCESS:
        return { ...state, noticeData: action.data, loading: false };
  
      default:
        return state;
    }
  };
  
  export default NoticeReduser;
  
  /*
  
  
  const userReducer = (state = intialState, action) =>{
      switch(action.type){
          case ADD_USER_ID:
              return{
                  ...state,
                  user: {
                    ...state.user,
                    userId: action.data
                  }
                };
          default:
              return state
      }
  }
  
  export default userReducer
  */
  