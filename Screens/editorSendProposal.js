// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity,Button,ScrollView, TouchableHighlight } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list';
// import { ChevronDoubleDownIcon, SearchIcon, UserCircleIcon,ArrowRightIcon } from 'react-native-heroicons/outline';
// import DateTimePicker from '@react-native-community/datetimepicker'
// import CheckBox from '@react-native-community/checkbox';
// import DropDownPicker from 'react-native-dropdown-picker';

// var url =''

// const EditorSendProposal = () => {
//  const [director,setDirector]=useState('')
//  const [catagory,setCatagory]=useState('comedy')

//   const [selectedWriter, setSelectedWriter] = useState('');
//   const Writer = [
//     { key: '1', value: 'Wrong No' },
//     { key: '2', value: 'War' },
//     { key: '3', value: 'Jalebi' },
//   ];
  
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState([]);
//   const [items, setItems] = useState([
//     {label: 'Comedy', value: 'Comedy'},
//     {label: 'Horror', value: 'Horrror'},
//     {label: 'Sci-fi', value: 'Sci-fi'},
//     {label: 'Action', value: 'Action'},
//     {label: 'Thriler', value: 'Thriler'},
  
//   ]);

//   const [date, setDate] = useState(new Date());
//   const [showPicker, setShowPicker] = useState(false);
//   const [selectedMovie, setSelectedMovie] = useState('');
//   const [SelectedWriter,setSelecteWriter]=useState([])
//   const [Movies,setMovies]=useState([])
//   useEffect(()=>{
//     const login=async()=>{
//       const responce= await fetch(global.Url +`/api/Editor/GetAllMovies`)
//       const data= await responce.json()
//       console.log(data)
//       setMovies(data)
//     }
//       login()
//   },[])
//   useEffect(()=>{
//     const login=async()=>{console.log(catagory)

//       const responce= await fetch(global.Url + `/api/Writer/GetWriterAccordingToGenre?movieGenre=${catagory}`)
//       console.log(catagory)
//       const data= await responce.json()
//       console.log(data)
//       setSelecteWriter(data)
//     }
//       login()
//   },[catagory])

//   const sendData = async () => {
//     const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
//     const encodedMovieName = encodeURIComponent(selectedMovie[0].value);
//     const encodedDirector = encodeURIComponent(director);
    
//     const response = await fetch(
//       `${global.Url}/api/Editor/perpossal?MoviName=${encodedMovieName}&director=${encodedDirector}&DueDate=${formattedDate}`
//     );
//     const data = await response.json();
//     console.log(data);
//   };
  

//   // const sendData=async()=>{
//   //   // const formattedDate = date.toISOString().split('T')[0];
//   //   const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;


//   //   const responce= await fetch
//   //   (global.Url +`/api/Editor/perpossal?MoviName
//   //   =${selectedMovie[0].value}&director=${director}&DueDate=${formattedDate}`)
//   //     console.log(catagory)
//   //     const data= await responce.json()
//   //     console.log(data)
    

//   // }
//   // Function to handle changes in the datetime picker's value
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     // Close the picker on iOS, as it has its own handling

//     setShowPicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   // Function to show the datetime picker
//   const showDatepicker = () => {
//     setShowPicker(true);
//   };
  
//   const [isEditable, setIsEditable] = useState(false);

//   const [selectedDrama, setSelectedDrama] = useState('');
//   const dramas = [
//     { 'key': 1, value: 'Wrong No' },
//     { 'key': 2, value: 'War' },
//     { 'key': 3, value: 'Jalebi' },
//   ];

//   return (
//     <View style={{ backgroundColor: '#2D3748', flex: 1 }}>
//       <Text>editorSendProposal</Text>
//       <Text style={styles.text1}>Send Proposals</Text>

//       <SelectList placeholder='Select Movie/Drama' data={Movies} setSelected={(e)=>{
//         const data=Movies.filter((a)=>a.key==e)
//         console.log(data)
//         setSelectedMovie(data)
//         setDirector(data[0].Director)
//         setCatagory(data[0].Category)
//         }} />
      


