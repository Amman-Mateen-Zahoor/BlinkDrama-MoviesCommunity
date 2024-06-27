
import { View, Text, TextInput, StyleSheet, Touchable, TouchableOpacity,Pressable,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ArrowRightIcon } from 'react-native-heroicons/outline'
import WriterMainScreen from './WriterMainScreen'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({navigation}) {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [id,SetId]= useState('')
  const[readerId,SetReaderID]=useState()

  
  

  

const login = async () => {
  try {
    const response = await fetch(global.Url + `/api/User/Login?email=${email}&password=${password}`);
    const data = await response.json();
    console.log('Login data:', data);

    
    if (data.Role === 'Writer') {
      const writerId = data.UserData.Writer_ID;
      console.log('Writer ID:', writerId);
      SetId(writerId)
      global.wId=writerId
      console.log(`${global.wId}`,'oioioioi')

      const user= data.UserData.Email
      console.log('user',user)
      global.Wname=user
      console.log(`${global.Wname}`,'WNAMEEEEEEEEEEEee')

      const password= data.UserData.Password
      console.log('user',password)
      global.Wpassword=password
      console.log(`${global.Wpassword}`,'WNAMEEEEEEEEEEEeepasssss')

      navigation.navigate('Home2',  {writerId} );
    }
    
    
    else if (data.Role === 'Editor') {
      const user= data.UserData[0].Editor_ID
      console.log('user',user)
      global.EId=user
      console.log(`${global.EId}`,'WNAMEEEEEEEEEEEee')

      navigation.navigate('EditorMainScreen', data);
    } 
    else if (data.Role === 'Admin') {
      navigation.navigate('admin', data);
    } 
    
    else if (data.Role === 'Reader') {
      console.log('baaaalllaaannncceee',data.UserData[0].Balance)
      const ReaderId=data.UserData[0].Reader_ID;
      global.Readerid=ReaderId
      console.log('readeerr Iddd',`${global.Readerid}`)

      const Readeremail=data.UserData[0].Email;
      global.Readeremail=Readeremail
      console.log('readeerr Iddd',`${global.Readeremail}`)

      const Readerpassword=data.UserData[0].Password;
      global.Readerpassword=Readerpassword
      console.log('readeerr Iddd',`${global.Readerpassword}`)

      if(data.UserData[0].Balance==null){
      navigation.navigate('ReadersTab', data);
    }
    else
    {
      navigation.navigate('paidtab', data);
    }
    }
    else {
      console.log('Invalid role:', data.Role);
      alert(JSON.stringify(data));
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Error occurred while logging in.');
  }
};




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
     <View>
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
