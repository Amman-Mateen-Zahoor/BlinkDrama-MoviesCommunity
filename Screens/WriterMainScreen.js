import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import AcceptProposal from './AcceptProposal'




const WriterMainScreen = ({route,navigation}) => {
 
const data =route.params;
console.log('i am from login',data)
// const data = route.params ? route.params : {};
// console.log(data);





const [SentPropossal,setSentPropossal]=useState([])
  useEffect(()=>{
    const login=async()=>{
      const responce= await fetch(global.Url + `/api/Writer/ShowProposals?Writer_ID=3`)
      const data= await responce.json()
      console.log('i am from 2nd console',data)
      const maparray =data.map(obj=>obj.Image)
      console.log(maparray)
      setSentPropossal(data)
      
    }
    login()
  },[])
  // const AcceptedStatus=async(a)=>{

  //   const responce= await fetch(global.Url + `/api/Writer/AcceptProposal?SentProposal_ID=${a}`,{
  //     method: 'POST',
  //     headers: {
  //      Accept: 'application/json',
  //       // 'Content-Type': 'multipart/form-data',
  //     }
  //   }
    
  //   )
  //   const data= await responce.json()
  //   console.log(data)
    
  // }

  const AcceptedStatus = async (a) => {
    try {
      const response = await fetch(`${global.Url}/api/Writer/AcceptProposal?SentProposal_ID=${a}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          // 'Content-Type': 'multipart/form-data',
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      // Display alert with received data
      alert(JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error);
      // Display error alert
      alert('Error occurred while fetching data.');
    }
  };
  

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
            {/* <Image source={require('../Images/teefa.jpeg')}  */}
            {/* <Image source={{ uri: `${global.Url}/Images/${e.Image}` }}  */}
            <Image
      source={e.Image ? { uri: `${global.Url}/Images/${e.Image}` } : require('../Images/teefa.jpeg')}

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
    
     <View style={{paddingTop:20}}>
    <View style={style.view1}>
      <Text style={style.text2}>
        ReWrite Summary</Text>
        <View style={style.view2}>
          <View style={{paddingLeft:28}}>
          <Image source={require('../Images/teefa.jpeg')} 
          style={style.image}
          />
          </View>
          <View style={{paddingLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Teefa In Trouble
            </Text>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Director : Abdullah
            </Text>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Due Date : 20/4/2023 
            </Text>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity><Text style={{color:'green',borderRadius:12,fontSize:30}}>Accept</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color:'red',borderRadius:12,fontSize:30}}>   Reject</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    </View>
    </View>

    <View style={{paddingTop:20}}>
    <View style={style.view1}>
      <Text style={style.text2}>
        Sent Summary</Text>
        <View style={style.view2}>
          <View style={{paddingLeft:28}}>
          <Image source={require('../Images/teefa.jpeg')} 
          style={style.image}
          />
          </View>
          <View style={{paddingLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:28}}>
            Teefa In Trouble
            </Text>
            {/* <Text style={{fontSize:18,fontWeight:'bold',}}>
            Director : Abdullah
            </Text>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Due Date : 20/4/2023 
            </Text> */}
            <View style={{flexDirection:'row'}}>
            <TouchableHighlight><Text style={{color:'yellow',borderRadius:12,fontSize:28}}>Status<Text style={{color:'gray'}}>:</Text></Text></TouchableHighlight>
            <TouchableOpacity ><Text style={{color:'yellow',borderRadius:12,fontSize:30}}>Accepted</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    </View>
    </View>
    
  </View>
  </ScrollView>
)
}

export default WriterMainScreen
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
  
  
