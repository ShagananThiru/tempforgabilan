import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


import Carousel from './Componets/Carosual';
import { dummyData } from './Componets/Data';
import Loading from './Componets/Loading';
import{ LoadNotice }  from './Action/LoadAction';
import { Header } from 'react-native/Libraries/NewAppScreen';




class HomeScreen extends React.Component {
    componentWillMount() {
  
      
  
      //this.props.downalodUserDetails('b9MBL2daylP4Z5mQDz2RhmowyVA2');
      //this.props.downalodUserServices('b9MBL2daylP4Z5mQDz2RhmowyVA2');
  
      this.props.LoadNotice();
      
    }
  
    render() {
      if (!(this.props.noticeData)) {
        return <Loading opacity={1} />;
      } else {
        return (
            <ScrollView style={{ backgroundColor: '#212330' }}>
              <View>
                <View style={styles.buttonView} >
                    <TouchableOpacity style={{width: 280, height: 33, borderRadius: 5, backgroundColor:"#E8871E",}} >
                        <Text style={styles.buttonTitle}> Notice Board </Text>
                    </TouchableOpacity>
                </View>
      
                <View style={{marginTop:15}}>
                  <Carousel data = {Object.values(this.props.noticeData)}/>
                </View>

              </View>
            </ScrollView>
           
            
        );
      }
    }
  }
  
  const mapStateToProps = (state) => {
    const noticeData = state.noticeData;
  
    return {
      noticeData
    };
  };
  
  export default connect(mapStateToProps, {  LoadNotice })(HomeScreen);

const styles = StyleSheet.create({
  itemTitle: {
    textAlign: 'center',
    color: '#B6B9D6',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginTop: 5,
    fontWeight: "bold",
    elevation: 5
    },
    buttonView: {
      flex: 1,
      justifyContent:"flex-end",
      alignItems :'center',
      top:10,
    },
    
   buttonTitle:{
    textAlign: 'center', 
    fontWeight: "bold",
    color:"#212330",
    fontSize: 22,

   }
});