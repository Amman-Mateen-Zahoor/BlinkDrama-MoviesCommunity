import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'



const ReaderSeeAllBtnPaid = ({navigation}) => {
  const [acceptedProject, setAcceptedProject] = useState([]);
  const fetchAcceptedProjectData = async () => {
    try {
        const response = await fetch(global.Url +`/api/Editor/HistoryAcceptedprojectByEditor?Editor_ID=1`);
        const data = await response.json();
        console.log('no data', data)
        const a = data.Project
        setAcceptedProject(a);
        console.log('no data projectttttttttttttt 1', data.Project)
        
      
    } catch (error) {
        console.error('Error fetching proposal data:', error);
    }
};
useEffect(()=>{
  fetchAcceptedProjectData()
},[])
  return (
    <View style={{flex:1}}>
    <ScrollView  >
      <View style={style.container}>
      <Text style={style.text}>All Movies/Dramas</Text>
      {acceptedProject.map((acceptedProject,index)=>{
        return(
          <View style={style.proposalContainer} key={index}>
          <Text style={style.text2}>
            Write Summary</Text>
            <View style={style.view2}>
              <View style={{paddingLeft:28}}>
              {/* <Image source={require('../Images/teefa.jpeg')}  */}
              {/* <Image source={{ uri: `${global.Url}/Images/${e.Image}` }}  */}
              <Image
        source={acceptedProject.ProposalData.Image ? { uri: `${global.Url}/Images/${acceptedProject.ProposalData.Image}` } : require('../Images/teefa.jpeg')}
  
      style={style.image}
              />
              </View>
              <View style={{paddingLeft:20}}>
                <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:2}}>
                Name : {acceptedProject.ProposalData.Movie_Name}
                </Text>
                
                <View style={{flexDirection:'row'}}>
                {/* <TouchableOpacity onPress={()=> navigation.navigate('AllAccepted',SentPropossal) }><Text style={{color:'green',borderRadius:12,fontSize:30}}>Accept</Text></TouchableOpacity> */}
                
               
            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:2}}>
            Type:  
           {acceptedProject.ProposalData.Type} 
            </Text></View>
            <TouchableOpacity style={style.button} onPress={()=>{{navigation.navigate('paidShowMovie',{m:acceptedProject.Movie_ID} )}}}>
        <Text style={style.buttonText}>view</Text>
        </TouchableOpacity>
                </View>
            </View>
        </View>
        )
      })}
      
        
</View>
    </ScrollView>
    </View>
  )
}

export default ReaderSeeAllBtnPaid


// const styles = StyleSheet.create({
//   container: {
//       flexGrow: 1,
//       backgroundColor: '#1A202C',
//       paddingVertical: 20,
//       paddingHorizontal: 10,
//   },
//   title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//       textAlign: 'center',
//       color: '#FFFFFF', // White color
//   },
//   proposalContainer: {
//       borderWidth: 1,
//       borderColor: '#cccccc',
//       borderRadius: 10,
//       padding: 10,
//       marginBottom: 15,
//       backgroundColor: '#1A202C', // White color
//   },
//   text: {
//       fontSize: 16,
//       marginBottom: 5,
//       color: '#333333', // Dark gray color
//   }, text:{
//       marginTop:20,alignSelf:'center',color:'yellow',fontSize:30,textDecorationLine:'underline',marginBottom:30
//       },
//       view1:{ 
//       paddingTop:13,backgroundColor:'#333333',borderRadius:50,
//       }
//       ,
      
//       text2:{
//        color:'yellow',alignSelf:'center',paddingBottom:10,fontSize:20,fontWeight:'bold'        
//       },
//       view2:{
//       flexDirection:'row'
//       },
//       image: {
//       width: 80,
//       height: 120,
//       borderRadius: 10, // example border radius
//       resizeMode: 'cover', // example resizeMode
//       },
//       textContent:{
//       paddingStart:10,
//       fontSize:20
//       },
//       RowView:{
// flexDirection:'row',
// borderWidth: 1,
//       borderColor: '#cccccc',
//       borderRadius: 10,
//       padding: 10,
//       marginBottom: 15,
//       },
//       RowText:{
//         fontSize: 15,
//         fontWeight: 'bold',
//       },
//       button: {
    
//         backgroundColor: 'yellow',
//         paddingVertical: 4,
//         paddingHorizontal: 12,
//         borderRadius: 29,
//         alignSelf:'center'
//       },
//       buttonText: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//       },
// });
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
  }, container: {
          flexGrow: 1,
          backgroundColor: '#1A202C',
          paddingVertical: 20,
          paddingHorizontal: 10,
      },  button: {
      
        backgroundColor: 'yellow',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 29,
        alignSelf:'center'
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      
    proposalContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#1A202C', // White color
    },
  }
    )