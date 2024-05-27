import React,{createContext , useState , useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// 
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Interest from './Screens/Interest';
import WriterMainScreen from './Screens/WriterMainScreen';
import EditorSendProposal from './Screens/editorSendProposal';
import AcceptProposal from './Screens/AcceptProposal';
import SendSummary from './Screens/SendSummary';
import EditorNotifications from './Screens/EditorNotifications';
import WriterDrawer from './Screens/WriterDrawer';
import EditorDrawer from './Screens/EditorDrawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import newAcceptWriter from './Screens/newAcceptWriter';
import { TableCellsIcon } from 'react-native-heroicons/outline';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Fontisto from 'react-native-vector-icons/dist/Fontisto';
import WriterNotifications from './Screens/WriterNotifications';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import ShowingWritreCliping from './Screens/ShowingWritreCliping';
import VideoPlayer from './Screens/VideoPlayer';
import SearchForVideos from './Screens/SearchForVideos'
import VideoNavigation from './Screens/VideoNavigation';
import EditorShowView from './EditorShowView';
import TestScreen from './Screens/TestScreen';
import TestScreenNo2 from './Screens/TestScreenNo2';
import ShowCommnent from './Screens/ShowCommnent';
import EditorAllHistory from './Screens/EditorAllHistory';
import ReaderShowFreeMovie from './Screens/ReaderShowFreeMovie';
import ReaderHome from './Screens/ReaderHome';
import ReaderDrawer from './Screens/ReaderDrawer';
import ReaderSeeAllBtn from './Screens/ReaderSeeAllBtn';
import ReaderPaidHome from './Screens/ReaderPaidHome';
import ReaderSeeAllBtnPaid from './Screens/ReaderSeeAllBtnPaid';
import ReaderDrawerPaid from './Screens/ReaderDrwerPaid';
import ReaderShowPaidMovie from './Screens/ReaderShowPaidMovie';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const DataContext = createContext();

global.Url = 'http://192.168.0.105/BlinkBackend';



function AppStack() {
  
  return (
    
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
      <Stack.Screen name="SignupToLogin" options={{ headerShown: false }} component={Login} />
      <Stack.Screen name='Home1' options={{headerShown:false}} component={WriterMainScreen}/>
      <Stack.Screen name="LoginToInterest" options={{ headerShown: false }} component={Interest} />
      <Stack.Screen name='WriterMainScreen' options={{ headerShown: false }} component={WriterMainScreen} />
      <Stack.Screen name='EditorMainScreen' options={{ headerShown: false }} component={EditorAppTab} />
      <Stack.Screen name='AcceptProposal' options={{ headerShown: false }} component={AcceptProposal} />
      <Stack.Screen name='SendSummary' options={{ headerShown: false }} component={SendSummary} />
      <Stack.Screen name='EditorNotif' options={{ headerShown: false }} component={EditorNotifications} />
      <Stack.Screen name='VideoNavigation' options={{headerShown:false}} component={SearchForVideos}/>
      <Stack.Screen name='Player' options={{headerShown:false}} component={VideoPlayer} />
      <Stack.Screen name='ShowWriterClips' options={{headerShown: false}} component={ShowingWritreCliping}/>
      <Stack.Screen name='ShowView' options={{headerShown:false}} component={EditorShowView}/>
      <Stack.Screen name='test1' options={{headerShown:false}} component={TestScreen}/>
      <Stack.Screen name='test2' options={{headerShown:false}} component={TestScreenNo2}/>
      <Stack.Screen name='View' options={{headerShown:false}} component={ShowCommnent}/>
      <Stack.Screen name='Home2' options={{headerShown:false}} component={AppTab2}/>
      <Stack.Screen name='initial' options={{headerShown:false}} component={AppTab}/>
      <Stack.Screen name='ReaderShowFree' options={{headerShown:false}} component={ReaderHome}/>
      <Stack.Screen name = 'readerfreeshow' options={{headerShown:false}} component={ReaderShowFreeMovie}/>
      <Stack.Screen name='ReadersTab' options={{headerShown:false}} component={ReaderAppTab}/>
    <Stack.Screen name='Seeallbtn' options={{headerShown:false}} component={ReaderSeeAllBtn}/>
    <Stack.Screen name='Seeallbtnpaid' options={{headerShown:false}} component={ReaderSeeAllBtnPaid}/>
    <Stack.Screen name='paidhome' options={{headerShown:false}} component={ReaderPaidHome}/>
    <Stack.Screen name ='paidtab' options={{headerShown:false}} component={ReaderPaidAppTab}/>

    <Stack.Screen name='paidShowMovie' options={{headerShown:false}} component={ReaderShowPaidMovie}/>
    </Stack.Navigator>
   
    
  );
}
function VideoStack(){
  return(
<Stack.Navigator initialRouteName='SearchForVideos'>
  <Stack.Screen name='SearchForVideos' options={{headerShown:false}} component={SearchForVideos}/>
      <Stack.Screen name=
      'VideoPlayer' options={{headerShown : false}} component={VideoPlayer}/>
      <Stack.Screen name='ShowWriterClips' options={{headerShown: false}} component={ShowingWritreCliping}/>
</Stack.Navigator>
  );
}
function AppTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'yellow',
      tabBarInactiveTintColor:'blue',
      tabBarShowLabel:false,
      headerShown:false,
      headerPressColor:'yellow',
      tabBarStyle:{backgroundColor:'coral'}
    }}
    >
      <Tab.Screen name='Home1'
       options={{

       tabBarIcon:({color , size})=>
       (<Ionicons name="home" size={30} color="#900" />),
       
      }} 
      component={Login}/>
      <Tab.Screen name='Home2'
      options={{
        tabBarIcon:({color , size})=>(
        <Fontisto name="person" size={30} color="#900" />)
       }}
      component={WriterDrawer}/>  
      <Tab.Screen name='house6' 
      options={{
        tabBarIcon:({color , size})=>
        <Ionicons name="receipt" size={30} color="#900" />
       }}
      component={newAcceptWriter}/>
      <Tab.Screen name='WriterNotif' 
      options={{
        tabBarIcon:({color , size})=>(
        <Ionicons name="notifications" size={30} color="#900" />),
        tabBarBadge:3,
        tabBarBadgeStyle: {backgroundColor:'yellow'}
       }}
       
      component={WriterNotifications}/>
    </Tab.Navigator>
  );
}

