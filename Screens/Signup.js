// import React, {useMemo, useState} from 'react';
// import RadioGroup from 'react-native-radio-buttons-group';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   Touchable,
//   TouchableOpacity,
//   Pressable,
//   Image,
// } from 'react-native';

// //import { Icon } from 'react-native-heroicons';
// import {
//   ArrowRightCircleIcon,
//   ArrowRightIcon,
// } from 'react-native-heroicons/outline';
// const Stack = createNativeStackNavigator();
// export default function Signup({navigation}) {
//   const radioButtons = useMemo(
//     () => [
//       {
//         id: '1', // acts as primary key, should be unique and non-empty string
//         label: 'Writer',
//         value: 'Writer',
//       },
//       {
//         id: '2',
//         label: 'Reader',
//         value: 'Reader',
//       },
//     ],
//     [],
//   );
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const [email, setEmail] = useState('');

//   const uplodeImage = async () => {
//     const formData = new FormData();
//     const role = selectedId == 1 ? 'Writer' : 'Reder';
//     console.log(role);
//     formData.append('UserName', username);
//     formData.append('Password', password);
//     formData.append('Email', email);
//     formData.append('Image', imageData);
//     formData.append('Role', role);
//     const responce = await fetch(global.Url + '/api/User/SignUp', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     });
//     var data = await responce.json();
//     console.log(data);
//   };

//   const [selectedId, setSelectedId] = useState();
//   const [filePath, setFilePath] = useState();
//   const [imageData, setImagData] = useState({
//     uri: 'file:///data/user/0/com.blinkdramaproject/cache/rn_image_picker_lib_temp_9220858f-3991-4c7d-b140-a034d1a1c8d6.jpg',
//     name: '',
//     type: '',
//   });
//   const getIamgecamera = () => {
//     let optinos = {mediaType: 'photo'};
//     launchCamera(optinos, responce => {
//       setFilePath(responce.assets[0].uri);
//       console.log(filePath);
//       setImagData({
//         uri: responce.assets[0].uri,
//         name: responce.assets[0].fileName,
//         type: responce.assets[0].type,
//       });
//       console.log(imageData);
//     });
//   };

//   const getIamgeGallery = () => {
//     let optinos = {mediaType: 'photo'};
//     launchImageLibrary(optinos, responce => {
//       setFilePath(responce.assets[0].uri);

//       setImagData({
//         uri: responce.assets[0].uri,
//         name: responce.assets[0].fileName,
//         type: responce.assets[0].type,
//       });
//       console.log(imageData);
//     });
//   };

//   return (
//     <View style={{backgroundColor: '#2D3748', flex: 1}}>
//       <Text style={style.text}>Signup</Text>
//       <View
//         style={{
//           flexDirection: 'row',
//           padding: 5,
//           gap: 10,
//           borderWidth: 2,
//           borderRadius: 20,
//           width: 190,
//           backgroundColor: '#99ffee',
//         }}>
//         <TouchableOpacity
//           onPress={() => getIamgecamera()}
//           style={{
//             height: 35,
//             backgroundColor: 'purple',
//             width: 80,
//             alignItems: 'center',
//             borderRadius: 20,
//             borderWidth: 2,
//           }}>
//           <Text style={{fontSize: 20, color: 'white'}}>camera</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => getIamgeGallery()}
//           style={{
//             height: 35,
//             backgroundColor: 'purple',
//             width: 80,
//             alignItems: 'center',
//             borderRadius: 20,
//             borderWidth: 2,
//           }}>
//           <Text style={{fontSize: 20, color: 'white'}}>library</Text>
//         </TouchableOpacity>
//         <Image
//           source={{uri: imageData.uri}}
//           style={{height: 100, width: 100, borderWidth: 2}}></Image>
//       </View>
//       <TextInput
//         style={style.input}
//         placeholder="Email"
//         onChangeText={setEmail}></TextInput>
//       <TextInput
//         style={style.input}
//         placeholder="UserName"
//         onChangeText={setUserName}></TextInput>
//       <TextInput
//         style={style.input}
//         placeholder="Password"
//         onChangeText={setPassword}></TextInput>
//       <TextInput style={style.input} placeholder="Confirm Password"></TextInput>
//       <View>
//         <Text>1
//           {' '}
//           <Text style={{fontSize: 20, color: 'yellow', marginRight: 10}}>
//             Role:
//           </Text>{' '}
//           <RadioGroup
//             radioButtons={radioButtons}
//             onPress={setSelectedId}
//             selectedId={selectedId}
//             layout="row"
//           />
//         </Text>
//       </View>

//       <TouchableOpacity style={style.button} onPress={uplodeImage}>
//         <Text style={style.buttonText}>
//           Signup
//           <Text style={{color: 'yellow', textAlign: 'right'}}>.......</Text>
//           <Text style={{alignSelf: 'flex-end'}}>
//             <ArrowRightIcon size={20} color="black"></ArrowRightIcon>
//           </Text>
//         </Text>
//       </TouchableOpacity>

