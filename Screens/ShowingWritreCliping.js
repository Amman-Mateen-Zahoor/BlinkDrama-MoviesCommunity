
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
 
const ShowingWritreCliping = ({ route }) => {
 const[sendclip,SetSentClip]= useState([{"clip": "https://www.youtube.com/embed/CNqo0m8-ssg?start=0&end=8", "isCompoundClip": true},
  {"clip": "https://www.youtube.com/embed/CNqo0m8-ssg?start=131&end=174", "isCompoundClip": true}])
 const richText = useRef();
  
  let data = route.params;
  // console.log('i am showwriteer data', data);
  // console.log('data of compound clips', data.compound) 
  // setSentPropossal('i a m compound clip array',data.compound)
  const apple=data.data1.midata
  // console.log('imm aple',apple)
  useEffect(()=>{
    // // const data= route.params.proposal;
    // const data= route.params;
    //   console.log('hiiiiii',data)
      SetSentClip(data.compound)
    console.log('I am Clipppppp',sendclip)
   
  },[])
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const webViewRef = useRef(null); // Create a ref to access WebView component

  // Update play/pause state based on current index and webview loading
  const [isPlaying, setIsPlaying] = useState(false);
  const[Summary,setSummary]=useState('')
  const extractParameters = (data) => {
    
    const regex = /[?&](start|end)=([^?&]+)/g;
    const parameters = {};
    let match;
    
    while ((match = regex.exec(data)) !== null) {
      parameters[match[1]] = parseInt(match[2]);
    }
    console.log('parametersssssssssss',parameters)
    return parameters;
  };

  const parseYouTubeUrls = () => {
    // console.log('I am Daata.compoundddddddddddd',data.compound)
    const parsedUrls = data.compound.map(url => {
      const parameters = extractParameters(url.clip);
      return {
        url: url,
        start: parameters.start || 0,
        end: parameters.end || null
      };
    });
    return parsedUrls;
  };

  useEffect(() => {
    
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
    const parsedUrls = parseYouTubeUrls();
    console.log(parsedUrls);
    const currentVideo = parsedUrls[currentIndex];
   
    const videoDuration = (currentVideo.end - currentVideo.start) * 1000; // Convert seconds to milliseconds

    const interval = setInterval(playNextVideo, videoDuration ); // Adjust interval duration as needed

    return () => clearInterval(interval);
  }, [ currentIndex,data.compound, webViewRef]);

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

<View style={{ flex: 0.5 }}>
  <RichEditor
    ref={richText}
    placeholder="Start typing..."
    onChange={setSummary} // Use onChange instead of onTextChange
  />
</View>

      {/* Toolbar for formatting options */}
      <RichToolbar
        getEditor={() => richText.current}
      />
   {/* <View><TextInput placeholder='Write Summary'
       multiline={true} 
       style={styles.input1} 
       textAlign='center' 
       placeholderTextColor='yellow'
       onChangeText={setSummary}
></TextInput></View> */}

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
      <View style={{ alignSelf: 'flex-start', paddingLeft: 4, paddingEnd: 5 ,marginTop:20,alignSelf:'center'}}>    
        <TouchableOpacity style={styles.button} onPress={sendproject}> 
          {/* > */}
          <Text style={styles.buttonText}>Send Project</Text>
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

