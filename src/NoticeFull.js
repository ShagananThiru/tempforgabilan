import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Platform,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


import NoticeFullItem from './Componets/NoticeFullItem';
import Loading from './Componets/Loading';
import{ LoadNotice }  from './Action/LoadAction';

const { width, height } = Dimensions.get('window')


class NoticeFull extends React.Component {
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
                    <TouchableOpacity style={{width: width, height: 33, borderRadius:0, backgroundColor:"#FDAE38",}} >
                        <Text style={styles.buttonTitle}> Notice Board </Text>
                    </TouchableOpacity>
                </View>
      
                <View style={{marginTop:15}}>
                  <NoticeFullItem item = {this.props.noticeData.ms1}/>
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
  
  export default connect(mapStateToProps, {  LoadNotice })(NoticeFull);

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