//       <View style={{ position: 'relative' }}>
//         <Text
//           style={{
//             height: 40,
//             borderColor: 'gray',
//             borderWidth: 1,
//             paddingLeft: 40, // Add left padding to make space for the icon
//           }}
//           >{director}</Text>
//         <TouchableOpacity
//           style={{
//             position: 'absolute',
//             top: 5, // Adjust the top position as needed
//             left: 5, // Adjust the left position as needed
//           }}
//           onPress={() => {
//             // Handle button press
//           }}
//         >
//        <UserCircleIcon size={24} color='white'/>
//         </TouchableOpacity>
//       </View>
//       <View>
//       {/* Button to trigger the datetime picker */}
//       <Button onPress={showDatepicker} title="Deadline"  color='red' />
      
//       {/* Conditional rendering of the datetime picker based on showPicker state */}
//       {showPicker && (
//         <DateTimePicker
//           value={date}
//           mode="date" // You can set mode to 'date' or 'time' as well
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />

//       )}
//     </View>
//     <View>
//       <Text>{catagory}</Text> 
//     </View>
//    <View><SelectList placeholder='Select Writer' data={SelectedWriter} setSelected={setSelectedWriter} /></View>
//     <View style={{paddingTop:10}}>
//     <TouchableOpacity style={styles.button} onPress={()=>
//       {
//         sendData()
//       }}> 
//         <Text style={styles.buttonText}>Send<Text style={{color:"yellow", textAlign:'right'}}>.......</Text>
//         <Text style={{alignSelf:'flex-end'}}><ArrowRightIcon size={20} color='black'></ArrowRightIcon></Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
    
    
    
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   text1: {
//     marginTop: 20,
//     alignSelf: 'center',
//     color: 'yellow',
//     fontSize: 30,
//     textDecorationLine: 'underline',
//     marginBottom: 30,
//   },  button: {
//     marginBottom:150,
//     backgroundColor: 'yellow',
//     paddingVertical: 12,
//     paddingHorizontal: 50,
//     borderRadius: 9,
//     alignSelf:'center'

//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },

// });

// export default EditorSendProposal;



import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button,KeyboardAvoidingView ,Image,Modal,Pressable,TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { UserCircleIcon, ArrowRightIcon,BellIcon } from 'react-native-heroicons/outline';
import DateTimePicker from '@react-native-community/datetimepicker';
import EditoNotif from './EditorNotifications'
import { launchImageLibrary } from 'react-native-image-picker';





const EditorSendProposal = ({navigation,route}) => {
  const [director, setDirector] = useState('');
  const [category, setCategory] = useState('comedy');
  const [selectedWriter, setSelectedWriter] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [selectedWriters, setSelectedWriters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [refreshComponent, setRefreshComponent] = useState(false)
  const [image,SetImage]= 
  useState
  ('')
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(global.Url + '/api/Editor/GetAllMovies');
      const data = await response.json();
      console.log(data.Image)
      setMovies(data);
      console.log('moviesssssss',movies)
    };
    fetchData();
  }, [refreshComponent]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(global.Url + `/api/Writer/GetWriterAccordingToGenre?movieGenre=${category}`);
      const data = await response.json();
      console.log(data)
      setSelectedWriters(data);
      console.log(selectedWriters)
    };
    fetchData();
  }, [category]);

  // const sendData = async () => {
  //   const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  //   const encodedMovieName = encodeURIComponent(selectedMovie[0].value);
  //   const encodedDirector = encodeURIComponent(director);
  //   console.log(selectedWriter.key)
  //   const response = await fetch(
  //     `${global.Url}/api/Editor/perpossal?MoviName=${encodedMovieName}&director=${encodedDirector}&DueDate=${formattedDate}&status=sent&WriterId=3`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };


  const sendData = async () => {
    const formattedDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
    const encodedMovieName = encodeURIComponent(selectedMovie[0].value);
    const encodedDirector = encodeURIComponent(director);
    console.log(selectedWriter.key)
    
    try {
      const response = await fetch(
        `${global.Url}/api/Editor/perpossal?MoviName=${encodedMovieName}&director=${encodedDirector}&DueDate=${formattedDate}&status=sent&WriterId=3`
      );
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
  
      // Display alert with received data
      alert(JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error);
      // Display error alert
      alert('Error occurred while sending data.');
    }
  };
  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const[editorid,SetEditorId]=useState(3);
  const[writerid,SetWriterId]=useState(3);
 const[movieID,SetMovieId]=useState(0);
 const[movieName,SetMovieName]=useState('');
 const[genre,SetGenre]=useState('');
 const[type,SetType]=useState('');
 const[director1,setDirector1]=useState('');
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
    formData.append('Director', director1);
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
    SetVisible(false)
    setRefreshComponent(true)
    
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

  const [visible,SetVisible]=useState(false)


  return (
    <View style={styles.container}>
    <KeyboardAvoidingView style={styles.containerKey} behavior={Platform.OS === "ios" ? "padding" : null}>
    
      <View style={{flexDirection:'row'}}>
      <Text style={styles.heading}>Send Proposals</Text>
      <Text style={{paddingLeft:80}}></Text>
      {/* <TouchableOpacity onPress={()=>navigation.navigate('EditorNotif')}>
      <BellIcon size={50} color='yellow' / > 
      </TouchableOpacity> */}
      </View>
      <SelectList
        placeholder='Select Movie/Drama'
        data={movies}
        setSelected={(e) => {
          const data = movies.filter((a) => a.key === e);
          setSelectedMovie(data);
          console.log('I am selected '.selectedMovie)
          setDirector(data[0].Director);
          setCategory(data[0].Category);
          SetImage(data[0].Image)
          console.log(image)
        }}
      />
      <View style={styles.signUpContainer}>
        <Text style={styles.dontHaveAccount}>Don't have an Movie?</Text>
        <Pressable onPress={() => SetVisible(true)}>
          <Text style={styles.signUp}>Add</Text>
        </Pressable>
      </View>

      <Modal
      transparent={false}
      visible={visible}
      animationType='slide'
      >
        <View style={{flex:1,backgroundColor:'#2D3748'}}>
      <Text>ImageEditorSendProposal.</Text>
      <View>
        {/* <TextInput placeholder='MovieId'
        onChangeText={SetMovieId}></TextInput> */}
        <TextInput placeholder='Movie_Name'
        onChangeText={SetMovieName}></TextInput>
        <TextInput placeholder='Genre'
        onChangeText={SetGenre}></TextInput>
        <TextInput placeholder='Type'
        onChangeText={SetType}></TextInput>
        <TextInput placeholder='Director'
        onChangeText={setDirector}></TextInput>
        {/* <TextInput placeholder='Due_Date'
        onChangeText={SetDueDate}></TextInput> */}
        <View>
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
      </View>
      <View><TouchableOpacity onPress={()=>{
        Send()
      }}>
        <Text style={{color:'blue', fontSize:21}}> Send</Text>
        </TouchableOpacity></View>
    </View>
        </Modal>

       {/* <Image
      source={selectedMovie.Image ? { uri: `${global.Url}/Images/${selectedMovie.Image}` } : require('../Images/teefa.jpeg')} */}
<Image source={{ uri: `${global.Url}/Images/${image}` }} 
    style={styles.image}
            />
       <View style={{paddingTop:15}}>
      <View style={styles.inputContainer}>
        <Text>{director}</Text>
        <TouchableOpacity onPress={() => {}}>
          <UserCircleIcon size={24} color='white' />
        </TouchableOpacity>
      </View>
      </View>

      <View>
        <Button onPress={showDatepicker} title="Deadline" color='grey' />
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>

      <View>
        <Text>{category}</Text>
      </View>
<Text>add imagae</Text>
      <SelectList placeholder='Select Writer' data={selectedWriters} setSelected={setSelectedWriter} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={sendData}>
          <Text style={styles.buttonText}>Send<Text style={styles.dots}>.......</Text></Text>
          <ArrowRightIcon size={20} color='black' />
        </TouchableOpacity>
        
      </View>
      </KeyboardAvoidingView>
    </View>
    
  );
};
{/* #1A202C */}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A202C',
    flex: 1,
    padding: 20,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 10, // example border radius
    resizeMode: 'cover', // example resizeMode
    },
  containerKey: {
    backgroundColor: '#fffff',
    flex: 1,
    padding: 20,
  },
  heading: {
    marginTop: 20,
    alignSelf: 'center',
    color: 'yellow',
    fontSize: 30,
    textDecorationLine: 'underline',
    marginBottom: 30,
  },
  inputContainer: {
    
    position: 'relative',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop:10
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 5,
  },
  dots: {
    color: "yellow",
    textAlign: 'right',
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

export default EditorSendProposal;

