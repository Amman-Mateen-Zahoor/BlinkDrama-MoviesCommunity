// import React from 'react';
// import { StyleSheet, Text, View,Dimensions} from 'react-native';
// //import Constant from 'expo-constants'
// import { WebView } from 'react-native-webview';

// const VideoPlayer = ({route})=>{
//     const {videoId,title} = route.params
//    return(
//        <View style={{
//            flex:1,
//       //  marginTop:Constant.statusBarHeight
//         }}>
//            <View style={{
//                width:"100%",
//                height:200
//            }}>
//               <WebView
//               javaScriptEnabled={true}
//               domStorageEnabled={true}
//                source={{uri:`https://www.youtube.com/embed/${videoId}`}}
//               />

//            </View>
//            <Text style={{
//                fontSize:20,
//                width:Dimensions.get("screen").width - 50,
//                margin:9
//            }}
//            numberOfLines={2}
//            ellipsizeMode="tail"
//            >
//              {title}
//            </Text>
//            <View
//              style={{borderBottomWidth:1}}
//            />
//        </View>
//    )
// }

// export default VideoPlayer

// this code is only for showing video

// import React from 'react';
// import { WebView } from 'react-native-webview';

// const VideoPlayer = ({ route }) => {
//   const { videoId } = route.params;

//   return (
//     <WebView
//       style={{ flex: 1 }}
//       javaScriptEnabled={true}
//       domStorageEnabled={true}
//       // source={{ uri: `https://www.youtube.com/watch?v=${videoId}` }}
//       source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
//       // -BoVhKMNkj4
// // source={{ uri: `https://www.youtube.com/watch?v=gHnWkmW6qRI` }}
//     />
//   );
// };

// export default VideoPlayer;

// // slider adding 
// import React from 'react';
// import { View } from 'react-native';
// import { WebView } from 'react-native-webview';
// import Slider from 'react-native-slider'; // Import the slider component if not already imported

// const VideoPlayer = ({ route }) => {
//   const { videoId } = route.params;

//   return (
//     <View style={{ flex: 0.5 }}>
//       {/* WebView to display the video */}
//       <WebView
//         style={{ flex: 1 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
//       />
//       {/* Slider component */}
//       <Slider
//         style={{ width: '100%' }}
//         minimumValue={0}
//         maximumValue={1}
//         // Add your slider functionality here, e.g., onValueChange, etc.
//       />
//     </View>
//   );
// };

// export default VideoPlayer;

// import React, { useState } from 'react';
// import { View } from 'react-native';
// import Slider from 'react-native-slider';
// import { WebView } from 'react-native-webview'

// const VideoPlayer = ({ route }) => {
//   const { videoId } = route.params;
//   const [currentTime, setCurrentTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(1);

//   const handleSliderChange = (value) => {
//     // Calculate the time based on the value of the slider
//     const newTime = value * totalDuration;
//     setCurrentTime(newTime);
//   };

//   // const handleSliderComplete = () => {
//   //   // Play the video from the current time
//   //   // You can use the WebView's injectedJavaScript prop to control the video playback
//   //   // Here, I'm just logging the current time, you need to implement the actual playback logic
//   //   console.log('Playing from:', currentTime);
//   // };

//   const handleSliderComplete = () => {
//     // Play the video from the current time
//     const script = `
//       var video = document.querySelector('video');
//       if (video) {
//         video.currentTime = ${currentTime};
//         video.play();
//       }
//     `;
//     return script;
//   };

//   // Simulating data fetching or side effects
//   React.useEffect(() => {
//     // You may need to replace this with the actual logic to get the total duration
//     setTotalDuration(100);
//   }, [videoId]); // You might want to fetch data based on the videoId prop change

//   return (
//     <View style={{ flex: 1 }}>
//       {/* WebView to display the video */}
//       <WebView
//         style={{ flex: 0.5 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={false}
//         source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1` }}
//       />
//       {/* Slider component */}
//       <Slider
//         style={{ width: '40%'}}
//         minimumValue={0}
//         maximumValue={1}
//         value={currentTime / totalDuration}
//         onValueChange={handleSliderChange}
//         onSlidingComplete={handleSliderComplete}
//       />
//     </View>
//   );
// };

// export default VideoPlayer;


// example of slider 


// import React, { useState } from 'react';
// import { View } from 'react-native';
// import Slider from 'react-native-slider';
// import { WebView } from 'react-native-webview';


