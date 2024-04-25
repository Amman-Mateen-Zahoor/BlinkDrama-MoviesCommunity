// import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
// import React from 'react'

// const WriterDrawer = () => {
//   return (
//     <View>
//         <View style={{backgroundColor:'#2d3748'}}>
//       {/* <View style={{backgroundColor:'#2D3748', flex:1}}> */}
//     <View style={style.view1}>
//       <Text style={style.text2}>
//         ReWrite Summary</Text>
//         <View style={style.view2}>
//           <View style={{paddingLeft:28}}>
//           <Image source={require('../Images/teefa.jpeg')} 
//           style={style.image}
//           />
//           </View>
//           <View style={{paddingLeft:20}}>
//             <Text style={{fontSize:18,fontWeight:'bold',}}>
//             Writer Name
//             </Text>
//             <Text style={{fontSize:18,fontWeight:'bold',}}>
//             Balance : 3000
//             </Text>
//             <Text style={{fontSize:18,fontWeight:'bold',}}>
//             Rating : <Text style={{color:'yellow'}}>* * * * *</Text> 
//             </Text>
//             <View style={{}}>
//             <TouchableOpacity><Text style={{color:'green',borderRadius:20,fontSize:30}}>Home</Text></TouchableOpacity>
//             <TouchableOpacity><Text style={{color:'red',borderRadius:12,fontSize:30}}>Logout</Text></TouchableOpacity>
//             </View>
//             </View>
//         </View>
//     </View>
//     </View>
//     </View>
//   )
// }

// const style=StyleSheet.create({

//     text:{
//         marginTop:20,alignSelf:'center',color:'yellow',fontSize:30,textDecorationLine:'underline',marginBottom:30
//         },
//         view1:{ 
//         paddingTop:13,backgroundColor:'#333333',borderRadius:50,
//         }
//         ,
        
//         text2:{
//          color:'yellow',alignSelf:'center',paddingBottom:10,fontSize:20,fontWeight:'bold'        
//         },
//         view2:{
//         flexDirection:'row'
//         },
//         image: {
//         width: 80,
//         height: 120,
//         borderRadius: 10, // example border radius
//         resizeMode: 'cover', // example resizeMode
//         },
//         textContent:{
//         paddingStart:10,
//         fontSize:20
//         }
// })

import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import navigation from '../Navigation/Navigation'
import { useNavigation } from '@react-navigation/native'



const WriterDrawer = () => {


  return (
    <View style={style.container}>
      <View style={style.view1}>
      <Text style={style.text2}>
        Profile Info
        </Text>
        <View style={style.view2}>
          <View style={{paddingLeft:28}}>
          <Image source={require('../Images/Dummy.jpeg')} 
          style={style.image}
          />
          </View>
          <View style={{paddingLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Name: Amman mateen
            </Text>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Balance : 3000
            </Text>
            <Text style={{fontSize:18,fontWeight:'bold',}}>
            Rating : <Text style={{color:'yellow', fontSize:20}}>* * * * </Text> 
            </Text>
            <View >
            {/* <TouchableOpacity style={{borderCurve:'circular', borderColor:'blue'}}><Text style={{color:'green',borderRadius:12,fontSize:30}}>Accept</Text></TouchableOpacity> */}
            <TouchableOpacity >
              <Text style={{color:'red',borderRadius:12,fontSize:30}}>Logout</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    </View>
    
    </View>
  )
}

export default WriterDrawer

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3748',
        paddingHorizontal: 20,
        paddingTop: 70,
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
        }
})