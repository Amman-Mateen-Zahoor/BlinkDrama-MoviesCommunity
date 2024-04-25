// import { ScrollView, StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native'
// import React, { useEffect, useState } from 'react'


// const EditorNotifications = () => {
//   const[sendEditor,SetSendEditor]=useState({})
//   const[ScreenData,setScreenData]=useState({})
//   useEffect(()=>{
//     const login=async()=>{
//       const responce= await fetch(global.Url + `/api/Editor/ReceiveSentProject`)
//       const data= await responce.json()
//       console.log(data)
//       console.log(data.Project[0].ProposalData.Movie_Name)
//       setScreenData(data.Project[0].ProposalData)
//       SetSendEditor(data)
      
//     }
//     login()
//   },[])
//   return (
    
//  <View style={{backgroundColor:'#2D3748', flex:1}}>
//  <View style={{paddingTop:20}}>
//     <View style={style.view1}>
//       <Text style={style.text2}>
//          Summary</Text>
//         <View style={style.view2}>
//           <View style={{paddingLeft:28}}>
//           <Image source={require('../Images/teefa.jpeg')} 
//           style={style.image}
//           />
//           </View>
//           <View style={{paddingLeft:20}}>
//             <Text style={{fontSize:18,fontWeight:'bold',}}>
              
//             {ScreenData?.Movie_Name}
//             </Text>
//             <Text style={{fontSize:18,fontWeight:'bold',}}>
//             Director : {ScreenData?.Director}
//             </Text>
//             {/* <Text style={{fontSize:18,fontWeight:'bold',}}>
//             Due Date : 20/4/2023 
//             </Text> */}
           
//             <View><TouchableOpacity style={style.button}>
//         <Text style={style.buttonText}>View</Text>
//         </TouchableOpacity></View>
//     </View>
//         </View>
//     </View>
//     </View>
//     <View/>
//     </View>

//   )
// }

// export default EditorNotifications

// const style =StyleSheet.create({
//     text:{
//     marginTop:20,alignSelf:'center',color:'yellow',fontSize:30,textDecorationLine:'underline',marginBottom:30
//     },
//     view1:{ 
//     paddingTop:13,backgroundColor:'#333333',borderRadius:50,
//     }
//     ,
    
//     text2:{
//      color:'yellow',alignSelf:'center',paddingBottom:10,fontSize:20,fontWeight:'bold'        
//     },
//     view2:{
//     flexDirection:'row'
//     },
//     image: {
//     width: 80,
//     height: 120,
//     borderRadius: 10, // example border radius
//     resizeMode: 'cover', // example resizeMode
//     },
//     textContent:{
//     paddingStart:10,
//     fontSize:20
//     },
//     button: {
//         marginBottom:150,
//         backgroundColor: 'yellow',
//         paddingVertical: 12,
//         paddingHorizontal: 50,
//         borderRadius: 9,
//         alignSelf:'center'
      
//       },
//       buttonText: {
//         color: 'black',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//       },
//     }
//       )
  



import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const EditorNotifications = ({navigation}) => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(global.Url + '/api/Editor/ReceiveSentProject');
        const data = await response.json();
        console.log('I m project data',data);
        setProjectData(data.Project);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // const ViewData = () => {
  //   return (
  //     // navigation.navigate('ShowView',projectData)
  //   );
  // }
  

  // Function to render dynamic project view
  // const renderProjectView = (project) => {
  //   return (
  //     <View key={project.SentProposal_ID} style={styles.projectContainer}>
  //       <Text style={styles.movieName}>{project.ProposalData.Movie_Name}</Text>
  //       <Text style={styles.director}>Directed by {project.ProposalData.Director}</Text>
  //       <Image
  //         source={require('../Images/teefa.jpeg')}
  //         style={styles.image}
  //       />
  //       <TouchableOpacity style={styles.viewButton} 
  //       onPress={()=>{navigation.navigate('ShowView')}}
  //       >
  //         <Text style={styles.buttonText}>View Details</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    //   {/* Render dynamic project views */}
    //   {projectData.map((project) => renderProjectView(project))}
    // </ScrollView>
<ScrollView contentContainerStyle={styles.container}>
      {/* Render dynamic project views */}
      {projectData.map((project,index) => <View key={project.SentProposal_ID} style={styles.projectContainer}>
        <Text style={styles.movieName}>{project.ProposalData.Movie_Name}</Text>
        <Text style={styles.director}>Directed by {project.ProposalData.Director}</Text>
        <Image
          source={require('../Images/teefa.jpeg')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.viewButton} 
        onPress={()=>{navigation.navigate('ShowView',project)}}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>)}
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A202C',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  projectContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    elevation: 3,
  },
  movieName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  director: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default EditorNotifications;
