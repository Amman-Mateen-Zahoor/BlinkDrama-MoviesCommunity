import React, { useState, useCallback,useRef,useEffect } from "react";
import { Button, View, Alert,ScrollView,Text,StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function TestScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  
  const clips = [
    { End_time: 5, Start_time: 0, Title: "I am title", clip: "S7KS4i0_KFE", isCompoundClip: true },
    { End_time: 15, Start_time: 10, Title: "I am title", clip: "S7KS4i0_KFE", isCompoundClip: true },
    { End_time: 50, Start_time: 40, Title: "I am title", clip: "KILUsa4crzI", isCompoundClip: true },
    { End_time: 20, Start_time: 10, Title: "I am title", clip: "S7KS4i0_KFE", isCompoundClip: true }
    
  ];
  clips.forEach((clip, index) => {
    clip.id = index; // Add index to the description
  });
  
  const videoIds = clips.map(clip => clip.clip);
  const startTimes = clips.map(clip => clip.Start_time);
  const endTimes = clips.map(clip => clip.End_time);
  
  console.log('VideoIds:', videoIds);
  console.log('videoliength',videoIds.length)
  console.log('StartTimes:', startTimes);
  console.log('EndTimes:', endTimes);
 

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      // setPlaying(true);
      Alert.alert("Video has finished playing!");
      
        
      handleVideoChange();
      
    }
  }, [currentIndex]);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []); 
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
  return (
    <View>
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
      />
      <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: 20,
    alignItems: 'center',
  }
});
