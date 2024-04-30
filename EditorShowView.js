import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const EditorShowView = ({route}) => {
    const data = route.params
    console.log('dataaaaaa From Notificatiohn Screen',data);
    console.log('i am sentpro id',data.SentProject_ID)


  

      // useEffect(() => {
      //   const ViewData = async () => {
      //       try {
      //         const response = await fetch(`${global.Url}/api/Editor/ViewSentProject?Movie_ID=${route.params.Movie_ID}`);
      //         const data = await response.json();
      //         console.log('I m View data',data);
      //       } catch (error) {
      //         console.error('Error fetching data:', error);
      //       }
      //     };
      //   ViewData();
      // }, []);
      useEffect(() => {
        const ViewData = async () => {
            try {
              const response = await fetch(`${global.Url}/api/Editor/FetchSummary?sentProjectId=${route.params.SentProject_ID}`);
              const data = await response.json();
              console.log('I m View data',data);
              console.log('i am summary',data.SummaryData.Summary1)
              const urls = data.ClipsData.map(clip => clip.Url);
    
    // Do something with the URLs, such as logging them
    console.log(urls);
              console.log('i am summary',data.ClipsData[0].Url)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        ViewData();
      }, []);


  return (
    <View style={{backgroundColor:'#2D3748', flex:1}}>
      <Text>EditorShowView</Text>
    </View>
  )
}

export default EditorShowView

const styles = StyleSheet.create({})