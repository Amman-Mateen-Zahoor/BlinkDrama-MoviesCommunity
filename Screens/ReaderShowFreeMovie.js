import { View, Text, StyleSheet,useWindowDimensions, Alert,Button, ScrollView, Modal,TouchableOpacity } from 'react-native'
import React, { useEffect, useState,useCallback,useRef } from 'react'
import {WebView} from 'react-native-webview';
import RenderHTML from 'react-native-render-html';
import { AirbnbRating } from 'react-native-ratings';
import YoutubePlayer from "react-native-youtube-iframe";
import {  ArrowLeftIcon } from 'react-native-heroicons/outline';

const ReaderShowFreeMovie = ({route}) => {
  const[movieId,SetMovieId]=useState()
  const[writerId,SetWriterId]=useState()
    const [visible,SetVisible]=useState(false)
    const [summary,SetSummary] = useState('Summary DAta')
    const [clips, setClips] = useState([
      // "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=20",
      // "https://www.youtube.com/embed/VO0D7RpMhCc?start=220&end=230"
      // Add more URLs as needed
    ]);
    const videoIds = clips.map(clip => clip.clip);
    const startTimes = clips.map(clip => clip.Start_time);
    const endTimes = clips.map(clip => clip.End_time);
    console.log('VideoIds:', videoIds);
    console.log('videoliength',videoIds.length)
    console.log('StartTimes:', startTimes);
    console.log('EndTimes:', endTimes);
    const [currentIndex, setCurrentIndex] = useState(0);
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
      const source = {
    html: `
  
    ${summary}
`
  };
  const { width } = useWindowDimensions();
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
   
  const[s,SetS]=useState('')
    useEffect(()=>{
  
      // console.log('I am urlseeeeeee',clips);
      console.log('I ma  cuurreeentIndexxxx',currentUrlIndex)
      console.log('I am summary',summary)
      console.log('writerid',writerId)
      console.log('movieid',movieId)
//   showFreeMovie()
    },[currentUrlIndex,summary,writerId,movieId]);
    const showFreeMovie = async () => {
        try {
            let se = route.params;
            SetS(se)
            console.log('ssssssssssssssss',se)
          
          const response = await fetch(global.Url + `/api/editor/ViewSentProject?Movie_ID=${s}`);
          const data = await response.json();
          console.log('View Project dataaaaaa:', data);
SetWriterId(data.Summary[0].Writer_ID)
SetMovieId(data.Movie_ID)
console.log(writerId,movieId,'heeheheheh')
          const summarydata= data.Summary[0].Summary1;
        SetSummary(summarydata)
        const urlse = data.Clips
        setClips(urlse)
        SetData(urlse)
       console.log('clipsssssssssssss',clips)       
        } catch (error) {
          //console.error('Login error:', error);
          console.log('Error occurred while logging in.');
        }
      };

      useEffect(()=>{
        showFreeMovie()
      },[s])

const Test=()=>{
  Alert.alert('press')
}

      const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(true);
          // Alert.alert("Video has finished playing!");
          
            
          handleVideoChange();
          
        }
      }, [currentIndex,clips]);


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





      const sendProject = async () => {
        const sendprojectData = {
          Reader_ID: `${global.Readerid}`,
          Writer_ID: writerId,
          Movie_ID: movieId,
        };
      
        console.log('Send project data:', sendprojectData);
      
        try {
          const response = await fetch(global.Url + '/api/Reader/AddReaderFavorites', {
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
                controls:0,
                start: Start_time,
                end: End_time,
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
     



const[cModal,SetcModal]=useState(false)

const AcceptedStatus = async (rating) => {
  try {
    const response = await fetch(`${global.Url}/api/Reader/UpdateWriterRating?writerId=${writerId}&rating=${rating}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);

    // Display alert with received data
    Alert.alert(JSON.stringify(data));
    // setReloadFlag(!reloadFlag);
  } catch (error) {
    console.error('Error:', error);
    // Display error alert
    alert('Error occurred while fetching data.');
  }
};


const AcceptedStatus2 = async (rating) => {
  try {
    const response = await fetch(`${global.Url}/api/Reader/UpdateMovieRating?movieId=${movieId}&rating=${rating}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);

    // Display alert with received data
    Alert.alert(JSON.stringify(data));
    // setReloadFlag(!reloadFlag);
  } catch (error) {
    console.error('Error:', error);
    // Display error alert
    alert('Error occurred while fetching data.');
  }
};




  return (
    <View style={styles.container}>

<Modal
transparent={false}
visible={visible}
animationType='slide'
>
  <View style={styles.container2}>
    <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={()=>SetVisible(false)}>
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




      <Text style={styles.title}>ReaderShowMovie</Text>
      <ScrollView >
      <Text style={{backgroundColor:'grey',paddingTop:30,paddingBottom:250}} >
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>            Summary </Text>
       <RenderHTML contentWidth={width}
       style={{Color:'blue'}}
       source={source}/>
       
       </Text>
       <Button title='Watch Clips' onPress={()=>SetcModal(true)}></Button>
       <Modal
       transparent={false}
       visible={cModal}
       animationType='slide'
       >
      
       <View style={styles.container}>
       <TouchableOpacity onPress={()=>SetcModal(false)}>
      <ArrowLeftIcon size={30} color='yellow' / > 
      </TouchableOpacity>
       <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop:20,
        marginBottom: 10,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}>   HighLights </Text>
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
      <Button title='Show Simple clips' color='grey' onPress={()=>SetVisible(true)}>
        </Button>
        </View>
        </Modal>
      
       <View style={{flexDirection:'row',paddingTop:20}}>
        <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}> Rate Writer  </Text> 
       
         <AirbnbRating

        count={5}
        defaultRating={3}
        
        size={20}
        showRating={false}
        onFinishRating={(rating)=>AcceptedStatus(rating)
          // ()=>AcceptedStatus(item.Balance_ID) 
          }
        // onFinishRating={(rating)=>alert('Rating Added')}
         /> 
         {/* <AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable"]}
  defaultRating={11}
  size={20}
/>  */}
</View>
 <View style={{flexDirection:'row',paddingTop:20}}>
       <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}> Rate Movie/Drama  </Text>
       
        <AirbnbRating

        count={5}
        defaultRating={3}
        
        size={20}
        showRating={false}
        // onFinishRating={(rating)=>console.log('ratttting',rating)
        onFinishRating={(rating)=>AcceptedStatus2(rating)
        // ()=>AcceptedStatus(item.Balance_ID) 
        }
         />
         </View> 
          <Button title='Add Favourite' onPress={()=>sendProject()}></Button> 
</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 },
    container: {
      flexGrow: 1,
      backgroundColor: '#1A202C',
      paddingVertical: 20,
      paddingHorizontal: 10,
      paddingBottom:100
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      // White color
  },
  container2: {
    flex: 1,
    backgroundColor: '#2D3748',
    paddingHorizontal: 20,
    paddingTop:20

  }
  });
  

export default ReaderShowFreeMovie