import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')


const NoticeFullItem = ({ item }) => {
    return (
        <View style={styles.cardView}>
            

            <View style={{flexDirection: "row", top:10}}>
                <View>      
                    <Image style = {styles.ProfImage}
                            source={{ uri: item.url }}/>
                </View>
                <View style={{marginTop:15,}}>
                    <Text style={styles.itemTitle}> {item.title.substring(0, 26)} </Text>
                    <Text style={styles.timeTag}> {item.publishDate} </Text>
                </View>
            </View>

            <View style={styles.textView}>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            

            <View style={{alignItems :'center', marginBottom:30}}>
                    <View style={{width: 280, height: 37, borderRadius:15, backgroundColor:"#E57213",flex: 1, justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{  fontSize: 20,fontStyle:'italic', color:"black"}}>Posted by "{item.adminName}"</Text>
                    </View>
            </View>
                
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        //height: height * 0.8,
        backgroundColor: '#1B1D28',
        marginTop:5,
        margin: 10,
        borderColor:'black',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        
        
    },
    adminView: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems :'flex-end',
        marginRight:10,
        marginBottom:5
     },

    buttonView: {
        flex: 1,
        justifyContent:"flex-end",
        //alignItems :'flex-end',
        marginRight:10,
        bottom:8
     },
     
     button: {
        width: 91,
        height: 20,
        borderRadius:25,
        backgroundColor:"#FFAC30",
     },
    ProfImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom:7,
        margin:10,
        borderColor:'#F8CE3B',
        borderWidth: 2,
    },
    timeTag: {
        color: '#EEE9D9',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        fontWeight: "bold",
        marginLeft:4
        
    },

    textView: {
        position: 'relative',
        marginTop: 10,
        bottom: 10,
        margin: 10,
        marginTop:30,
        left: 5,
    },
    itemTitle: {
        color: '#FFAC30',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        margin:10,
        color: 'white',
        textAlign:'justify',
        fontSize: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        lineHeight: 25,
        //fontWeight: "bold",
    }
})

export default NoticeFullItem