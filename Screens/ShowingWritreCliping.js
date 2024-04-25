// import { View, Text } from 'react-native'
// import React from 'react'
// import {WebView} from 'react-native-webview'

// const ShowingWritreCliping = ({route}) => {
//     const data = route.params;
//     console.log(data)

//   return (
//     <View style={{backgroundColor:'black',flex:1}}>
//       {data.map((e, index) => (
//     <WebView
//         style={{ flex: 1 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: e.clip }}
        
//       /> 
// ))}
//       {/* <WebView
//         style={{ flex: 1 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: data[0] }}
        
//       /><Text>llll</Text> */}
//     </View>
//   )
// }

// export default ShowingWritreCliping



// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
// import {WebView} from 'react-native-webview'
// const ShowingWritreCliping = ({route}) => {
//   const data = route.params;
//   //     console.log(data)
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const playNextVideo = () => {
//       if (currentIndex < data.length - 1) {
//         setCurrentIndex(prevIndex => prevIndex + 1);
//       }
//     };

//     const interval = setInterval(playNextVideo, 10000); // Adjust interval duration as needed

//     return () => clearInterval(interval);
//   }, [currentIndex, data]);

//   return (
//     <View style={{ flex: 1 }}>
//       {currentIndex < data.length && (
//         <WebView
//           style={{ flex: 1 }}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           source={{ uri: data[currentIndex].clip }}
//         />
//       )}
//     </View>
//   );
// };

// export default ShowingWritreCliping;

// import React, { useState, useEffect } from 'react';
// import { View } from 'react-native';
// import { WebView } from 'react-native-webview';

// const ShowingWritreCliping = ({ route }) => {
//   const data = route.params;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const playNextVideo = () => {
//       if (currentIndex < data.length - 1) {
//         setCurrentIndex(prevIndex => prevIndex + 1);
//       }
//     };

//     const interval = setInterval(playNextVideo, 10000); // Adjust interval duration as needed

//     return () => clearInterval(interval);
//   }, [currentIndex, data]);

//   return (
//     <View style={{ flex: 1 }}>
//       {currentIndex < data.length && (
//         <WebView
//           style={{ flex: 1 }}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           source={{ uri: data[currentIndex].clip }}
//         />
//       )}
//     </View>
//   );
// };

// export default ShowingWritreCliping;

// import React, { useState, useEffect, useRef } from 'react';
// import { View, StyleSheet ,TouchableOpacity ,Text  } from 'react-native';
// import { WebView } from 'react-native-webview';
// import navigation from '../Navigation/Navigation';

// const ShowingWritreCliping = ({ route ,navigation }) => {
//   const data = route.params;
//   console.log('i am showwriteer data',data)
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const webViewRef = useRef(null); // Create a ref to access WebView component

//   // Update play/pause state based on current index and webview loading
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     console.log(data)
//     const playNextVideo = async () => {
//       console.log(data?.compound[0].clip)
//       if (currentIndex < data.compound.length - 1) {
//         // Ensure webview has loaded before playing
//         if (webViewRef.current) {
//           const videoUrl = data?.compound[currentIndex].clip;
//           const injectScript = `
//             var video = document.querySelector('video');
//             if (video) {
//               video.play();
//             }
//           `;
//           await webViewRef.current.injectJavaScript(injectScript);
//           setIsPlaying(true);
//         }
//         setCurrentIndex(prevIndex => prevIndex + 1);
//       }
//     };

//     const interval = setInterval(playNextVideo, 10000); // Adjust interval duration as needed

//     return () => clearInterval(interval);
//   }, [currentIndex, data.compound, webViewRef]);

//   const handleWebViewLoad = () => {
//     // If webview is the first one, play automatically
//     if (currentIndex === 0) {
//       const injectScript = `
//         var video = document.querySelector('video');
//         if (video) {
//           video.play();
//         }
//       `;
//       webViewRef.current.injectJavaScript(injectScript);
//       setIsPlaying(true);
//     }
//   };

//   const handleNavigationStateChange = (navState) => {
//     // Handle potential navigation changes within the WebView
//     if (navState.url.endsWith('.mp4') && navState.canGoBack) {
//       // Assuming videos end in .mp4, go back to trigger playback completion
//       webViewRef.current.goBack();
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {currentIndex < data.length && (
//         <WebView
//           ref={webViewRef}
//           source={{ uri:videoUrl }}
//           style={{ flex: 1 }}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           onLoad={handleWebViewLoad}
//           onNavigationStateChange={handleNavigationStateChange}
//         />
//       )}
//       <View style={{alignSelf:'flex-start',paddingLeft:4,paddingEnd:5}}>
//           <TouchableOpacity style={styles.button}
//          >
//          <Text style={styles.buttonText} onPress={()=>{
//           navigation.navigate('Accepted',data)
//          }}>show clips</Text>
//         </TouchableOpacity></View>
//     </View>
//   );
// };

// export default ShowingWritreCliping;
// const styles = StyleSheet.create({
 
//   Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 }
//   ,
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
// });

import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
 
const ShowingWritreCliping = ({ route }) => {
 const[sendclip,SetSentClip]= useState([])
  
  const data = route.params;
  console.log('i am showwriteer data', data);
  console.log('data of compound clips', data.compound) 
  // setSentPropossal('i a m compound clip array',data.compound)
  const apple=data.data1.midata
  console.log('imm aple',apple)
  useEffect(()=>{
    // // const data= route.params.proposal;
    // const data= route.params;
    //   console.log('hiiiiii',data)
      SetSentClip(data.compound)
    
   
  },[])
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const webViewRef = useRef(null); // Create a ref to access WebView component

  // Update play/pause state based on current index and webview loading
  const [isPlaying, setIsPlaying] = useState(false);
  const[Summary,setSummary]=useState('')

  useEffect(() => {
    console.log(data);
    const playNextVideo = async () => {
      console.log(data?.compound[0].clip);
      if (currentIndex < data.compound.length - 1) {
        // Ensure webview has loaded before playing
        if (webViewRef.current) {
          const videoUrl = data?.compound[currentIndex].clip;
          const injectScript = `
            var video = document.querySelector('video');
            if (video) {
              video.play();
            }
          `;
          await webViewRef.current.injectJavaScript(injectScript);
          setIsPlaying(true);
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    };

    const interval = setInterval(playNextVideo, 10000); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, [currentIndex, data.compound, webViewRef]);

  const handleWebViewLoad = () => {
    // If webview is the first one, play automatically
    if (currentIndex === 0) {
      const injectScript = `
        var video = document.querySelector('video');
        if (video) {
          video.play();
        }
      `;
      webViewRef.current.injectJavaScript(injectScript);
      setIsPlaying(true);
    }
  };

  const handleNavigationStateChange = (navState) => {
    // Handle potential navigation changes within the WebView
    if (navState.url.endsWith('.mp4') && navState.canGoBack) {
      // Assuming videos end in .mp4, go back to trigger playback completion
      webViewRef.current.goBack();
    }
  };
  
//   const sendproject=async()=>{
//     const sendprojectData=
//     {SentProposal_ID:apple.SentProposal_ID,
//     Movie_ID:apple.Movie_ID,
//     Writer_ID:apple.Writer_ID,
//     Summary:Summary,
//     Clips :sendclip
    
   
//   }
//   console.log('i am send project',sendprojectData)
//   console.log('i am summayr',Summary)
//   try{
//   const responce=await fetch(global.Url + "/api/Writer/SentProject",{
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json', // specify that the content is JSON
//   },
//   body: JSON.stringify(sendprojectData), // convert object to JSON string
// })
// const data=await responce.json()
// alert(JSON.stringify(data,'i a m sent project'));
// }catch(e){
// console.log(e.message)
// }

// try {
// const response = await fetch(global.Url + '/BlinkBackend/api/Writer/SentProject', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json', // specify that the content is JSON
//   },
//   body: JSON.stringify(sendprojectData), // convert object to JSON string
// });

// if (!response.ok) {
//   throw new Error('Network response was not ok');
// }

// const data = await response.json();
// console.log(data);
// } catch (error) {
// console.error('Error:', error.message);
// }



//   }


const sendproject = async () => {
  const sendprojectData = {
    SentProposal_ID: apple.SentProposal_ID,
    Movie_ID: apple.Movie_ID,
    Writer_ID: apple.Writer_ID,
    Summary: Summary,
    Clips: sendclip
  };

  console.log('Send project data:', sendprojectData);

  try {
    const response = await fetch(global.Url + '/api/Writer/SentProject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // specify that the content is JSON
      },
      body: JSON.stringify(sendprojectData), // convert object to JSON string
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    alert(JSON.stringify(data, null, 2)); // Displaying response data
    console.log('Sent project response:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};



  return (
    <View style={styles.container}>
   <View><TextInput placeholder='Write Summary'
       multiline={true} 
       style={styles.input1} 
       textAlign='center' 
       placeholderTextColor='yellow'
       onChangeText={setSummary}
></TextInput></View>
      {currentIndex < data.compound.length && (
        <WebView
          ref={webViewRef}
          source={{ uri: data.compound[currentIndex].clip }}
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onLoad={handleWebViewLoad}
          onNavigationStateChange={handleNavigationStateChange}
        />
      )}
      <View style={{ alignSelf: 'flex-start', paddingLeft: 4, paddingEnd: 5 }}>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // navigation.navigate('Accepted', data);
            sendproject
          }} */}
            <TouchableOpacity style={styles.button} onPress={sendproject}> 
          {/* > */}
          <Text style={styles.buttonText}>show clips</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowingWritreCliping;

const styles = StyleSheet.create({
  Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 },
  container: {
    flex: 1,
    backgroundColor: '#2D3748',
    paddingHorizontal: 20,
    paddingTop: 70,

  },
  button: {
    marginBottom: 150,
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 9,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  ,
   input1: {
    height: 150,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    fontSize:20,
    
  },
});


// import React, { useState, useEffect, useRef } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text ,TextInput } from 'react-native';
// import { WebView } from 'react-native-webview';

// const ShowingWritreCliping = ({ route, navigation }) => {
//   const data = route.params;
//   // const newdata = data.dataa.midata
//   console.log('i am new data',newdata)
//   console.log('i am showwriteer data', data);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const[Summary,setSummary]=useState('')
//   const webViewRef = useRef(null); // Create a ref to access WebView component

//   // Update play/pause state based on current index and webview loading
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     console.log(data);
//     const playNextVideo = async () => {
//       console.log(data?.compound[0].clip);
//       if (currentIndex < data.compound.length - 1) {
//         // Ensure webview has loaded before playing
//         if (webViewRef.current) {
//           const videoUrl = data?.compound[currentIndex].clip;
//           const injectScript = `
//             var video = document.querySelector('video');
//             if (video) {
//               video.play();
//             }
//           `;
//           await webViewRef.current.injectJavaScript(injectScript);
//           setIsPlaying(true);
//         }
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       }
//     };

//     const interval = setInterval(playNextVideo, 10000); // Adjust interval duration as needed

//     // const sendproject=async()=>{
//     //   const sendprojectData=
//     //   {SentProposal_ID:SentPropossal.SentProposal_ID,
//     //   Movie_ID:SentPropossal.Movie_ID,
//     //   Writer_ID:SentPropossal.Writer_ID,
//     //   Summary:Summary,
      
     
//     // }
//     // console.log(sendprojectData)
// //     try{
// //     const responce=await fetch(global.Url + "/api/Writer/SentProject",{
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json', // specify that the content is JSON
// //     },
// //     body: JSON.stringify(sendprojectData), // convert object to JSON string
// //   })
// //   const data=await responce.json()
// //   alert(JSON.stringify(data));
// // }catch(e){
// //   console.log(e.message)
// // }

// // try {
// //   const response = await fetch(global.Url + '/BlinkBackend/api/Writer/SentProject', {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json', // specify that the content is JSON
// //     },
// //     body: JSON.stringify(sendprojectData), // convert object to JSON string
// //   });

// //   if (!response.ok) {
// //     throw new Error('Network response was not ok');
// //   }

// //   const data = await response.json();
// //   console.log(data);
// // } catch (error) {
// //   console.error('Error:', error.message);
// // }



//     // }

//     return () => clearInterval(interval);
//   }, [currentIndex, data.compound, webViewRef]);

//   const handleWebViewLoad = () => {
//     // If webview is the first one, play automatically
//     if (currentIndex === 0) {
//       const injectScript = `
//         var video = document.querySelector('video');
//         if (video) {
//           video.play();
//         }
//       `;
//       webViewRef.current.injectJavaScript(injectScript);
//       setIsPlaying(true);
//     }
//   };

//   const handleNavigationStateChange = (navState) => {
//     // Handle potential navigation changes within the WebView
//     if (navState.url.endsWith('.mp4') && navState.canGoBack) {
//       // Assuming videos end in .mp4, go back to trigger playback completion
//       webViewRef.current.goBack();
//     }
//   };

//   return (
    
//     <View style={styles.container}>
//       <View>
//       <TextInput placeholder='Write Summary'
//        multiline={true} 
//        style={styles.input1} 
//        textAlign='center' 
//        placeholderTextColor='yellow'
//        onChangeText={setSummary}
// ></TextInput>
//       </View>
//       {currentIndex < data.compound.length && (
//         <WebView
//           ref={webViewRef}
//           source={{ uri: data.compound[currentIndex].clip }}
//           style={{ flex: 1 }}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           onLoad={handleWebViewLoad}
//           onNavigationStateChange={handleNavigationStateChange}
//         />
//       )}
//       <View style={{ alignSelf: 'flex-start', paddingLeft: 4, paddingEnd: 5 }}>
//         <TouchableOpacity
//           style={styles.button}
//          >
//           {/* <TouchableOpacity style={styles.button} onPress={sendproject}> */}
//           <Text style={styles.buttonText}>show clips</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ShowingWritreCliping;

// const styles = StyleSheet.create({
//   Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 },
//   container: {
//     flex: 1,
//     backgroundColor: '#2D3748',
//     paddingHorizontal: 20,
//     paddingTop: 70,

//   },
//   button: {
//     marginBottom: 150,
//     backgroundColor: 'yellow',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 9,
//     alignSelf: 'center',
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//    input1: {
//     height: 150,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     padding: 10,
//     fontSize:20,
    
//   },
// });
