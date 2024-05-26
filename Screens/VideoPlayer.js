import React, { useState ,useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, Platform, Touchable, TouchableOpacity, Alert, Modal, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import navigation from '../Navigation/Navigation';

//const TestScreen = () => {
const VideoPlayer = ({ route , navigation }) => {
  // const { videoId } = route.params;
  const[title1,SetTitle1]=useState('i am title')
  const[visible,SetVisible]=useState(false)
  const dataa = route.params;
  const[datavideoid,SetDataVideoId]=useState(dataa.videoId)
  // this is last comment console.log('i am player data',dataa)
  const [totalDuration, setTotalDuration] = useState(1);
  const [sliderValues, setSliderValues] = useState([0, 1]);
  const [videoUrl, setVideoUrl] = useState('https://www.youtube.com/embed/${dataa.videoId}?start=0&end=65&autoplay=1');
  const [videoUrl2, setVideoUrl2] = useState();
  const[sendId,SetSendId]=useState(dataa.videoId)
  const[start,SetStart]=useState()
  const[end,SetEnd]=useState()
const [compoundUrl, SetCopoundUrl]=useState([])
const[test,SetTest]=useState('&autoplay=1')
useEffect(()=>{},[videoUrl])
useEffect(() => {
  console.log('Updated compoundUrl:', compoundUrl);
}, [compoundUrl]);
  const handleSliderChange = (values) => {
    setSliderValues(values);
    const start = values[0];
    const end = values[1];
    setVideoUrl(`https://www.youtube.com/embed/${dataa.videoId}?start=${start}&end=${end}&autoplay=1`);
    setVideoUrl2(`VideeoId=${datavideoid}?start=${start}&end=${end}`);
  };

  const handleSliderComplete = () => {
    // Play the video from the current time within the selected range
    const script = `
      var video = document.querySelector('video');
      if (video) {
        var currentTime = video.duration * ${sliderValues[0]} / ${totalDuration};
        var endPoint = video.duration * ${sliderValues[1]} / ${totalDuration};
        if (video.currentTime < currentTime || video.currentTime > endPoint) {
          if (video.currentTime < currentTime) {
            video.currentTime = currentTime;
          } else if (video.currentTime > endPoint) {
            video.currentTime = endPoint;
          }
          video.play();
        }
      }
    `;
    return script;
  };

  const multiSliderValuesChange = (values) => {
    setSliderValues(values);
    const start = values[0];
    const end = values[1];
    SetStart(start)
    SetEnd(end)
    
    const newUrl = `https://www.youtube.com/embed/${dataa.videoId}?start=${start}&end=${end}&autoplay=1`;
    const newObject = { videoUrl: newUrl, /*, other properties if any */ };
    setVideoUrl(newUrl);
    // thissss wassss comment coz it showssss consoleee console.log('immm',videoUrl)
   
    // SetCopoundUrl(prevCompoundUrl => [...prevCompoundUrl, newObject]);
    // console.log('loloo',compoundUrl)
  };
  

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: videoUrl }}
        injectedJavaScript={handleSliderComplete()}
      />
      <View style={styles.container}>
        <Text style={styles.slider_Length}>Slider</Text>
        <View style={styles.slider_box}>
          <Text style={styles.Text}>Slider</Text>
          <MultiSlider
            values={sliderValues}
            sliderLength={200}
            selectedStyle={{ backgroundColor: '#CD5808' }}
            containerStyle={{ alignSelf: 'center', marginTop: -10 }}
            onValuesChange={multiSliderValuesChange}
            markerStyle={{
              ...Platform.select({
                android: {
                  height: 13,
                  width: 13,
                  borderRadius: 50,
                  backgroundColor: '#CD5808'
                }
              })
            }}
            min={0}
            max={1800}
            step={1}
          />
          
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: -20 }}>
            <Text style={{ color: '#DBDBDB' }}>{sliderValues[0]} min</Text>
            <Text style={{ fontSize: 20, color: '#DBDBDB' }}> - </Text>
            <Text style={{ color: '#DBDBDB' }}>{sliderValues[1]} max </Text>
          </View>
          
        </View>
        <View style={{paddingTop:10,flexDirection:'row'}}>
        <View style={{alignSelf:'flex-start'}}>
          {/* <TouchableOpacity style={styles.button} onPress={()=>console.warn(videoUrl)}> */}
          {/* This is is last but not working<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ShowWriterClips',videoUrl)}> */}
          {/* <TouchableOpacity style={styles.button} onPress={()=>MakeClip}> */}
          {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('clip', { videoUrl: videoUrl , isCompoundClip:false })}> */}
          <TouchableOpacity style={styles.button} onPress={()=>SetVisible(true)}>
         <Text style={styles.buttonText}>MakeClip</Text>
        </TouchableOpacity></View>
<Modal
transparent={false}
visible={visible}
animationType='slide'

>
<View style={{flex: 1, backgroundColor: '#000000'}}>
  <TouchableOpacity onPress={()=>SetVisible(false)}>
  
  <TextInput placeholder='Enter Title'
  onChangeText={SetTitle1}
  ></TextInput>
  <Text>Add</Text></TouchableOpacity>
  </View>
  </Modal>
        <View style={{alignSelf:'flex-start',paddingLeft:4,paddingEnd:5}}>
          <TouchableOpacity style={styles.button}
          onPress={()=>{SetCopoundUrl(prevCompoundUrl => [...prevCompoundUrl,{clip:sendId , isCompoundClip:true ,Title:title1,Start_time:start,End_time:end }]);
            }}>
         <Text style={styles.buttonText}>Add to comp</Text>
        </TouchableOpacity></View>
       
      
        </View>
        <View style={{alignSelf:'flex-start',paddingLeft:4,paddingEnd:5}}>
          <TouchableOpacity style={styles.button}
         onPress={()=>navigation.navigate('ShowWriterClips',{compound : compoundUrl, data1: dataa , videoId:dataa.videoId})}>
         <Text style={styles.buttonText}>show clips</Text>
        </TouchableOpacity></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000',paddingBottom:70 },
  slider_Length: { color: '#ffffff', fontSize: 22, alignSelf: 'center', marginTop: 20 },
  slider_box: {
    width: Dimensions.get('window').width - 60,
    height: 86,
    marginHorizontal: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.19)',
    borderRadius: 10,
    marginTop: 17,
  },
  Text: { color: '#FFFFFF', fontSize: 20, marginHorizontal: 10, marginTop: 10 }
  ,
button: {
  marginBottom:150,
  backgroundColor: 'yellow',
  paddingVertical: 12,
  paddingHorizontal: 50,
  borderRadius: 9,
  alignSelf:'center'

},
buttonText: {
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
},
});

export default VideoPlayer;
