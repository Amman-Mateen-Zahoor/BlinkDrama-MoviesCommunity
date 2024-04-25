
import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity,Pressable,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ArrowRightIcon } from 'react-native-heroicons/outline'
import WriterMainScreen from './WriterMainScreen'
export default function Login({navigation}) {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  // const [uData,SetUData]=useState('')
  const login=async()=>{
    const responce= await fetch(global.Url + `/api/User/Login?email=${email}&password=${password}`)
    const data= await responce.json()
    console.log('i am login data',data)
    const SendWriterId = data.UserData.Writer_ID
    console.log('i am writerId',SendWriterId)
    // SetUData(data)
    // console.log('kuch nii',uData.UserData.Image)

//     const writerID = data.UserData.Writer_ID;
// console.log(writerID); // Output: 3


    console.log(data.Role)
    if (data.Role==='Writer') {
      navigation.navigate('WriterMainScreen', data);

    }
    else if(data.Role==='Editor'){
      navigation.navigate('EditorMainScreen',data)
    }
     else {
       console.log("bbbbbbbbbb")
       alert(JSON.stringify(data));
    }
    
  }
  // useEffect(()=>{}),[uData]
    return (
    <View style={{backgroundColor:'#2D3748', flex:1}}>
      <Text style={style.text}>Login</Text>
      <TextInput 
      onChangeText={setEmail}
      style={style.input}
      placeholder='Email'>
      </TextInput>
      <TextInput 
      onChangeText={setPassword}
      style={style.input}
      placeholder='Password'>
      </TextInput>
      <TouchableOpacity style={style.button} onPress={()=>login()}>
        <Text style={style.buttonText}>Login<Text style={{color:"yellow", textAlign:'right'}}>.......</Text>
        <Text style={{alignSelf:'flex-end'}}>
            <ArrowRightIcon size={20} color='black'></ArrowRightIcon>
            </Text>
        </Text>
      </TouchableOpacity>
     <View><Text>aaa</Text>
     {/* <Image source={{ uri: `${global.Url} + "/Images/" + ${uData.UserData.Image} `}} style={{
    width: 107,
    height: 165,
    padding: 10
  }}/> */}
  {/* <Image source={{ uri: `${global.Url}/Images/${uData.UserData.Image}` }} style={{ width: 107, height: 165, padding: 10 }} /> */}

{/* <Image source={{uri: 'global.Url + "Images" + uData.UserData.Image'}}  style={{width:20,height:20,padding:10}} />  */}



     </View>
      <View style={style.signUpContainer}>
        <Text style={style.dontHaveAccount}>Don't have an account?</Text>
        <Pressable onPress={()=> navigation.navigate("Signup")}
        >
          <Text style={style.signUp}> Sign up</Text>
        </Pressable>
      </View>


    </View>
  )
}

const style=StyleSheet.create({
text:{
    textDecorationLine:'underline' ,fontSize:30, color:'yellow',alignSelf:'center',marginTop:70
},
input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize:20,
    textAlign:'justify'
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 9,
    alignSelf:'center'

  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpContainer: {
    alignSelf:'flex-end',
    marginTop:10,
    flexDirection: 'row',
    alignSelf:'center',
    paddingHorizontal:12
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

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native';
// import { ArrowRightIcon } from 'react-native-heroicons/outline';
// import WriterMainScreen from './WriterMainScreen';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const login = async () => {
//     if (!email || !password) {
//       Alert.alert('Warning', 'Please fill in all fields.');
//       console.warn('User clicked login without filling in text inputs');
//       return;
//     }

//     1
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           onChangeText={setEmail}
//           style={styles.input}
//           placeholder="Email"
//         />
//         <TextInput
//           onChangeText={setPassword}
//            style={styles.input}
//           placeholder="Password"
//           secureTextEntry={true}
//         />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={login}>
//         <Text style={styles.buttonText}>
//           Login{' '}
//           <Text style={styles.buttonTextYellow}>....... </Text>
//           <ArrowRightIcon size={20} color="black" />
//         </Text>
//       </TouchableOpacity>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>Don't have an account? </Text>
//         <Pressable onPress={() => navigation.navigate('Signup')}>
//           <Text style={[styles.footerText, styles.signupLink]}>Sign up</Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// }};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2D3748',
  
//     paddingHorizontal: 20,
//     paddingTop: 70,
//   },
//   title: {
//     fontSize: 30,
//     color: 'yellow',
//     alignSelf: 'center',
//     marginBottom: 20,
//     textDecorationLine: 'underline',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     marginVertical: 8,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: 'grey',
//   },
//   button: {
//     backgroundColor: 'yellow',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 9,
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   buttonTextYellow: {
//     color: 'yellow',
//   },
//   footer: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   footerText: {
//     fontSize: 16,
//     color: 'white',
//   },
//   signupLink: {
//     fontWeight: 'bold',
//     color: 'yellow',
//   },
// });

// export default Login