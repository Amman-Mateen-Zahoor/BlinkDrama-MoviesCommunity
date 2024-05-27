import React, { useState, useCallback,useRef,useEffect } from "react";
import { Button, View, Alert,ScrollView,Text,StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function TestScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  // const onStateChange = (state) => {
  //   if (state === 'ended') {
  //     if (currentIndex < data.length - 1) {
  //       setCurrentIndex(currentIndex + 1);
  //     }
  //     else{
  //       setPlaying(false);
  //     }
  //   }
  // };
  // const YouTubePlayers = ({ data }) => {
  //   return (
  //     <View style={styles.container}>
  //       <Text>{data[currentIndex].Title}</Text>
  //       <YoutubePlayer
  //         ref={playerRef}
  //         height={300}
  //         play={playing}
  //         videoId={data[currentIndex].clip}
  //         onChangeState={onStateChange}
  //         initialPlayerParams={{
  //           start: data[currentIndex].Start_time,
  //           end: data[currentIndex].End_time,
  //         }}
  //       />
  //     </View>
  //   );
  // }
  // useEffect(() => {
  //   if (playerRef.current) {
  //     playerRef.current.seekTo(data[currentIndex].Start_time, true);
  //   }
  //   setPlaying(true);
  // }, [currentIndex]);
  // const data = [
  //   { End_time: 5, Start_time: 0, Title: "I am title 1", clip: "S7KS4i0_KFE", id: 1 },
  //   { End_time: 5, Start_time: 0, Title: "I am title 2", clip: 'KILUsa4crzI', id: 2 },
  //   { End_time: 20, Start_time: 15, Title: "I am title 3", clip: 'KILUsa4crzI', id: 3 },
  //   { End_time: 20, Start_time: 10, Title: "I am title 4", clip: "S7KS4i0_KFE", id: 4 }
  // ];
  // return (
  //   <View style={styles.appContainer}>
  //     <YouTubePlayers data={data} />
  //   </View>
  // );
  
  // const [videoId, setVideoId] = useState('KILUsa4crzI');
  
  const clips = [
    { End_time: 5, Start_time: 0, Title: "I am title", clip: "S7KS4i0_KFE", isCompoundClip: true },
    { End_time: 15, Start_time: 10, Title: "I am title", clip: "KILUsa4crzI", isCompoundClip: true },
    { End_time: 50, Start_time: 40, Title: "I am title", clip: "S7KS4i0_KFE", isCompoundClip: true },
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
  // console.log('vid of current index outsidee ',videoIds[currentIndex])
  // const videoIds = [
  //   'KILUsa4crzI',
  //   'iee2TATGMyI',
  //   'KILUsa4crzI',
  //   'iee2TATGMyI',
  //   'KILUsa4crzI'
    
  // ];
  // // const start = 10;  // Start time in seconds
  // // const end = 13;  // End time in seconds

  // const startTimes = [
  //   0,  // Start time for the first video
  //   10, // Start time for the second video
  //   5,  // Start time for the third video
  //   0,  // Start time for the fourth video
  //   8   // Start time for the fifth video
  // ];

  // const endTimes = [
  //   5,  // End time for the first video
  //   15,  // End time for the second video
  //   12,  // End time for the third video
  //   7,   // End time for the fourth video
  //   18   // End time for the fifth video
  // ];

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
  // const handleVideoChange = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    
  // };
  
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

// import React, { useState, useCallback } from "react";
// import { Button, View, Alert,ScrollView,Text } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";

// export default function TestScreen() {
//   const YouTubePlayer = ({ End_time, Start_time, Title, clip, id }) => {
//     const [playing, setPlaying] = useState(false);
  
//     const onStateChange = (state) => {
//       if (state === 'ended') {
//         setPlaying(false);
//       }
//     };
  
//     return (
//       <View key={id} style={{ marginBottom: 20 }}>
//         <Text>{Title}</Text>
//         <YoutubePlayer
//           height={300}
//           play={playing}
//           videoId={clip}
//           onChangeState={onStateChange}
//           initialPlayerParams={{
//             start: Start_time,
//             end: End_time,
//           }}
//         />
//       </View>
//     );
//   };
//   const data = [
//     { End_time: 5, Start_time: 0, Title: "I am title", clip: "S7KS4i0_KFE", id: 1 },
//     { End_time: 5, Start_time: 0, Title: "I am title", clip: 'KILUsa4crzI', id: 2 },
//     { End_time: 20, Start_time: 15, Title: "I am title", clip: 'KILUsa4crzI', id: 3 },
//     { End_time: 20, Start_time: 10, Title: "I am title", clip: "S7KS4i0_KFE", id: 4 }
//   ];
//   return (
//     <ScrollView>
//       {data.map(item => (
//         <YouTubePlayer
//           key={item.id}
//           End_time={item.End_time}
//           Start_time={item.Start_time}
//           Title={item.Title}
//           clip={item.clip}
//           id={item.id}
//         />
//       ))}
//     </ScrollView>
//   );
// }