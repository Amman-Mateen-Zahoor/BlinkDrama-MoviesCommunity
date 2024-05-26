import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Subscription = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title1}>Subscription</Text>

      <View style={styles.view1}>
      <Text style={styles.title2}>Choose your Subscription Plan</Text>
    
      </View>
      <View style={{paddingTop:10}}></View>

      <View style={styles.view1}>
      <Text style={styles.title1}>Free Version</Text>
      <Text style={styles.text1}>1 Free Movie/Drama Daily </Text>
      <View>
       
       <TouchableOpacity style={styles.button} >
       <Text style={styles.buttonText}>Subscribe</Text>
       </TouchableOpacity></View>
    </View>
    <View style={{paddingTop:10}}></View>
    <View style={styles.view1}>
      <Text style={styles.title1}>Monthly Subscription</Text>
      <Text style={styles.text1}>All Movies/Dramas Daily </Text>
      <View>
       
       <TouchableOpacity style={styles.button} >
       <Text style={styles.buttonText}>Subscribe</Text>
       </TouchableOpacity></View>
    </View>




    </View>
    
  )
}

export default Subscription

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    backgroundColor: '#1A202C',
    paddingVertical: 20,
    paddingHorizontal: 10,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF', // White color
},
title1: {
    fontSize: 24,
    fontWeight: 'bold',
    
    textAlign: 'center',
    color: '#FFFFFF', // White color
},

title2: {
    fontSize: 20,
    fontWeight: 'bold',
    
    textAlign: 'center',
    color: '#FFFFFF', // White color
},

proposalContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF', // White color
},
text1: {
    fontSize: 16,
    marginBottom: 5,
    color: 'yellow', // Dark gray color
}, text:{
    marginTop:20,alignSelf:'center',color:'yellow',fontSize:30,textDecorationLine:'underline',marginBottom:30
    },
    view1:{ 
    paddingTop:13,backgroundColor:'#333333',borderRadius:10,paddingBottom:30, borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    }
    ,
    
    text2:{
     color:'yellow',alignSelf:'center',paddingBottom:10,fontSize:20,fontWeight:'bold'        
    },
    view2:{
    flexDirection:'row'
    },
    button: {
    
        backgroundColor: 'yellow',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 9,
        alignSelf:'center'
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    image: {
    width: 80,
    height: 120,
    borderRadius: 10, // example border radius
    resizeMode: 'cover', // example resizeMode
    },
    textContent:{
    paddingStart:10,
    fontSize:20
    }})
