// import React,{useState} from 'react';
// import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
// //import {Ionicons} from '@expo/vector-icons'
// import Ionicons from 'react-native-vector-icons/dist/Ionicons';
// import MiniCard from '../Screens/MiniCard'
// //import Constant from 'expo-constants'
// import {useTheme} from '@react-navigation/native'
// //import {useSelector,useDispatch} from 'react-redux'
// //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&part=contentDetails&key=AIzaSyDtCWCduSedfthvh

// const SearchScreen = ({navigation})=>{
//     const {colors} =  useTheme()
//     const mycolor = colors.iconColor

//     const [value,setValue] = useState("")
//     const [miniCardData,setMiniCard] = useState([])
//     // const dispatch = useDispatch()
//     // const miniCardData = useSelector(state=>{
//     //     return state.cardData
//     // })
//     const [loading,setLoading] = useState(false)
//     const fetchData = () =>{
//         setLoading(true)
//         fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyDvE4g7WXFJ1aRwS2EFg4PhtU_WBzItZGw`)
//         .then(res=>res.json())
//         .then(data=>{

//             setLoading(false)
//             // dispatch({type:"add",payload:data.items})
//             setMiniCard(data.items)
//             // const duration = data.items
//             // console.log('??????????????????????????????????Video Duration:', duration);
//             const duration = data.contentDetails;
//     console.log('Video Duration:', duration);
//             console.log(data.type)

//         })
//     }
   
//   return(
//       <View style={{
//           flex:1,
//           backgroundColor:'#FFBF00'
//         //   marginTop:Constant.statusBarHeight,
//           }}>
//           <View style={{
//               padding:5,
//               flexDirection:"row",
//               justifyContent:"space-around",
//               elevation:5,
//               backgroundColor:colors.headerColor
        
//           }}>
//              <Ionicons
//              style={{color:'black'}}
//              name="arrow-back-outline" size={32}
//             //  onPress={()=>navigation.goBack()}
//              />
//              <TextInput
//              style={{
//                  width:"70%",
//                  //backgroundColor:"#e6e6e6"
//                  backgroundColor:"#333333"
//                 }}
//              value={value}
//              onChangeText={(text)=>setValue(text)}

//              />
//              <Ionicons
//               style={{color:'grey'}}
//              name="send"
//              size={32}
//              onPress={()=>fetchData()}
//              />
//           </View>
//            {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 
//           <FlatList
//            data={miniCardData}
//            renderItem={({item})=>{
//             console.log('itemmmmmmmmmmmmmmmmmmmmmmmmmmmmm',item)
//                return <MiniCard
//                 videoId={item.id.videoId}
//                 title={item.snippet.title}
//                 channel={item.snippet.channelTitle}
//                />
//            }}
//            keyExtractor={item=>item.id.videoId}
//           />
        
//       </View>
//   )
// }

// export default SearchScreen








import React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
//import {Ionicons} from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MiniCard from '../Screens/MiniCard'
//import Constant from 'expo-constants'
import {useTheme} from '@react-navigation/native'
//import {useSelector,useDispatch} from 'react-redux'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&part=contentDetails&key=AIzaSyDtCWCduSedfthvh

const SearchScreen = ({navigation , route})=>{
    const midata = route.params
     console.log('I m midata from Accept propsal screen',midata) 
    const {colors} =  useTheme()
    const mycolor = colors.iconColor

    const [value,setValue] = useState("")
    const [miniCardData,setMiniCard] = useState([])
    // const dispatch = useDispatch()
    // const miniCardData = useSelector(state=>{
    //     return state.cardData
    // })
    const [loading,setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=AIzaSyDvE4g7WXFJ1aRwS2EFg4PhtU_WBzItZGw`)
        .then(res=>res.json())
        .then(data=>{

            setLoading(false)
            // dispatch({type:"add",payload:data.items})
            setMiniCard(data.items)
            // const duration = data.items
            // console.log('??????????????????????????????????Video Duration:', duration);
            const duration = data.contentDetails;
    // im last comment console.log('Video Duration:', duration);
            // im last comment console.log('i am data.type',data.type)

        })
    }
   
  return(
      <View style={{
          flex:1,
          backgroundColor:'#FFBF00'
        //   marginTop:Constant.statusBarHeight,
          }}>
          <View style={{
              padding:5,
              flexDirection:"row",
              justifyContent:"space-around",
              elevation:5,
              backgroundColor:colors.headerColor
        
          }}>
             <Ionicons
             style={{color:'black'}}
             name="arrow-back-outline" size={32}
            //  onPress={()=>navigation.goBack()}
             />
             <TextInput
             style={{
                 width:"70%",
                 //backgroundColor:"#e6e6e6"
                 backgroundColor:"#333333"
                }}
             value={value}
             onChangeText={(text)=>setValue(text)}

             />
             <Ionicons
              style={{color:'grey'}}
             name="send"
             size={32}
             onPress={()=>fetchData()}
             />
          </View>
           {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 
          <FlatList
           data={miniCardData}
           renderItem={({item})=>{
            // im last comment console.log('itemmmmmmmmmmmmmmmmmmmmmmmmmmmmm',item)
               return <MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                midata={midata}
               />
           }}
           keyExtractor={item=>item.id.videoId}
          />
        
      </View>
  )
}

export default SearchScreen