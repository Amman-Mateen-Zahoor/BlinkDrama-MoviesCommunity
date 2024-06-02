import React, {useState, useCallback,useRef,useEffect} from 'react';
import {View, Dimensions,Modal,Text, Alert,StyleSheet,TextInput, Button, useWindowDimensions, TouchableOpacity, ScrollView} from 'react-native';

import {WebView} from 'react-native-webview';
import RenderHTML from 'react-native-render-html';
import {  RichToolbar,RichEditor } from 'react-native-pell-rich-editor';
import { ArrowDownCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';
import YoutubePlayer from "react-native-youtube-iframe";

const EditorShowView = ({route}) => {
  const [visible,SetVisible]=useState(false)
  const [visi2,SetVisi2]=useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  // const [multiurl, setMultiUrl] = useState(`{"ClipsData": 
  // [{"Clips_ID": 793362522, "End_time": null, "Start_time": null, "Title": "Title1", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=35&end=49", "isCompoundClip": true},
  //  {"Clips_ID": 910559199, "End_time": null, "Start_time": null, "Title": "Title2", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=0&end=33", "isCompoundClip": true},{"Clips_ID": 793362522, "End_time": null, "Start_time": null, "Title": "Title1", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=35&end=49", "isCompoundClip": true},
  //  {"Clips_ID": 910559199, "End_time": null, "Start_time": null, "Title": "Title2", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=0&end=33", "isCompoundClip": true},{"Clips_ID": 793362522, "End_time": null, "Start_time": null, "Title": "Title1", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=35&end=49", "isCompoundClip": true},
  //  {"Clips_ID": 910559199, "End_time": null, "Start_time": null, "Title": "Title2", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=0&end=33", "isCompoundClip": true}]} `);
const[multiurl,setMultiUrl]=useState([])
  // const clipsData = JSON.parse(multiurl).ClipsData;

  const richText = useRef();
  const [summary,SetSummary] = useState('Summary DAta')
  const [clips, setClips] = useState([
    // "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=20",
    // "https://www.youtube.com/embed/VO0D7RpMhCc?start=220&end=230"
    // Add more URLs as needed
  ]);
  const videoIds = clips.map(clip => clip.Url);
  const startTimes = clips.map(clip => clip.Start_time);
  const endTimes = clips.map(clip => clip.End_time);

  console.log('VideoIds:', videoIds);
  console.log('videoliength',videoIds.length)
  console.log('StartTimes:', startTimes);
  console.log('EndTimes:', endTimes);
  
useEffect(()=>{
  console.log('clips of url',clips)
},[clips])

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      // setPlaying(true);
      // Alert.alert("Video has finished playing!");
      
        
      handleVideoChange();
      
    }
  }, [currentIndex,clips]);
  // Usage
  const handleVideoChange = () => {
    if(currentIndex==videoIds.length){
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
  
const[sproId,SetsproId]=useState('')


  useEffect(() => {
    const data = route.params;
    console.log("I am a data",data)
    const a = data.SentProject_ID
    console.log('i am sentpro id',a)
SetsproId(a)

    const ViewData = async () => {
      try {
        const response = await fetch(
          `${global.Url}/api/Editor/FetchSummary?sentProjectId=${route.params.SentProject_ID}`,
        );
        const data = await response.json();
        console.log('I m View data', data);
        console.log('i am summary', data.SummaryData.Summary1);
        console.log('data.sentproject..........',data.SentProject.SentProject_ID)
        const summarydata= data.SummaryData.Summary1;
        SetSummary(summarydata)
        const urlse = data.ClipsData.map(clip => clip.Url);
        const urlse2 = data.ClipsData

        console.log('urlse2>>>>>>>>>>>>>>>>>>',urlse2)
        setMultiUrl(urlse)
        setClips(urlse2)
        SetData(urlse2)
       
        // const urlse = data.ClipsData

        // Do something with the URLs, such as logging them
        console.log('I am urlseeeeeee',clips); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    ViewData();

    
  }, [data]);

  const source = {
    html: `
  
    ${summary}
`
  };

  const YouTubePlayer = ({ End_time, Start_time, Title, Url, Clips_ID }) => {
    const [playing, setPlaying] = useState(false);
  
    const onStateChange = (state) => {
      if (state === 'ended') {
        setPlaying(false);
      }
    };
  
    return (
      <View key={Clips_ID} style={{ marginBottom: 20 }}>
        <Text>{Title}</Text>
        <YoutubePlayer
          height={300}
          play={playing}
          videoId={Url}
          onChangeState={onStateChange}
          initialPlayerParams={{
            start: Start_time,
            end: End_time,
            controls:0,
          }}
        />
      </View>
    );
  };
  
  const [data,SetData] = useState([
    // { End_time: 5, Start_time: 0, Title: "I am title", clip: "S7KS4i0_KFE", id: 1 },
    // { End_time: 5, Start_time: 0, Title: "I am title", clip: 'KILUsa4crzI', id: 2 },
    // { End_time: 20, Start_time: 15, Title: "I am title", clip: 'KILUsa4crzI', id: 3 },
    // { End_time: 20, Start_time: 10, Title: "I am title", clip: "S7KS4i0_KFE", id: 4 }
  ])
 








  const Accept = async () => {
    try {
      // Construct the URL with the sProId parameter
      const sProId = sproId; // Replace 'your_value_here' with the actual value
      const response = await fetch(`${global.Url}/api/Editor/AcceptSentProject?sProId=${sProId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      Alert.alert('Project Accepteed Successfully!');
      // Handle success, maybe update UI
    } catch (error) {
      console.error('Error updating summary:', error);
      // Handle error, show error message to user
    }
  };
  

  const Rewrite = async () => {
    Alert.alert('clicked')
    try {
      // Construct the URL with the sProId parameter
      const sProId = sproId; // Replace 'your_value_here' with the actual value
      const response = await fetch(`${global.Url}/api/Editor/RewriteSentProject?SentProject_ID=${sProId}&editorsComment=${summary}`, {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      Alert.alert(data,'Project Accepteed Successfully!');
      SetVisible(false)
      // Handle success, maybe update UI
    } catch (error) {
      console.error('Error updating summary:', error);
      // Handle error, show error message to user
    }
  };
  
  const saveHandler = async () => {
    const response = await fetch `${global.Url}/api/Editor/RewriteSentProject?SentProject_ID=1684121958&editorsComment=bjhjh`;
  
    // Assuming SentProject_ID and editorsComment are variables containing t
  
    try {
     
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        Alert.alert('Success', 'SentProject status updated successfully.');
        
      } else {
        const errorMessage = await response.text();
        console.error('Error:', errorMessage);
        Alert.alert('Error', 'Failed to update SentProject status. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to update SentProject status. Please try again later.');
    }
  };
   




  


  const { width } = useWindowDimensions();  

  return (
    <View style={styles.container}>
      <ScrollView>
     <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>     Summary </Text>
      
     
{/* <View><TextInput placeholder={summary}
       multiline={true} 
       style={styles.input1} 
       textAlign='center' 
       placeholderTextColor='yellow'
       onChangeText={SetSummary}
       
       
></TextInput></View> */}

<View style={{paddingBottom:50}}>
<ScrollView horizontal={true} >
<Text style={{backgroundColor:'grey', width:'auto',paddingTop:30,paddingBottom:250}} >
  

      {summary ? <RenderHTML contentWidth={width} 
      style={{Color:'blue'}}
      source={source} /> : console.log(summary)}
      
      </Text>
      </ScrollView></View>
      <View style={{paddingBottom:5}}></View>
      <Button title='Rewrite' onPress={()=>SetVisible(true)} ></Button>
            <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>         HIGLIGHTS </Text>
      
      <Modal
transparent={false}
visible={visi2}
animationType='slide'
>
  <View style={styles.container2}>
    <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={()=>SetVisi2(false)}>
      <ArrowLeftIcon size={30} color='yellow' / > 
      </TouchableOpacity>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>            Simple Clips </Text>
      </View>
      <View style={{paddingBottom:20}}></View>
      <View>
<ScrollView >
      {data.map(item => (
        
        <YouTubePlayer
          key={item.Clips_ID}
          End_time={item.End_time}
          Start_time={item.Start_time}
          Title={item.Title}
          Url={item.Url}
          
        />
      ))}
    </ScrollView>
    </View>
    </View>

</Modal>




      <Modal
      transparent={false}
      visible={visible}
      animationType='slide'
      >
        
        {/* <View style={{backgroundColor:'#2D3748', flex:1}}><Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>  Add Comment </Text>
        {/* <RichEditor
        ref={richText}
        placeholder="Start typing..."
        onChange={SetSummary}
         // Use onChange instead of onTextChange
      />
       */}


      {/* Toolbar for formatting options */}
     
      {/* <Button title='Rewrite' onPress={Rewrite}></Button>
          <RichEditor
        ref={richText}
        placeholder="Start typing..."
        onChange={SetSummary}
         // Use onChange instead of onTextChange
      />
      <RichToolbar
        getEditor={() => richText.current}
      />
      
      </View> */} 
      <View style={styles.container2}>
        <ScrollView></ScrollView>
<Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>Add Comment </Text>
  {/* <RichEditor
    ref={richText}
    placeholder="Start typing..."
    onChange={SetSummary} // Use onChange instead of onTextChange
  /> */}
  <TextInput placeholder='Enter Comment' 
  ref={richText}
  onChange={SetSummary}
  ></TextInput>
   {/* <RichToolbar
        getEditor={() => richText.current}
      />*/}
      <Button title='Rewrite' onPress={Rewrite}></Button> 
</View>
      </Modal>

      
      
    
{clips.length > 0 && (
<YoutubePlayer
        key={clips[currentIndex].Clips_ID}
        height={300}
        play={playing}
        videoId={clips[currentIndex].Url}
        initialPlayerParams={{
          start: clips[currentIndex].Start_time,
          end: clips[currentIndex].End_time,
        }}
        onChangeState={onStateChange}
      />
    )}
    <Button title='Show Single Clips' onPress={()=>{SetVisi2(true)}}></Button>
<View style={{paddingBottom:10}}></View>
     <Button title='Accept' onPress={Accept} ></Button>
     </ScrollView>
    </View>
  );
};

export default EditorShowView;
const styles = StyleSheet.create({
  Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 },
  container: {
    flexGrow: 1,
    backgroundColor: '#1A202C',
    paddingVertical: 20,
    paddingHorizontal: 10,
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
  container2: {
    flex: 1,
    backgroundColor: '#2D3748',
    paddingHorizontal: 20,
    paddingTop:20

  }
});

