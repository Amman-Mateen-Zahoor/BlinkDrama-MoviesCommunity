import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View ,Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker';

const ImageEditorSendProposal = () => {
  const[editorid,SetEditorId]=useState(3);
  const[writerid,SetWriterId]=useState(3);
 const[movieID,SetMovieId]=useState(0);
 const[movieName,SetMovieName]=useState('');
 const[genre,SetGenre]=useState('');
 const[type,SetType]=useState('');
 const[director,setDirector]=useState('');
 const[dueDate,SetDueDate]=useState('');
  const [filePath, setFilePath] = useState("");
  const [imageData, setImagData] = useState({
    uri: 'file:///data/user/0/com.blinkdramaproject/cache/rn_image_picker_lib_temp_9220858f-3991-4c7d-b140-a034d1a1c8d6.jpg',
    name: '',
    type: '',
  });


  const Send = async () => {
    const formData = new FormData();
    formData.append('Movie_Id', movieID);
    formData.append('Movie_Name', movieName);
    formData.append('Genre', genre);
    formData.append('Type', type);
    formData.append('Director', director);
    formData.append('Image', imageData);
    formData.append('Cover_Image', imageData);
    
    
    const responce = await fetch(global.Url + '/api/Editor/SentMovie', {
      method: 'POST',
      headers: {
       Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    var data = await responce.json();
    console.warn(data)
    console.log("Clicked")
    
  };

  const getIamgeGallery = () => {
    let optinos = {mediaType: 'photo'};
    launchImageLibrary(optinos, responce => {
      setFilePath(responce.assets[0].uri);

      setImagData({
        uri: responce.assets[0].uri,
        name: responce.assets[0].fileName,
        type: responce.assets[0].type,
      });
      console.log(imageData);
    });
  };
  return (
    <View style={styles.modalContainer}>
      <KeyboardAvoidingView style={styles.keyboardAvoidingContainer}
       behavior={Platform.OS === "ios" ? "padding" : null}
       keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}>
  <Text style={styles.modalHeading}>Add Movie</Text>
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
      <Text style={styles.buttonText}>Choose Cover Image</Text>
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
  </KeyboardAvoidingView>
  
</View>

  )
}

export default ImageEditorSendProposal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#2D3748',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalHeading: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    alignSelf:'center'
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: '100%',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    backgroundColor: 'green',
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
    alignSelf:'center',
    width: 300,
    height: 120,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: 'purple',
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
