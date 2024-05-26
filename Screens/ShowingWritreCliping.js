
import React, { useState, useEffect, useRef ,useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Alert ,Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import YoutubePlayer from "react-native-youtube-iframe";
 
const ShowingWritreCliping = ({ route }) => {
 const[sendclip,SetSentClip]= useState([])
 const richText = useRef();
  
  let data = route.params;
  console.log('i am showwriteer data', data);
  console.log('data of compound clips', data.compound) 
  // setSentPropossal('i a m compound clip array',data.compound)
  const apple=data.data1.midata
  // console.log('imm aple',apple)
  useEffect(()=>{
    // // const data= route.params.proposal;
    // const data= route.params;
    //   console.log('hiiiiii',data)
      SetSentClip(data.compound)
    console.log('I am Clipppppp',sendclip)
   
  },[sendclip])
  const [playing, setPlaying] = useState(true);
  const[VideoId,SetVideoId]=useState('KILUsa4crzI')

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const navigation = useNavigation();
  // Update play/pause state based on current index and webview loading
  const [isPlaying, setIsPlaying] = useState(false);
  const[Summary,setSummary]=useState('') 
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

<YoutubePlayer
  height={300}
  play={playing}
  videoId={VideoId}
  initialPlayerParams={{
    start: '02',
    end: '04',
  }}
  onChangeState={(event) => {
    if (event === 'ended') {
      
      SetVideoId('iee2TATGMyI')
    }
  }}
/>


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

