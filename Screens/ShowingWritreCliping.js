
import React, { useState, useEffect, useRef ,useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Alert ,Button,ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import YoutubePlayer from "react-native-youtube-iframe";
 
const ShowingWritreCliping = ({ route }) => {
 const[clips,SetSentClip]= useState([])
 clips.forEach((clip, index) => {
  clip.id = index; // Add index to the description
});
const[apple,SetApple]=useState()
const videoIds = clips.map(clip => clip.clip);
  const startTimes = clips.map(clip => clip.Start_time);
  const endTimes = clips.map(clip => clip.End_time);
  
  console.log('VideoIds:', videoIds);
  console.log('videoliength',videoIds.length)
  console.log('StartTimes:', startTimes);
  console.log('EndTimes:', endTimes);
 const richText = useRef();
 const [currentIndex, setCurrentIndex] = useState(0);
 const playerRef = useRef(null);
 const [playing, setPlaying] = useState(true);
 
  useEffect(()=>{
    const ViewData = async () => {
    try{

    let data = await route.params;
  console.log('i am showwriteer data', data);
  console.log('data of compound clips', data.compound) 
  const apple=data.data1.midata
  console.log('imm aple',apple)
  SetApple(apple)
  SetSentClip(data.compound)
  console.log('I am Clipppppp',clips)
} catch (error){
  console.log(error)
} 
 }
ViewData()
},[clips])


useEffect(()=>{
  console.log('clipssss of useeffect',clips)
},[clips])
  
  const onStateChange = useCallback((state) => {
    if (state === "ended") {        
      handleVideoChange();
      
    }
  }, [currentIndex,clips]);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


  const handleVideoChange = () => {
    if(currentIndex==2){
      setPlaying(false)
    }
    else{
    const nextIndex = (currentIndex + 1) % videoIds.length;
    console.log('inside length',videoIds.length)
    setCurrentIndex(nextIndex);
    console.log('Next indexxx',nextIndex)
    console.log('currenttttt inside',currentIndex)
    console.log('vid of current index ',videoIds[currentIndex])
  }
  };
 


  const navigation = useNavigation();
  const[Summary,setSummary]=useState('') 
const sendproject = async () => {
  const sendprojectData = {
    SentProposal_ID: apple.SentProposal_ID,
    Movie_ID: apple.Movie_ID,
    Writer_ID: apple.Writer_ID,
    Summary: Summary,
    Clips: clips
    
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
<ScrollView>

<Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>Watch Compound Clip</Text>
<View style={{flex:0.5}}>
      
  {clips.length > 0 && (
        <YoutubePlayer
          key={clips[currentIndex].id}
          height={300}
          play={playing}
          videoId={clips[currentIndex].clip}
          initialPlayerParams={{
            start: clips[currentIndex].Start_time,
            end: clips[currentIndex].End_time,
          }}
          onChangeState={onStateChange}
        >
        
        </YoutubePlayer>
      )}
</View >
<View style={{paddingBottom:10}}>
    <Button title='show Single Clips'></Button></View>
<View>
<Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>Write Summary </Text>
  <RichEditor
    ref={richText}
    placeholder="Start typing..."
    onChange={setSummary} // Use onChange instead of onTextChange
  />
   <RichToolbar
        getEditor={() => richText.current}
      />
</View>

      <View style={{ alignSelf: 'flex-start', paddingLeft: 4, paddingEnd: 5 ,marginTop:20,alignSelf:'center'}}>    
        <TouchableOpacity style={styles.button} onPress={sendproject}> 
          {/* > */}
          <Text style={styles.buttonText}>Send Project</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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

