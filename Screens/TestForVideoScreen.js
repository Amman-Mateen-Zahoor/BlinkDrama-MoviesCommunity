import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import YoutubePlayer from "react-native-youtube-iframe";
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const TestForVideoScreen = ({ route }) => {
  const [clips, SetSentClip] = useState([{
    "End_time": 10, "Start_time": 0, "Title": "i am title",
    "clip": "PxdhnrTQHvg", "id": 0, "isCompoundClip": true
  }]);

  clips.forEach((clip, index) => {
    clip.id = index; // Add index to the description
  });

  const [visible, SetVisible] = useState(false);
  const [data, SetData] = useState([
    { End_time: 5, Start_time: 0, Title: "I am title", clip: "S7KS4i0_KFE", id: 1 },
    { End_time: 5, Start_time: 0, Title: "I am title", clip: 'KILUsa4crzI', id: 2 },
    { End_time: 20, Start_time: 15, Title: "I am title", clip: 'KILUsa4crzI', id: 3 },
    { End_time: 20, Start_time: 10, Title: "I am title", clip: "S7KS4i0_KFE", id: 4 }
  ]);

  const [apple, SetApple] = useState();
  const videoIds = clips.map(clip => clip.clip);
  const startTimes = clips.map(clip => clip.Start_time);
  const endTimes = clips.map(clip => clip.End_time);

  console.log('VideoIds:', videoIds);
  console.log('videoliength', videoIds.length);
  console.log('StartTimes:', startTimes);
  console.log('EndTimes:', endTimes);

  const richText = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const ViewData = async () => {
      try {
        let data = await route.params;
        const apple = data.data1.midata;
        SetApple(apple);
        SetSentClip(data.compound);
        SetData(data.compound);
        console.log('I am Clipppppp', clips);
      } catch (error) {
        console.log(error);
      }
    };
    ViewData();
  }, []);

  useEffect(() => {
    console.log('clipssss of useeffect', clips);
  }, [clips]);

  const handleVideoChange = () => {
    
    if (currentIndex === videoIds.length) {
      setPlaying(true);
    } else {
      const nextIndex = (currentIndex + 1) % videoIds.length;
      console.log('inside length', videoIds.length);
      setCurrentIndex(nextIndex);
      console.log('Next indexxx', nextIndex);
      console.log('currenttttt inside', currentIndex);
      console.log('vid of current index ', videoIds[currentIndex]);
    }
  };

 
  const [Summary, setSummary] = useState('');

  const sendproject = async () => {
    const sendprojectData = {
      SentProposal_ID: `${global.SentProposalData}`,
      Movie_ID: `${global.Movie_ID}`,
      Writer_ID: `${global.Writer_ID}`,
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

  const op = useCallback((state) => {
    if (state === "ended") {
      Alert.alert("Video has finished playing!");
      handleVideoChange();
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>HighLights</Text>
        <View style={{ flex: 0.5 }}>
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
              onChangeState={op}
            />
          )}
        </View>
        <View>
          <Text style={styles.header}>Write Summary</Text>
          <RichEditor
            ref={richText}
            placeholder="Start typing..."
            onChange={setSummary} // Use onChange instead of onTextChange
          />
          <RichToolbar getEditor={() => richText.current} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={sendproject}>
            <Text style={styles.buttonText}>Send Project</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TestForVideoScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FFFFFF', // White color
  },
  container: {
    flex: 1,
    backgroundColor: '#2D3748',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  buttonContainer: {
    alignSelf: 'center',
    paddingLeft: 4,
    paddingEnd: 5,
    marginTop: 20,
    alignSelf: 'center',
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
  },
});
