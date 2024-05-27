// import React, { useState, useCallback, useRef } from "react";
// import { Button, View, Alert } from "react-native";
// import YoutubeIframe from "react-native-youtube-iframe";
// import YoutubePlayer from "react-native-youtube-iframe";

// export default function App() {
//   const [playing, setPlaying] = useState(true);
//   const[VideoId,SetVideoId]=useState('KILUsa4crzI')

//   const onStateChange = useCallback((state) => {
//     if (state === "ended") {
//       setPlaying(false);
//       Alert.alert("video has finished playing!");
//     }
//   }, []);

//   const togglePlaying = useCallback(() => {
//     setPlaying((prev) => !prev);
//   }, []);

//   return (
//     <View>
//       {/* <YoutubePlayer
//         height={300}
//         play={playing}
//         videoId={"iee2TATGMyI"}
//         onChangeState={onStateChange}
//         start ={3}
//         end ={5}
//       />         */}

// <YoutubePlayer
//   height={300}
//   play={playing}
//   videoId={VideoId}
//   initialPlayerParams={{
//     start: '06',
//     end: '10',
//   }}
//   onChangeState={(event) => {
//     if (event === 'ended') {
      
//       SetVideoId('iee2TATGMyI')
//     }
//   }}
// />

//      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
//     </View>
//   );

// }





import React, { useState, useCallback } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(true);
  const [videoId, setVideoId] = useState('KILUsa4crzI');
  const [start, setStart] = useState(6);
  const [end, setEnd] = useState(10);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
     
      Alert.alert("video has finished playing!");
      handleVideoChange();
      setStart(5)
      setEnd(9)
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const handleVideoChange = () => {
    setVideoId('KILUsa4crzI');
  };

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={videoId}
        initialPlayerParams={{
          start: start,
          end: end,
        }}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}
