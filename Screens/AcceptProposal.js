import { StyleSheet, Text, TextInput, View,TouchableOpacity,Pressable } from 'react-native'
import React, { useState ,useEffect } from 'react'
import SendSummary from './SendSummary'
const AcceptProposal = ( {navigation, route } ) => {
    const[SentPropossal,setSentPropossal]=useState({})
    const[Summary,setSummary]=useState('') 
    useEffect(()=>{
        const data= route.params.proposal;
          console.log('hiiiiii',data)
          setSentPropossal(data)
          global.SentProposalData=data.SentProposal_ID
      console.log('SentProposal_ID',`${global.SentProposalData}`)
      global.Movie_ID=data.Movie_ID
      console.log('Movie_ID',`${global.Movie_ID}`)
      global.Writer_ID=data.Writer_ID
      console.log('Writer_ID',`${global.Writer_ID}`)
        
       
      },[])
//     const sendproject=async()=>{
//       const sendprojectData=
//       {SentProposal_ID:SentPropossal.SentProposal_ID,
//       Movie_ID:SentPropossal.Movie_ID,
//       Writer_ID:SentPropossal.Writer_ID,
//       Summary:Summary,
      
     
//     }
//     console.log(sendprojectData)
//     try{
//     const responce=await fetch(global.Url + "/api/Writer/SentProject",{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json', // specify that the content is JSON
//     },
//     body: JSON.stringify(sendprojectData), // convert object to JSON string
//   })
//   const data=await responce.json()
//   alert(JSON.stringify(data));
// }catch(e){
//   console.log(e.message)
// }

// try {
//   const response = await fetch(global.Url + '/BlinkBackend/api/Writer/SentProject', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json', // specify that the content is JSON
//     },
//     body: JSON.stringify(sendprojectData), // convert object to JSON string
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.error('Error:', error.message);
// }



//     }
  return (
        <View style={styles.container}> 
      <Text style={styles.title}>AcceptProposal</Text>
      <View><Text style={{fontSize:30}}>{SentPropossal.Movie_Name}</Text>
      <View><TextInput placeholder='Write Summary'
       multiline={true} 
       style={styles.input1} 
       textAlign='center' 
       placeholderTextColor='yellow'
       onChangeText={setSummary}
></TextInput>
</View> 
      </View>
     
        
      <TextInput placeholder='Enter Email' style={styles.input}></TextInput>
      <TextInput placeholder='Writer Name' style={styles.input}></TextInput>
      <TextInput placeholder='Movie Name' style={styles.input}>{SentPropossal.Movie_Name}</TextInput>
      <TextInput placeholder='Director Name' style={styles.input}>{SentPropossal.Director}</TextInput>
      <Text>imag</Text>
      <View>
        {/* <TouchableOpacity style={styles.button} onPress={sendproject}> */}
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('VideoNavigation',SentPropossal)}}>
        <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity></View>
    </View>
  )
}

export default AcceptProposal

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#2D3748',
        paddingHorizontal: 20,
        paddingTop: 70,
    
      },
      title: {
        fontSize: 30,
        color: 'yellow',
        alignSelf: 'center',
        marginBottom: 20,
        textDecorationLine: 'underline',
      }, input1: {
        height: 150,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        fontSize:20,
        
      },input: {
        height: 40,
        marginVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'grey',
      },
      button: {
        marginBottom:150,
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
     
    
})