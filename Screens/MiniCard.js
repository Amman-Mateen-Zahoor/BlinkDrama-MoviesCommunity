// import React from 'react';
// import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
// import { useNavigation,useTheme } from '@react-navigation/native';

// const MiniCard = (props)=>{
//   //  const navigation = useNavigation();
//    // const {colors} = useTheme()
//    // const textcolor = colors.iconColor
//   return(
//      // <TouchableOpacity
//      // onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
//      // >
//     <View style={{flexDirection:"row",margin:10,marginBottom:0,backgroundColor:'grey'}}>
//         <Image 
//            source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
//            style={{
//                width:"45%",
//                height:100
//            }} />
//            <View style={{
//                paddingLeft:7
//            }}>
//                <Text style={{
//                    fontSize:17,
//                    width:Dimensions.get("screen").width/2,
//                    color:'black'
//                }}
//                ellipsizeMode="tail"
//                numberOfLines={3}
//                >{props.title}</Text>
//                <Text style={{fontSize:12, color:'blue'}}>{props.channel}</Text>
//            </View>
//     </View>
//     //</TouchableOpacity>
//   )
// }

// export default MiniCard





import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet ,Dimensions } from 'react-native';

const MiniCard = ({ videoId,title,channel,midata}) => {
    // const MiniCard = ({ videoId, title, channel }) => {
      // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk',videoId,midata)
      console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkk',videoId,midata)
      const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Player',{videoId:videoId,midata})}
      style={styles.container}
    >
      <View style={{ flexDirection: 'row', margin: 10, marginBottom: 0, backgroundColor: '#D3D3D3' }}>
        <Image
          source={{ uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` }}
          style={{
            width: '45%',
            height: 100
          }} />
        <View style={{
          paddingLeft: 7
        }}>
          <Text style={{
            fontSize: 17,
            width: Dimensions.get("screen").width / 2,
            color: 'black'
          }}
            ellipsizeMode="tail"
            numberOfLines={3}
          >{title}</Text>
          <Text style={{ fontSize: 12, color: 'blue' }}>channel_name:{channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MiniCard;
