// import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'

// const SendSummary = ({navigation,route}) => {
// const data =route.params
// console.log(data)
// console.log('senddd proposal',data)
// const[summary,setSummary]=useState('')
// const object ={
//   SentProposal_ID: data.SentProposal_ID,
//   Writer_ID : data.Writer_ID,
//   Movie_ID : data.Movie_ID,
//   Summary : summary

// }
// const fetchData = async () => {
// try{
//   const responce=await fetch(global.Url + "/api/Writer/SentProject",{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json', // specify that the content is JSON
//   },
//   body: JSON.stringify(object), // convert object to JSON string
// })
// const data=await responce.json()
//   console.log(data)
// }catch(e){
// console.log(e.message)
// }
// }
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>SendSummary</Text>

//       <TextInput placeholder='Write summary' onChangeText={setSummary}/>
//       <TextInput placeholder='Enter Email' style={styles.input}></TextInput>
//       <TextInput placeholder='Writer Name' style={styles.input}></TextInput>
//       <TextInput placeholder='Movie Name' style={styles.input}></TextInput>
//       <TextInput placeholder='Director Name' style={styles.input}></TextInput>
//       <Text>imag</Text>
//       <View><TouchableOpacity style={styles.button} onPress={()=>fetchData}>
//         <Text style={styles.buttonText}>Send</Text>
//         </TouchableOpacity></View>
//     </View>
    
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//   flex: 1,
//   backgroundColor: '#2D3748',
//   paddingHorizontal: 20,
//   paddingTop: 30,

// },
// title: {
//   fontSize: 30,
//   color: 'yellow',
//   alignSelf: 'center',
//   marginBottom: 20,
//   textDecorationLine: 'underline',
// },
// input: {
//   height: 40,
//   marginVertical: 8,
//   paddingHorizontal: 10,
//   borderWidth: 1,
//   borderRadius: 5,
//   backgroundColor: 'grey',
// },
// button: {
//   marginBottom:150,
//   backgroundColor: 'yellow',
//   paddingVertical: 12,
//   paddingHorizontal: 50,
//   borderRadius: 9,
//   alignSelf:'center'

// },
// buttonText: {
//   color: 'black',
//   fontSize: 16,
//   fontWeight: 'bold',
//   textAlign: 'center',
// },

// })

// export default SendSummary


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SendSummary = () => {
  return (
    <View>
      <Text>SendSummary</Text>
    </View>
  )
}

export default SendSummary

const styles = StyleSheet.create({})