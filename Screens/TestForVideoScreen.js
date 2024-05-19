import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const TestForVideoScreen = () => {
  const [urls, setUrls] = useState(`{"ClipsData": [{"Clips_ID": 763804737, "End_time": null, "Start_time": null, "Title": null, "Url": "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=422", "isCompoundClip": true}, {"Clips_ID": 964239455, "End_time": null, "Start_time": null, "Title": null, "Url": "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=235", "isCompoundClip": true}]} `);

  const clipsData = JSON.parse(urls).ClipsData;

  return (
    <View style={{ flex: 1 }}>
      {clipsData.map((clip, index) => (
        <View key={index} style={{ width: "100%", height: 200 }}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: clip.Url }}
          />
          <Text
            style={{
              fontSize: 20,
              width: Dimensions.get("screen").width - 50,
              margin: 9
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {clip.Title}
          </Text>
          <View style={{ borderBottomWidth: 1 }} />
        </View>
      ))}
    </View>
  );
};

export default TestForVideoScreen;