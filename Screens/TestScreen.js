import { Modal, StyleSheet, Text, Touchable, TouchableOpacity, View ,TextInput } from 'react-native'
import React, { useState } from 'react'
import ImageEditorSendProposal from './ImageEditorSendProposal'

const TestScreen = () => {
  const [visible,SetVisible]=useState(false)
  return (

    <View>
      <Text>TestScreen</Text>
      <Modal
      transparent={false}
      visible={visible}
      animationType='slideeee'
      >
        {/* <View style={{backgroundColor:'fff'}}>
        <Text style={{fontSize:20}}>Hi modaal</Text>
        <TouchableOpacity onPress={()=>SetVisible(false)}>
          <Text style={{fontSize:25}}>close</Text>
        </TouchableOpacity>
        </View>
         */}
         <View style={styles.modalContainer}>
  <Text style={styles.modalHeading}>ImageEditorSendProposal</Text>
  <View style={styles.inputGroup}>
    <TextInput
      style={styles.input}
      placeholder='Movie Name'
      onChangeText={SetMovieName}
    />
    <TextInput
      style={styles.input}
      placeholder='Genre'
      onChangeText={SetGenre}
    />
    <TextInput
      style={styles.input}
      placeholder='Type'
      onChangeText={SetType}
    />
    <TextInput
      style={styles.input}
      placeholder='Director'
      onChangeText={setDirector}
    />
    <TouchableOpacity
      onPress={() => getIamgeGallery()}
      style={styles.galleryButton}>
      <Text style={styles.buttonText}>Choose from Library</Text>
    </TouchableOpacity>
    {imageData.uri && (
      <Image
        source={{uri: imageData.uri}}
        style={styles.imagePreview}
      />
    )}
  </View>
  <TouchableOpacity onPress={Send} style={styles.sendButton}>
    <Text style={styles.sendButtonText}>Send</Text>
  </TouchableOpacity>
</View>

      </Modal>
      <TouchableOpacity onPress={()=>SetVisible(true)}>
          <Text style={{fontSize:25}}>OPenModel</Text>
        </TouchableOpacity>
    </View>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#2D3748',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeading: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  galleryButton: {
    backgroundColor: 'purple',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
