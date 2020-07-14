import {
    HOME_PAGE_NOTICE_DWONLOAD_SUCCESS
  } from './Types';

  
  import { db } from './FirbaseConfig';

 



export const LoadNotice = () => {
    return (dispatch) => {
  
      db
        .ref('/condominium/noticeBoard')
        .once('value')
        .then((snapshot) => {
          dispatch({ type: HOME_PAGE_NOTICE_DWONLOAD_SUCCESS, data: snapshot.val() });
        })
  
        .catch((error) => {
          actionFail(dispatch, error.message);
        });
    };
  };


  