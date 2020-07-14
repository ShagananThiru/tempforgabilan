import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get('window')


const CarouselItem = ({ item }) => {
    return (
        <View style={styles.cardView}>

            <View style={{flexDirection: "row"}}>
                <View>      
                    <Image style = {styles.ProfImage}
                            source={{ uri: item.url }}/>
                </View>
                <View style={{marginTop:15}}>
                    <Text style={styles.itemTitle}> {item.title.substring(0, 26)} </Text>
                    <Text style={styles.timeTag}> {item.publishDate} </Text>
                </View>
            </View>

            <View style={styles.textView}>
                <Text numberOfLines={4} style={styles.itemDescription}>{item.description}</Text>
            </View>

            <View style={{flexDirection: "row"}}>
                 
                <Text style={{bottom:10, left:30, fontSize: 14,fontStyle:'italic', color:"white"}}>"{item.adminName}"</Text>
                
                <View style={styles.buttonView} >
                    <TouchableOpacity style={styles.button} >
                        <Text style={{textAlign: 'center', fontStyle:'italic', color:"#212330"}}>
                            Read More..
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height * 0.28,
        backgroundColor: '#021825',
        marginTop:5,
        margin: 10,
        borderColor:'#F8CE3B',
        borderWidth: 1,
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
        //alignItems :'flex-end',
        marginRight:10,
        marginBottom:5
     },

    buttonView: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems :'flex-end',
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
        marginTop: 5,
        bottom: 10,
        margin: 10,
        marginBottom:0,
        marginLeft: 15,
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
        color: 'white',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        lineHeight: 27,
        fontWeight: "bold",
    }
})

export default CarouselItem