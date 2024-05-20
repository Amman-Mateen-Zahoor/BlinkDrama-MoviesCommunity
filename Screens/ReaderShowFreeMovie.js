import { View, Text, StyleSheet,useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {WebView} from 'react-native-webview';
import RenderHTML from 'react-native-render-html';

const ReaderShowFreeMovie = ({route}) => {
    const [visible,SetVisible]=useState(false)
    const [summary,SetSummary] = useState('Summary DAta')
    const [urls, setUrls] = useState([
      // "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=20",
      // "https://www.youtube.com/embed/VO0D7RpMhCc?start=220&end=230"
      // Add more URLs as needed
    ]);
      const source = {
    html: `
  
    ${summary}
`
  };
  const { width } = useWindowDimensions();
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
    const extractParameters = url => {
      const regex = /[?&](start|end)=([^?&]+)/g;
      const parameters = {};
      let match;
  
      while ((match = regex.exec(url)) !== null) {
        parameters[match[1]] = parseInt(match[2]);
      }
  
      return parameters;
    };
    const parseYouTubeUrls = urls => {
      const parsedUrls = urls.map(url => {
        const parameters = extractParameters(url);
        return {
          url: url,
          start: parameters.start || 0,
          end: parameters.end || null,
        };
      });
  
      return parsedUrls;
    };
  const[s,SetS]=useState('')
    useEffect(()=>{
  
      console.log('I am urlseeeeeee',urls);
      console.log('I ma  cuurreeentIndexxxx',currentUrlIndex)
      console.log('I am summary',summary)
//   showFreeMovie()
    },[urls,currentUrlIndex,summary]);
    const showFreeMovie = async () => {
        try {
            let se = route.params;
            SetS(se)
            console.log('ssssssssssssssss',se)
          
          const response = await fetch(global.Url + `/api/editor/ViewSentProject?Movie_ID=${s}`);
          const data = await response.json();
          console.log('View Project dataaaaaa:', data);
          const summarydata= data.Summary[0].Summary1;
        SetSummary(summarydata)
        const urlse = data.Clips.map(clip => clip.Url);
        setUrls(urlse)
        const value = parseYouTubeUrls(urlse);
        console.log('I am value',value)
        
        const currentVideo = value[currentUrlIndex]
        console.log("this is currentVedio",currentVideo)
        
          const videoDuration = (currentVideo.end - currentVideo.start) * 1000;
    console.log('I am Video duration',videoDuration)
        
    const timer = setTimeout(() => {
      setCurrentUrlIndex(prevIndex => (prevIndex + 1));
    }, videoDuration); // Adjust this delay as needed, currently set to 10 seconds
console.log('i am testerrrrrr',urls[currentUrlIndex])
console.log('i ma current index',currentUrlIndex)
    return () => clearTimeout(timer);
    
        //  console.log(data.Summary[0].Summary1)
        } catch (error) {
          //console.error('Login error:', error);
          console.log('Error occurred while logging in.');
        }
      };

      useEffect(()=>{
        showFreeMovie()
      },[s])

  return (
    <View style={styles.container}>
      <Text>ReaderShowFreeMovie</Text>
      <Text style={{backgroundColor:'grey',paddingTop:30,paddingBottom:30}} >
       <RenderHTML contentWidth={width}
       style={{Color:'blue'}}
       source={source}/>
       </Text>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri:urls[currentUrlIndex]}}
        style={{flex:0.5}}
      />
       
      
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
  

export default ReaderShowFreeMovie