//       <View style={style.signUpContainer}>
//         <Text style={style.dontHaveAccount}>Already have an account?</Text>
//         <Pressable onPress={() => navigation.navigate('Login')}>
//           <Text style={style.signUp}>Login</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }
// const style = StyleSheet.create({
//   text: {
//     textDecorationLine: 'underline',
//     fontSize: 30,
//     color: 'yellow',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     fontSize: 20,
//     textAlign: 'justify',
//   },
//   button: {
//     backgroundColor: 'yellow',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 9,
//     alignSelf: 'center',
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   signUpContainer: {
//     alignSelf: 'flex-end',
//     marginTop: 10,
//     flexDirection: 'row',
//     alignSelf: 'center',
//     paddingHorizontal: 12,
//   },
//   dontHaveAccount: {
//     fontSize: 16,
//   },
//   signUp: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'yellow',
//   },
// });




import React, {useMemo, useState} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';

//import { Icon } from 'react-native-heroicons';
import {
  ArrowRightCircleIcon,
  ArrowRightIcon,
} from 'react-native-heroicons/outline';
const Stack = createNativeStackNavigator();
export default function Signup({navigation}) {
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Writer',
        value: 'Writer',
      },
      {
        id: '2',
        label: 'Reader',
        value: 'Reader',
      },
    ],
    [],
  );
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [email, setEmail] = useState('');
  const[Interest,SetInterest]=useState('');

  const uplodeImage = async () => {
    const formData = new FormData();
    const role = selectedId == 1 ? 'Writer' : 'Reder';
    console.log(role);
    formData.append('UserName', username);
    formData.append('Password', password);
    formData.append('Email', email);
    formData.append('Image', imageData);
    formData.append('Role', role);
    formData.append('Interest',Interest);
    
    const responce = await fetch(global.Url + '/api/User/SignUp', {
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

  const [selectedId, setSelectedId] = useState();
  const [filePath, setFilePath] = useState("");
  const [imageData, setImagData] = useState({
    uri: 'file:///data/user/0/com.blinkdramaproject/cache/rn_image_picker_lib_temp_9220858f-3991-4c7d-b140-a034d1a1c8d6.jpg',
    name: '',
    type: '',
  });
  const getIamgecamera = () => {
    let optinos = {mediaType: 'photo'};
    launchCamera(optinos, responce => {
      setFilePath(responce.assets[0].uri);
      console.log(filePath);
      setImagData({
        uri: responce.assets[0].uri,
        name: responce.assets[0].fileName,
        type: responce.assets[0].type,
      });
      console.log(imageData);
    });
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
    <View style={{backgroundColor: '#2D3748', flex: 1}}>
      <Text style={style.text}>Signup</Text>
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          gap: 10,
          borderWidth: 2,
          borderRadius: 20,
          width: 190,
          backgroundColor: '#99ffee',
        }}>
        <TouchableOpacity
          onPress={() => getIamgecamera()}
          style={{
            height: 35,
            backgroundColor: 'purple',
            width: 80,
            alignItems: 'center',
            borderRadius: 20,
            borderWidth: 2,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => getIamgeGallery()}
          style={{
            height: 35,
            backgroundColor: 'purple',
            width: 80,
            alignItems: 'center',
            borderRadius: 20,
            borderWidth: 2,
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>library</Text>
        </TouchableOpacity>
        <Image
          source={{uri: imageData.uri}}
          style={{height: 100, width: 100, borderWidth: 2}}></Image>
      </View>
      <TextInput
        style={style.input}
        placeholder="Email"
        onChangeText={setEmail}></TextInput>
      <TextInput
        style={style.input}
        placeholder="UserName"
        onChangeText={setUserName}></TextInput>
      <TextInput
        style={style.input}
        placeholder="Password"
        onChangeText={setPassword}></TextInput>
      <TextInput style={style.input} placeholder="Confirm Password"></TextInput>
      <View>
        <Text>1
          {' '}
          <Text style={{fontSize: 20, color: 'yellow', marginRight: 10}}>
            Role:
          </Text>{' '}
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
          />
        </Text>
      </View>
      <TextInput
        style={style.input}
        placeholder="Interests"
        onChangeText={SetInterest}></TextInput>
      <TouchableOpacity style={style.button} onPress={uplodeImage}>
        <Text style={style.buttonText}>
          Signup
          <Text style={{color: 'yellow', textAlign: 'right'}}>.......</Text>
          <Text style={{alignSelf: 'flex-end'}}>
            <ArrowRightIcon size={20} color="black"></ArrowRightIcon>
          </Text>
        </Text>
      </TouchableOpacity>

      <View style={style.signUpContainer}>
        <Text style={style.dontHaveAccount}>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={style.signUp}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
    fontSize: 30,
    color: 'yellow',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    textAlign: 'justify',
  },
  button: {
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
  },
  signUpContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 12,
  },
  dontHaveAccount: {
    fontSize: 16,
  },
  signUp: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'yellow',
  },
});
 