// const VideoPlayer = ({ route }) => {
//   const { videoId } = route.params;
//   const [currentTime, setCurrentTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(1);
//   const [startPoint, setStartPoint] = useState(0);
//   const [endPoint, setEndPoint] = useState(1);

//   const handleSliderChange = (value) => {
//     // Calculate the time based on the value of the slider
//     const newTime = value * (endPoint - startPoint) + startPoint * totalDuration;
//     setCurrentTime(newTime);
//   };

//   const handleSliderComplete = () => {
//     // Play the video from the current time
//     const script = `
//       var video = document.querySelector('video');
//       if (video) {
//         video.currentTime = ${currentTime};
//         video.play();
//       }
//     `;
//     return script;
//   };

//   const handleStartPointChange = (value) => {
//     setStartPoint(value);
//     if (value >= endPoint) {
//       setEndPoint(value + 1);
//     }
//   };

//   const handleEndPointChange = (value) => {
//     setEndPoint(value);
//     if (value <= startPoint) {
//       setStartPoint(value - 1);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* WebView to display the video */}
//       <WebView
//         style={{ flex: 0.5 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1` }}
//         injectedJavaScript={handleSliderComplete()}
//       />
//       {/* Slider component for start point */}
//       <Slider
//         style={{ width: '100%' }}
//         minimumValue={0}
//         maximumValue={totalDuration}
//         value={startPoint}
//         onValueChange={handleStartPointChange}
//       />
//       {/* Slider component for end point */}

//       <Slider
//         style={{ width: '100%' }}
//         minimumValue={0}
//         maximumValue={totalDuration}
//         value={endPoint}
//         onValueChange={handleEndPointChange}
//       />
//       {/* Slider component for current time */}
//       <Slider
//         style={{ width: '100%' }}
//         minimumValue={startPoint}
//         maximumValue={endPoint}
//         value={(currentTime - startPoint * totalDuration) / ((endPoint - startPoint) * totalDuration)}
//         onValueChange={handleSliderChange}
//         onSlidingComplete={handleSliderComplete}
//       />
//     </View>
//   );
// };

// export default VideoPlayer;

// little working in slider 
// import React, { useState } from 'react';
// import { View, WebView } from 'react-native';


// const VideoPlayer = ({ route }) => {
//   const { videoId } = route.params;
//   const [currentTime, setCurrentTime] = useState(0);
//   const [totalDuration, setTotalDuration] = useState(1);
//   const [startPoint, setStartPoint] = useState(0);
//   const [endPoint, setEndPoint] = useState(1);

//   const handleSliderChange = (values) => {
//     const [start, end] = values;
//     setStartPoint(start);
//     setEndPoint(end);
//     setCurrentTime(start);
//   };

//   const handleSliderComplete = () => {
//     // Play the video from the current time
//     const script = `
//       var video = document.querySelector('video');
//       if (video) {
//         video.currentTime = ${currentTime};
//         video.play();
//       }
//     `;
//     return script;
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* WebView to display the video */}
//       <WebView
//         style={{ flex: 0.5 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1` }}
//         injectedJavaScript={handleSliderComplete()}
//       />
//       {/* RangeSlider component for defining start and end points */}
      
//       <RangeSlider
//         style={{ width: '100%' }}
//         min={0}
//         max={totalDuration}
//         step={1}
//         initialLowValue={startPoint}
//         initialHighValue={endPoint}
//         onValueChanged={handleSliderChange}
//         renderThumb={(index) => <View />} // Customize thumb appearance if needed
//       />
//       {/* Slider component for current time */}
//       <Slider
//         style={{ width: '100%' }}
//         minimumValue={startPoint}
//         maximumValue={endPoint}
//         value={currentTime}
//         onValueChange={setCurrentTime}
//         onSlidingComplete={handleSliderComplete}
//       />
//     </View>
//   );
// };

// export default VideoPlayer;

// apna sahi code dynamic slider k ilava

// import React, { useState } from 'react';
// import { StyleSheet, Text, View ,Dimensions,TouchableOpacity} from 'react-native'
// import WebView from 'react-native-webview';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import TestScreen from './TestScreen'

// const VideoPlayer = ({ route }) => {
//   const { videoId } = route.params;
//   const [totalDuration, setTotalDuration] = useState(1);
//   const [sliderValues, setSliderValues] = useState([0, 1]);

