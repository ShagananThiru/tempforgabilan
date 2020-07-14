import React from 'react';
import { Dimensions} from 'react-native';
import { Toast } from 'react-native-redux-toast';



import * as theme from '../constant/Theme'



const SCREEN_WIDTH = Dimensions.get('window').width;


const ToastMessage = () => {
    return(
        <Toast
          messageStyle={{ color: 'white' }}
          container={{ backgroundColor: 'black' }}
          messageStyle={{
              
              color: theme.primary_color_1,
              fontSize: 14,
              color: 'white',
              fontWeight: 'bold'
              
          }}
          containerStyle={{
            width: SCREEN_WIDTH - 40,
            height: 45,
            borderRadius: 5,
            marginHorizontal: 0,
            justifyContent: 'center',
            paddingLeft: 20,
            backgroundColor: theme.secondary_color_1,         
            paddingVertical: 0,
            paddingHorizontal: 0,
          }}

          errorStyle={{
            backgroundColor: theme.header_color_1,
          }}
        />
    )
}

export default ToastMessage