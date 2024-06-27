import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReaderSearchPaid = ({MovieName}) => {
  return (
    <View style={{flex:1}}>
      {/* <Text>ReaderSearchPaid</Text> */}
      <Text>Movie_Name:{MovieName}</Text>
    </View>
  )
}

export default ReaderSearchPaid

const styles = StyleSheet.create({})