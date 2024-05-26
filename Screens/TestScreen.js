import React, { useState, useCallback } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(true);
  // const [videoId, setVideoId] = useState('KILUsa4crzI');
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoIds = [
    'KILUsa4crzI',
    'iee2TATGMyI',
    'KILUsa4crzI',
    'iee2TATGMyI',
    'KILUsa4crzI'
    
  ];
  // const start = 10;  // Start time in seconds
  // const end = 13;  // End time in seconds

  const startTimes = [
    0,  // Start time for the first video
    10, // Start time for the second video
    5,  // Start time for the third video
    0,  // Start time for the fourth video
    8   // Start time for the fifth video
  ];

  const endTimes = [
    5,  // End time for the first video
    15,  // End time for the second video
    12,  // End time for the third video
    7,   // End time for the fourth video
    18   // End time for the fifth video
  ];

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      // setPlaying(true);
      // Alert.alert("Video has finished playing!");
      handleVideoChange();
    }
  }, [currentIndex]);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  // const handleVideoChange = () => {
  //   setVideoId((prevId) => (prevId === 'KILUsa4crzI' ? 'iee2TATGMyI' : 'KILUsa4crzI'));
  // };
  const handleVideoChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
  };
  
  return (
    <View>
      <YoutubePlayer
        key={videoIds[currentIndex]}
        height={300}
        play={playing}
        videoId={videoIds[currentIndex]}
        initialPlayerParams={{
          start: startTimes[currentIndex],
          end: endTimes[currentIndex],
        }}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
    </View>
  );
}