//   const handleSliderChange = (values) => {
//     setSliderValues(values);
//   };

//   const handleSliderComplete = () => {
//     // Play the video from the current time within the selected range
//     const script = `
//       var video = document.querySelector('video');
//       if (video) {
//         var currentTime = video.duration * ${sliderValues[0]} / ${totalDuration};
//         var endPoint = video.duration * ${sliderValues[1]} / ${totalDuration};
//         if (video.currentTime < currentTime || video.currentTime > endPoint) {
//           if (video.currentTime < currentTime) {
//             video.currentTime = currentTime;
//           } else if (video.currentTime > endPoint) {
//             video.currentTime = endPoint;
//           }
//           video.play();
//         }
//       }
//     `;
//     return script;
//   };

//   const [value1,setValue1]=useState({values: [0,37],})
//   const multiSliderValuesChange = (values) => {
//     setValue1({
//         values,
//     });
// }

//   return (
//     <View style={{ flex: 1 }}>
//       {/* WebView to display the video */}
//       <WebView
//         style={{ flex: 1 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         // source={{ uri: `https://www.youtube.com/embed/${videoId}?autoplay=1?start=36&end=65`}}
//         source={{ uri: `https://www.youtube.com/embed/${videoId}`}}
//         injectedJavaScript={handleSliderComplete()}
//       />
//       {/* <TestScreen/> */}
//       {/* MultiSlider component for defining start and end points
//       <MultiSlider
//         values={sliderValues}
//         sliderLength={200}
//         min={0}
//         max={totalDuration}
//         step={2}
//         onValuesChange={handleSliderChange}
//         allowOverlap={true}
//         snapped
//       /> */}
//       <View style={styles.container}>
   
//    <Text style={styles.slider_Length}>slider</Text>

//   <View style={styles.slider_box}>
   
//     <Text style={styles.Text}>slider</Text>
//     <MultiSlider
//     values={[value1.values[0],value1.values[1]]}
//     sliderLength={200}
//     selectedStyle={{backgroundColor:'#CD5808',}}
//     containerStyle={{alignSelf:'center',marginTop:-10}}
//     onValuesChange={multiSliderValuesChange}
//     markerStyle={{
//       ...Platform.select({
//         android: {
//           height: 13,
//           width: 13,
//           borderRadius: 50,
//           backgroundColor: '#CD5808'
//         }
//       })
//     }}
//     min={0}
//     max={37}
//     step={1}
//     />
//     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:-20}}>
//     <Text style={{color:'#DBDBDB'}}>{value1.values[0]} min</Text>
//     <Text style={{fontSize:20,color:'#DBDBDB'}}> - </Text>
//     <Text style={{color:'#DBDBDB'}}>{value1.values[1]} max </Text>
//     </View>
//     {/* <View><TouchableOpacity style={styles.button} >
// //         <Text style={styles.buttonText}>Send</Text>
// //         </TouchableOpacity></View>
// //     </View> */}
//     </View>
//    </View>

//     </View>
//   );
// };

// export default VideoPlayer;
// const styles = StyleSheet.create({
//   container:{flex:1,backgroundColor:'#000000'},
//   slider_Length:{color:'#ffffff',
//   fontSize:22,
//   alignSelf:'center',
//   marginTop:20},
//   slider_box:{width:Dimensions.get('window').width-60,
//   height:86,
//   marginHorizontal:28,
//   backgroundColor:'rgba(255, 255, 255, 0.19)',
//   borderRadius:10,
//   marginTop:17,
// },
// Text:{color:'#FFFFFF',
// fontSize:20,
// marginHorizontal:10,
// marginTop:10
// }, button: {
//     marginBottom:150,
//     backgroundColor: 'yellow',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 9,
//     alignSelf:'center'
  
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
  

// })

