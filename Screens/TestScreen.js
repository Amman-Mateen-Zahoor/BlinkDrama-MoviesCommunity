import React, { useEffect, useRef, useState } from 'react';
import { View, Button ,useWindowDimensions } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import RenderHTML from 'react-native-render-html';
 // Make sure to remove this line if you're importing navigation from somewhere else

const TestScreen = ({ navigation }) => {
  const richText = useRef();
  const [summary, setSummary] = useState('');

  // useEffect(() => {
  //   console.log(summary, 'summary');
  // }, [summary]);

  // Function to handle button press to get HTML content
  const onPressGetHTML = async () => {
    // const html = await richText.current.getContentHtml();
    // console.log(html);
    console.log(summary,' i i  am a summary')
    navigation.navigate('test2',summary)
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Rich text editor */}
      <RichEditor
        ref={richText}
        placeholder="Start typing..."
        onChange={setSummary} // Use onChange instead of onTextChange
      />


      {/* Toolbar for formatting options */}
      <RichToolbar
        getEditor={() => richText.current}
      />

      {/* Button to get HTML content */}
      <Button title="Get HTML Content" onPress={onPressGetHTML} />
    </View>
  );
};

export default TestScreen;

// import React, { 
//   useState, useEffect, useRef,
// } from 'react';
// import { 
//   View, StyleSheet, TextInput, Text, useWindowDimensions,
//   KeyboardAvoidingView, ScrollView
// } from 'react-native';


// const TestScreen = ({lineHeight=20}) => {
//   const { height, width } = useWindowDimensions()
//   // determine max number of TextInputs you can make
//   const maxLines = Math.floor(height/lineHeight);
//   const [ textLines, setTextLines ] = useState(Array(maxLines).fill(''));
//   return ( 
//       <KeyboardAvoidingView 
//           style={styles.container}
//           behavior={"height"}
//       >
//       <ScrollView style={{height:height,width:'100%'}}>
//           {/*Make TextInputs to fill whole screen*/}
//           <View style={{justifyContent:'flex-end'}}>
            
//               {textLines.map((text,i)=>{
//                   let style = [styles.textInput,{height:lineHeight}]
//                   // if first line give it extra space to look like notebook paper
//                   if(i ==0)
//                       style.push({height:lineHeight*3,paddingTop:lineHeight*2})
//                   return (
//                   <>
//                       <TextInput
//                         style={style}
//                         onChangeText={newVal=>{
//                           textLines[i] = newVal
//                           setTextLines(textLines)
//                         }}
//                         key={"textinput-"+i}
//                       />
//                   </>
//                   )
//               })}
//               <TextInput
//       ref={this.textInputRef}
//       style={styles.input}
//       multiline={true}
//       scrollEnabled={true}
//       onChangeText={this.onChangeText}
//     ></TextInput>
//           </View>
//           </ScrollView>
//     </KeyboardAvoidingView>
// )
// }

// const styles = StyleSheet.create({
//   container:{
//       flex:0.5,
//       // paddingTop:40
//   },
//   textInput:{
//       padding:0,
//       margin:0,
//       borderBottomColor:'black',
//       borderBottomWidth:1,
//       width:'100%',
//   }
  
// })

// export default TestScreen


