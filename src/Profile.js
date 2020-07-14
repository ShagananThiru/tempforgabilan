import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text,Dimensions } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9
import { ScrollView } from 'react-native-gesture-handler';



const { width, height } = Dimensions.get('window')

const Form = t.form.Form;

const User = t.struct({
  FirstName: t.String,
  LastName: t.String, //t.maybe(t.String),
  email: t.String,
  Address: t.String,
  PostCode: t.String,
  Country: t.String,
  MobilePhone: t.String,
  Occupation: t.String,
  Field: t.String,
  OrganizationName: t.String,
  WorkAddress: t.String,
  terms: t.Boolean
  
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 15,
      
    },
    error: {
      marginBottom: 15,
    },
  },
  controlLabel: {
    normal: {
      
      color: 'white',
      fontSize: 16,
      marginBottom: 10,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 10,
      fontWeight: '600'
    },
    
  },
  
  textbox: {

    // the style applied without errors
    normal: {
      
      
      color: 'white',
      fontSize: 20,
      height: 50,
      padding: 7,
      borderRadius: 4,
      borderColor: '#cccccc', // <= relevant style here
      borderWidth: 0,
      marginBottom: 7,
      backgroundColor: "#58585F",
      //opacity: 0.8,
    },
  
    // the style applied when a validation error occures
    error: {
      color: 'white',
      fontSize: 20,
      height: 50,
      padding: 7,
      borderRadius: 4,
      borderColor: '#a94442', // <= relevant style here
      borderWidth: 1,
      marginBottom: 7,
      backgroundColor: "#58585F",


    }
  }
  
}

const options = {
  
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
    FirstName:{
      placeholder : 'First Name',
    },
    LastName:{
      placeholder : 'Last Name',
    },
  },
  auto: 'placeholders',
  stylesheet: formStyles,
  
};

export default class App extends Component {
  handleSubmit = () => {
    
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#212330' }}>
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit} >
              <Text style={styles.buttonText}>Update!</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    //backgroundColor: '#ffffff',
  },
  button:{
    width: width*0.8,
    height: 40,
    borderRadius:25,
    backgroundColor:"#FFAC30",
   },
   buttonView: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems :'center',
    top:10,
  },
  buttonText:{
    flex: 1,
    textAlign: 'center', 
    fontWeight: "bold",
    color:"#212330",
    fontSize: 22,
    textAlignVertical: "center"

   }
});
