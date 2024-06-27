import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BalanceRequest = ({route}) => {
const d = route.params

const p= d?.UserData?.Reader_ID
if(p!==null){
SetBb(p)
console.log(p)}
const[bb,SetBb]=useState()
    const[balance,SetBalance]=useState(500)
    const BalanceRequest = async () => {
        // Alert.alert('clickkkk')
        try {
          // Construct the URL with the sProId parameter
          // Replace 'your_value_here' with the actual value
          const response = await fetch(`${global.Url}/api/Reader/SendBalanceRequest?Reader_ID=${bb}||${global.Readerid}&Amount=${balance}`, {
            method: 'PUT',
            
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          if(data==='Subscription updated successfully'){
          Alert.alert('Your Request has been sent Succsesfully!');
        //   SetVisi(false)
          // Handle success, maybe update UI
        } } catch (error) {
          console.error('Error updating summary:', error);
          // Handle error, show error message to user
        }
      };

  return (
    
    <View style={styles.container}>    
        <Text style={styles.title}> Recharge Balance</Text>
            <TextInput placeholder='Enter Amount'
        onChangeText={SetBalance} style={styles.inputContainer}></TextInput>
 <View>
        {/* <TouchableOpacity style={styles.button} onPress={sendproject}> */}
        <TouchableOpacity style={styles.button} onPress={()=>{BalanceRequest()}}>
        <Text style={styles.buttonText}>Send Balance </Text>
        
        </TouchableOpacity></View>

          </View>
  )
}

export default BalanceRequest

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
    proposalContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#1A202C', // White color
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333333', // Dark gray color
    }, text:{
        marginTop:20,alignSelf:'center',color:'yellow',fontSize:30,textDecorationLine:'underline',marginBottom:30
        },
        view1:{ 
        paddingTop:13,backgroundColor:'#333333',borderRadius:50,
        }
        ,
        
        text2:{
         color:'yellow',alignSelf:'center',paddingBottom:10,fontSize:20,fontWeight:'bold'        
        },
        view2:{
        flexDirection:'row'
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
        },
        RowView:{
flexDirection:'row',
borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        },
        RowText:{
          fontSize: 15,
          fontWeight: 'bold',
        },
        button: {
      
          backgroundColor: 'yellow',
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderRadius: 29,
          alignSelf:'center'
        },
        buttonText: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        inputContainer: {
    
          position: 'relative',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
});