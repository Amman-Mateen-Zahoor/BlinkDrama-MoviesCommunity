import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const EditorNotifications = ({navigation}) => {
  const [projectData, setProjectData] = useState([]);


useEffect(()=>{
  console.log('I ma updated Project data//////////',projectData)
},[projectData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(global.Url + `/api/Editor/ReceiveSentProject?Editor_ID=${global.EId}`);
        const data = await response.json();
        console.log('I m project data !!!!!!!!!!!!!',data);
        setProjectData(data);
        

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
   
<View style={styles.container}>
<Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    }}> Send Projects By Writers </Text>
<ScrollView contentContainerStyle={styles.container}>
  
      {/* Render dynamic project views */}
      {projectData.map((projectData,index) => 
      <View key={projectData.SentProposal_ID} style={styles.projectContainer}>
    <Text style={styles.movieName}>{projectData.ProposalData.Movie_Name}</Text>
    <Text>ppopopopop{projectData.SentProposal_ID}</Text>
    <Text style={styles.director}>Directed by {projectData.ProposalData.Director}</Text>
    <Text style={styles.director}>Writer Name: {projectData.Writer_Name}</Text>
    <Image
      source={projectData.ProposalData.Image ? { uri: `${global.Url}/Images/${projectData.ProposalData.Image}` } : require('../Images/teefa.jpeg')}
      style={styles.image}
    />
    <TouchableOpacity style={styles.viewButton} onPress={() => { navigation.navigate('ShowView', projectData) }}>
      <Text style={styles.buttonText}>View Details</Text>
    </TouchableOpacity>
  </View>
    
    )}
{/*     
    {projectData.map((projectData,index)=>
      <View key={index}><Text>{projectData.Movie_ID}</Text></View>
    )}  */}
    
    </ScrollView>
    </View>
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
