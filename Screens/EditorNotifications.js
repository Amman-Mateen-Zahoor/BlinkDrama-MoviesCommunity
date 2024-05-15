import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const EditorNotifications = ({navigation}) => {
  const [projectData, setProjectData] = useState([]);


useEffect(()=>{
  console.log('I ma updated Project data',projectData)
},[projectData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(global.Url + '/api/Editor/ReceiveSentProject');
        const data = await response.json();
        console.log('I m project data !!!!!!!!!!!!!',data);
        setProjectData(data.Project);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    // <View><Text>sss</Text></View>

<ScrollView contentContainerStyle={styles.container}>
      {/* Render dynamic project views */}
      {projectData.map((project,index) => 
      <View key={project.SentProposal_ID} style={styles.projectContainer}>
    <Text style={styles.movieName}>{project.ProposalData.Movie_Name}</Text>
    <Text>ppopopopop{project.SentProposal_ID}</Text>
    <Text style={styles.director}>Directed by {project.ProposalData.Director}</Text>
    <Text style={styles.director}>Writer Name: {project.Writer_Name}</Text>
    <Image
      source={project.ProposalData.Image ? { uri: `${global.Url}/Images/${project.ProposalData.Image}` } : require('../Images/teefa.jpeg')}
      style={styles.image}
    />
    <TouchableOpacity style={styles.viewButton} onPress={() => { navigation.navigate('ShowView', project) }}>
      <Text style={styles.buttonText}>View Details</Text>
    </TouchableOpacity>
  </View>
    
    )}
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
