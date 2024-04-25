// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import SearchForVideos from '../Screens/SearchForVideos';
// import VideoPlayer from './VideoPlayer';
// // import { createStore } from 'redux';
// // import { createStore } from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
// import { Provider } from 'react-redux';
// import { reducer } from './Reducer'

// const store = configureStore(reducer);

// // const Store = createStore(reducer);
// const Stack = createNativeStackNavigator();


// function AppStack() {
//   return (
//     // <Stack.Navigator initialRouteName='search'>
//     //   <Stack.Screen name='search' component={SearchForVideos} />
//     //   <Stack.Screen name='Player' component={VideoPlayer} />
//     // </Stack.Navigator>
//   );
// }

// export default function VideoNavigation() {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//       {/* <AppStack /> */}
//       <Stack.Navigator initialRouteName='search'>
//       <Stack.Screen name='search' component={SearchForVideos} />
//       <Stack.Screen name='Player' component={VideoPlayer} />
//     </Stack.Navigator>


//     </NavigationContainer>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({});

import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchForVideos from '../Screens/SearchForVideos';
// import VideoPlayer from './VideoPlayer';
// import ShowingWritreCliping from './ShowingWritreCliping';
import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
import {Provider,useSelector} from 'react-redux'
import { reducer } from './Reducer';
import AcceptProposal from './AcceptProposal';


const store = configureStore({ reducer });
const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName='search'>
      <Stack.Screen name='search' options={{headerShown:false}} component={SearchForVideos} />
      <Stack.Screen name='Player' options={{headerShown:false}} component={VideoPlayer} />
      <Stack.Screen name='ShowWriterClips' options={{headerShown: false}} component={ShowingWritreCliping}/>
      <Stack.Screen name='Accepted' options={{headerShown:false}} component={AcceptProposal}/>
    </Stack.Navigator>
  );
}

export default function VideoNavigation() {
  return (
    // <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    // </Provider>
  );
}

const styles = StyleSheet.create({});




