import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Dimensions,TouchableOpacity,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


import Carousel from './Componets/Carosual';
import Loading from './Componets/Loading';
import{ LoadNotice }  from './Action/LoadAction';
import CarouselItem from './Componets/CarouselItem'


const { width, height } = Dimensions.get('window')


class NoticeScreen extends React.Component {
  UNSAFE_componentWillMount() {
  
      
  
      //this.props.downalodUserDetails('b9MBL2daylP4Z5mQDz2RhmowyVA2');
      //this.props.downalodUserServices('b9MBL2daylP4Z5mQDz2RhmowyVA2');
  
      this.props.LoadNotice();
      
    }
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <CarouselItem item={item} />
      )
      
  
    render() {
      if (!(this.props.noticeData)) {
        return <Loading opacity={1} />;
      } else {
        return (
            <ScrollView style={{ backgroundColor: '#212330' }}>
              <View>
                <View style={styles.buttonView} >
                    <TouchableOpacity style={{width: width, height: 40, backgroundColor:"#E8871E",}} >
                        <Text style={styles.buttonTitle}> Notice Board </Text>
                    </TouchableOpacity>
                </View>
      
                <View style={{marginTop:15}}>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={Object.values(this.props.noticeData)}
                        renderItem={this.renderItem}
                        />                  
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
  
  export default connect(mapStateToProps, {  LoadNotice })(NoticeScreen);

const styles = StyleSheet.create({
  itemTitle: {
    textAlign: 'center',
    color: '#B6B9D6',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginTop: 10,
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