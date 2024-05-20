import React, {useState, useEffect,useRef} from 'react';
import {View, Dimensions,Modal, Alert,StyleSheet,TextInput, Button, useWindowDimensions} from 'react-native';
import { Text } from 'react-native-svg';
import {WebView} from 'react-native-webview';
import RenderHTML from 'react-native-render-html';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

const EditorShowView = ({route}) => {
  const [visible,SetVisible]=useState(false)
  const richText = useRef();
  const [summary,SetSummary] = useState('Summary DAta')
  const [urls, setUrls] = useState([
    // "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=20",
    // "https://www.youtube.com/embed/VO0D7RpMhCc?start=220&end=230"
    // Add more URLs as needed
  ]);

  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);

  // Usage

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


  useEffect(()=>{

    console.log('I am urlseeeeeee',urls);
    console.log('I ma  cuurreeentIndexxxx',currentUrlIndex)
    console.log('I am summary',summary)

  },[urls,currentUrlIndex,summary]);
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
        setUrls(urlse)
       
        // const urlse = data.ClipsData

        // Do something with the URLs, such as logging them
        console.log('I am urlseeeeeee',urlse);
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
    
    
    
 
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    ViewData();

    
  }, []);

  const source = {
    html: `
  
    ${summary}
`
  };

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

{/* <View><TextInput placeholder={summary}
       multiline={true} 
       style={styles.input1} 
       textAlign='center' 
       placeholderTextColor='yellow'
       onChangeText={SetSummary}
       
></TextInput></View> */}
<Text style={{backgroundColor:'grey'}} >
  
      {summary ? <RenderHTML contentWidth={width} 
      style={{Color:'blue'}}
      source={source} /> : console.log(summary)}
      </Text>
      <Modal
      transparent={false}
      visible={visible}
      animationType='slide'
      >
        <View style={{backgroundColor:'#2D3748', flex:1}}><Text>Modal</Text>
        <RichEditor
        ref={richText}
        placeholder="Start typing..."
        onChange={SetSummary}
         // Use onChange instead of onTextChange
      />


      {/* Toolbar for formatting options */}
      <RichToolbar
        getEditor={() => richText.current}
      />
      <Button title='Rewrite' onPress={Rewrite}></Button>
      </View></Modal>
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri:urls[currentUrlIndex]}}
        style={{flex:0.5}}
      />
     <Button title='Accept' onPress={Accept} ></Button>
     <Button title='Add Comment' onPress={()=>SetVisible(true)} ></Button>
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
});

