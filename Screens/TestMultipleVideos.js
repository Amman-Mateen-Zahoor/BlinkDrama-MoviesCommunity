import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const TestMultipleVideos = () => {
  const [multiurl, setMultiUrl] = useState(`{"ClipsData": 
  [{"Clips_ID": 793362522, "End_time": null, "Start_time": null, "Title": "Title1", "Url": "https://www.youtube.com/embed/InT99AHc8q4?start=35&end=49&autoplay=1", "isCompoundClip": true}]} `);

  const clipsData = JSON.parse(multiurl).ClipsData;

  return (
    <View style={{ flex: 1,   paddingVertical: 20,
        paddingHorizontal: 10 }}>
            <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}> Descriptions</Text>
        <ScrollView>
      {clipsData.map((clip, index) => (
        
        <View key={index} style={{ width: "100%", height: 200, borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15 }}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: clip.Url }}
          />
          <Text
            style={{
              fontSize: 20,
              width: Dimensions.get("screen").width - 50,
              margin: 9,  fontWeight: 'bold',
              marginBottom: 20,
              textAlign: 'auto',
              color: '#FFFFFF'
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
           Title : {clip.Title}
          </Text>
          <View style={{ borderBottomWidth: 1 }} />
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

export default TestMultipleVideos;