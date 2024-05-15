// // import { View, Text } from 'react-native'
// // import React, { useState, useRef } from 'react'
// // import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

// // const TestScreenNo2 = ({route}) => {
// //     const richText = useRef();
// //   const[delta,SetDelta]=useState('')
// //   const data =route.params;
// //   console.log('ioioioioio',data)
// // SetDelta(data)
// // console.log(delta)
// //   return (
// //     <View>

// // <RichEditor
// //         ref={richText}
// //         placeholder="Start typing..."
// //         // onChange={setSummary} // Use onChange instead of onTextChange
// //       />

// //       {/* Toolbar for formatting options */}
// //       <RichToolbar
// //         getEditor={() => richText.current}
// //       />

// //       <Text>TestScreenNo2</Text>
// //     </View>
// //   )
// // }

// // export default TestScreenNo2
// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text , useWindowDimensions} from 'react-native';
// import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';

// // import RenderHtml from 'react-native-render-html';
// import RenderHTML from 'react-native-render-html';
// import { Colors } from 'react-native/Libraries/NewAppScreen';


// const TestScreenNo2 = ({ route }) => {
//   const richText = useRef();
//   const [delta, setDelta] = useState('<b><u>There Is No Summary</u></b>');

//   const source = {
//     html: `
  
//     ${delta}
// `
//   };
 

  
//   const { width } = useWindowDimensions();
  



//   // Use useEffect to up.date delta when route.params changes
//   useEffect(() => {
//     const data = route.params;
//     // const p = htmlToText.fromString(data)
//     console.log('ioioioioio', delta);
//     // setDelta(data);
//   }, [route.params,delta]);

//   console.log(delta);

//   return (
//     <View style={{backgroundColor:'#2D3748', flex:1}}>
      



//       {/* Toolbar for formatting options */}
//       {/* <RichToolbar getEditor={() => richText.current} /> */}

//       <Text>TestScreenNo2:{delta}</Text>
//       <Text style={{backgroundColor:'grey'}} >
//       {delta ? <RenderHTML contentWidth={width} 
//       style={{Color:'blue'}}
//       source={source} /> : console.log(delta)}
//       </Text>
//     </View>
//   );
// };

// export default TestScreenNo2;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TestScreenNo2() {
  return (
    <View>
      <Text>TestScreenNo2</Text>
    </View>
  )
}

const styles = StyleSheet.create({})