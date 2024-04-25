import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const EditorShowView = ({route}) => {
    const data = route.params
    console.log('dataaaaaa',data);
    console.log(data.Movie_ID)

    const[showSummary,SetShowSummary]=useState([])

      useEffect(() => {
        const ViewData = async () => {
            try {
              const response = await fetch(global.Url + '/api/Editor/ViewSentProject?Movie_ID=${data.Movie_ID}');
              const data = await response.json();
              console.log('I m project data',data);
              SetShowSummary(data);
              console.log(SetShowSummary)
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