import React, { useState ,useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Platform, Touchable, TouchableOpacity, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import navigation from '../Navigation/Navigation';

//const TestScreen = () => {
const VideoPlayer = ({ route , navigation }) => {
  // const { videoId } = route.params;
  const dataa = route.params;
  console.log('i am player data',dataa)
  const [totalDuration, setTotalDuration] = useState(1);
  const [sliderValues, setSliderValues] = useState([0, 1]);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/${dataa.videoId}?start=0&end=65');
const [compoundUrl, SetCopoundUrl]=useState([])

useEffect(()=>{},[videoUrl])
useEffect(() => {
  console.log('Updated compoundUrl:', compoundUrl);
}, [compoundUrl]);
  const handleSliderChange = (values) => {
    setSliderValues(values);
    const start = values[0];
    const end = values[1];
    setVideoUrl(`https://www.youtube.com/embed/${dataa.videoId}?start=${start}&end=${end}`);
  };

  const handleSliderComplete = () => {
    // Play the video from the current time within the selected range
    const script = `
      var video = document.querySelector('video');
      if (video) {
        var currentTime = video.duration * ${sliderValues[0]} / ${totalDuration};
        var endPoint = video.duration * ${sliderValues[1]} / ${totalDuration};
        if (video.currentTime < currentTime || video.currentTime > endPoint) {
          if (video.currentTime < currentTime) {
            video.currentTime = currentTime;
          } else if (video.currentTime > endPoint) {
            video.currentTime = endPoint;
          }
          video.play();
        }
      }
    `;
    return script;
  };

  const multiSliderValuesChange = (values) => {
    setSliderValues(values);
    const start = values[0];
    const end = values[1];
    const newUrl = `https://www.youtube.com/embed/${dataa.videoId}?start=${start}&end=${end}`;
    const newObject = { videoUrl: newUrl /*, other properties if any */ };
    setVideoUrl(newUrl);
    console.log('immm',videoUrl)
   
    // SetCopoundUrl(prevCompoundUrl => [...prevCompoundUrl, newObject]);
    // console.log('loloo',compoundUrl)
  };
  

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: videoUrl }}
        injectedJavaScript={handleSliderComplete()}
      />
      <View style={styles.container}>
        <Text style={styles.slider_Length}>Slider</Text>
        <View style={styles.slider_box}>
          <Text style={styles.Text}>Slider</Text>
          <MultiSlider
            values={sliderValues}
            sliderLength={200}
            selectedStyle={{ backgroundColor: '#CD5808' }}
            containerStyle={{ alignSelf: 'center', marginTop: -10 }}
            onValuesChange={multiSliderValuesChange}
            markerStyle={{
              ...Platform.select({
                android: {
                  height: 13,
                  width: 13,
                  borderRadius: 50,
                  backgroundColor: '#CD5808'
                }
              })
            }}
            min={0}
            max={1800}
            step={1}
          />
          
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -20 }}>
            <Text style={{ color: '#DBDBDB' }}>{sliderValues[0]} min</Text>
            <Text style={{ fontSize: 20, color: '#DBDBDB' }}> - </Text>
            <Text style={{ color: '#DBDBDB' }}>{sliderValues[1]} max </Text>
          </View>
          
        </View>
        <View style={{paddingTop:10,flexDirection:'row'}}>
        <View style={{alignSelf:'flex-start'}}>
          {/* <TouchableOpacity style={styles.button} onPress={()=>console.warn(videoUrl)}> */}
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ShowWriterClips',videoUrl)}>
          {/* <TouchableOpacity style={styles.button} onPress={()=>MakeClip}> */}
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('clip', { videoUrl: videoUrl , isCompoundClip:false })}> */}

         <Text style={styles.buttonText}>MakeClip</Text>
        </TouchableOpacity></View>

        <View style={{alignSelf:'flex-start',paddingLeft:4,paddingEnd:5}}>
          <TouchableOpacity style={styles.button}
          onPress={()=>{SetCopoundUrl(prevCompoundUrl => [...prevCompoundUrl,{clip:videoUrl , isCompoundClip:true}]);
            }}>
         <Text style={styles.buttonText}>Add to comp</Text>
        </TouchableOpacity></View>
       
      
        </View>
        <View style={{alignSelf:'flex-start',paddingLeft:4,paddingEnd:5}}>
          <TouchableOpacity style={styles.button}
         onPress={()=>navigation.navigate('ShowWriterClips',{compound : compoundUrl, data1: dataa})}>
         <Text style={styles.buttonText}>show clips</Text>
        </TouchableOpacity></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000',paddingBottom:70 },
  slider_Length: { color: '#ffffff', fontSize: 22, alignSelf: 'center', marginTop: 20 },
  slider_box: {
    width: Dimensions.get('window').width - 60,
    height: 86,
    marginHorizontal: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.19)',
    borderRadius: 10,
    marginTop: 17,
  },
  Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 }
  ,
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
});

export default VideoPlayer;
