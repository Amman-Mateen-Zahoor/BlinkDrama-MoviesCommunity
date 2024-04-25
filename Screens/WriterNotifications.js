import { ScrollView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const WriterNotifications = () => {

  const [SentPropossal,setSentPropossal]=useState([])
  useEffect(()=>{
    const login=async()=>{
      const responce= await fetch(global.Url + `/api/Writer/ShowProposals?Writer_ID=3`)
      const data= await responce.json()
      console.log(data)
      setSentPropossal(data)
      
    }
    login()
  },[])

  return (
    <ScrollView>
    <View style={{backgroundColor:'#2D3748', flex:1}}>
    <Text style={style.text}>Show Proposals</Text>
    {SentPropossal.map((e,index)=>{
      return(
        <View style={style.view1} key={index}>
        <Text style={style.text2}>
          Write Summary</Text>
          <View style={style.view2}>
            <View style={{paddingLeft:28}}>
            <Image source={require('../Images/teefa.jpeg')} 
            style={style.image}
            />
            </View>
            <View style={{paddingLeft:20}}>
              <Text style={{fontSize:18,fontWeight:'bold',}}>
              {e.Movie_Name}
              </Text>
              <Text style={{fontSize:18,fontWeight:'bold',}}>
              Director : {e.Director}
              </Text>
              <Text style={{fontSize:18,fontWeight:'bold',}}>
              Due Date : {e.DueDate} 
              
              </Text>
              <View style={{flexDirection:'row'}}>
              {/* <TouchableOpacity onPress={()=> navigation.navigate('AllAccepted',SentPropossal) }><Text style={{color:'green',borderRadius:12,fontSize:30}}>Accept</Text></TouchableOpacity> */}
              <TouchableOpacity onPress={()=>AcceptedStatus(e.SentProposal_ID)}>
  <Text style={{color:'green', borderRadius:12, fontSize:30}}>Accept</Text>
</TouchableOpacity>

              <TouchableOpacity><Text style={{color:'red',borderRadius:12,fontSize:30}}>   Reject</Text></TouchableOpacity>
              </View>
              </View>
          </View>
      </View>
      
      )
    })}
    </View>
    </ScrollView>
  )
}

export default WriterNotifications

const style =StyleSheet.create({
  text:{
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
  }
  }
    )