function AppTab2() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'yellow',
      tabBarInactiveTintColor:'blue',
      tabBarShowLabel:false,
      headerShown:false,
      headerPressColor:'yellow',
      tabBarStyle:{backgroundColor:'coral'}
    }}
    >
      <Tab.Screen name='Home1' options={{

       tabBarIcon:({color , size})=>
       (<Ionicons name="home" size={30} color="#900" />),
       
      }} component={WriterMainScreen}/>
      <Tab.Screen name='Home3'
      options={{
        tabBarIcon:({color , size})=>(
        <Fontisto name="person" size={30} color="#900" />)
       }}
      component={WriterDrawer}/>  
      <Tab.Screen name='house6' 
      options={{
        tabBarIcon:({color , size})=>
        <Ionicons name="receipt" size={30} color="#900" />
       }}
      component={newAcceptWriter}/>
      <Tab.Screen name='WriterNotif' 
      options={{
        tabBarIcon:({color , size})=>(
        <Ionicons name="notifications" size={30} color="#900" />),
        tabBarBadge:3,
        tabBarBadgeStyle: {backgroundColor:'yellow'}
       }}
       
      component={WriterNotifications}/>
    </Tab.Navigator>
  );
}


function ReaderAppTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'yellow',
      tabBarInactiveTintColor:'blue',
      tabBarShowLabel:false,
      headerShown:false,
      headerPressColor:'yellow',
      tabBarStyle:{backgroundColor:'coral'}
    }}
    >
      <Tab.Screen name='ReaderHome1'
       options={{

       tabBarIcon:({color , size})=>
       (<Ionicons name="home" size={30} color="#900" />),
       
      }} 
      component={ReaderHome}/>
      <Tab.Screen name='Home2'
      options={{
        tabBarIcon:({color , size})=>(
        <Fontisto name="person" size={30} color="#900" />)
       }}
      component={ReaderDrawer}/>  
      <Tab.Screen name='house6' 
      options={{
        tabBarIcon:({color , size})=>
        <Ionicons name="receipt" size={30} color="#900" />
       }}
      component={newAcceptWriter}/>
      <Tab.Screen name='WriterNotif' 
      options={{
        tabBarIcon:({color , size})=>(
        <Ionicons name="notifications" size={30} color="#900" />),
        tabBarBadge:3,
        tabBarBadgeStyle: {backgroundColor:'yellow'}
       }}
       
      component={WriterNotifications}/>
    </Tab.Navigator>
  );
}

function ReaderPaidAppTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'yellow',
      tabBarInactiveTintColor:'blue',
      tabBarShowLabel:false,
      headerShown:false,
      headerPressColor:'yellow',
      tabBarStyle:{backgroundColor:'coral'}
    }}
    >
      <Tab.Screen name='ReaderHome1'
       options={{

       tabBarIcon:({color , size})=>
       (<Ionicons name="home" size={30} color="#900" />),
       
      }} 
      component={ReaderPaidHome}/>
      <Tab.Screen name='Home2'
      options={{
        tabBarIcon:({color , size})=>(
        <Fontisto name="person" size={30} color="#900" />)
       }}
      component={ReaderDrawerPaid}/>  
      <Tab.Screen name='house6' 
      options={{
        tabBarIcon:({color , size})=>
        <Ionicons name="receipt" size={30} color="#900" />
       }}
      component={newAcceptWriter}/>
      <Tab.Screen name='WriterNotif' 
      options={{
        tabBarIcon:({color , size})=>(
        <Ionicons name="notifications" size={30} color="#900" />),
        tabBarBadge:3,
        tabBarBadgeStyle: {backgroundColor:'yellow'}
       }}
       
      component={WriterNotifications}/>
    </Tab.Navigator>
  );
}





function EditorAppTab() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:'yellow',
      tabBarInactiveTintColor:'blue',
      tabBarShowLabel:false,
      headerShown:false,
      headerPressColor:'yellow',
      tabBarStyle:{backgroundColor:'coral'}
    }}
    >
      
      

      <Tab.Screen name='Home3'
       options={{
        tabBarIcon:({color , size})=>
       (<Ionicons name="home" size={30} color="#900" />),
       
       }}
      component={EditorSendProposal}/>

{/* <Tab.Screen name='Home8'
      options={{
        tabBarIcon:({color , size})=>(
        <Fontisto name="person" size={30} color="#900" />)
       }}
      component={WriterDrawer}/> */}

      <Tab.Screen name='Home4'
       options={{
        tabBarIcon:({color , size})=>(
        <MaterialIcons name="history" size={30} color="#900" />),
        
        tabBarBadgeStyle: {backgroundColor:'yellow'}
       }}
      component={EditorAllHistory}/>
      <Tab.Screen name='Home5' 
       options={{
        tabBarIcon:({color , size})=>(
        <Ionicons name="notifications" size={30} color="#900" />),
        tabBarBadge:3,
        tabBarBadgeStyle: {backgroundColor:'yellow'}
       }}
      component={EditorNotifications}/>
      

      
    </Tab.Navigator>
  );
}

function App() {
  
  
  return (
    <NavigationContainer>
      <AppStack />
      {/* <VideoStack/> */}
    </NavigationContainer>
  );
}

export default App;
