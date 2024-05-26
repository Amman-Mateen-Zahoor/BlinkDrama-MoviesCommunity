import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native-svg';

const EditorProjectHistory = () => {

    const [acceptedProject, setAcceptedProject] = useState([]);

    useEffect(() => {
        const fetchAcceptedProjectData = async () => {
            try {
                const response = await fetch(global.Url +`/api/Editor/HistoryAcceptedprojectByEditor?Editor_ID=1`);
                const data = await response.json();
                console.log('no data', data)
                const a = data.Project
                setAcceptedProject(a);
                console.log('no data projectttttttttttttt', data.Project)
                console.log('no data projectttttttttttttt', data.Project[0].ProposalData)
                
            } catch (error) {
                console.error('Error fetching proposal data:', error);
            }
        };

        fetchAcceptedProjectData();
    }, []);


  return (
    <View>
       <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Accepted Project History</Text>
            {acceptedProject.map((acceptedProject, index) => (
                
                <View style={styles.proposalContainer} key={index}>
                    <Text style={styles.text}>Movie Name: {acceptedProject.ProposalData.Movie_Name}</Text>
                    <Text style={styles.text}>Director: {acceptedProject.ProposalData.Director}</Text>
                    <Text style={styles.text}>Type: {acceptedProject.ProposalData.Type}</Text>
                    <Image 
      source={acceptedProject.ProposalData.Image ? { uri: `${global.Url}/Images/${acceptedProject.ProposalData.Image}` } : require('../Images/teefa.jpeg')}

    style={styles.image}
            />
                    <View>
       
        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity></View>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#1A202C',
        paddingVertical: 20,
        paddingHorizontal: 10,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#FFFFFF', // White color
    },
    proposalContainer: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#FFFFFF', // White color
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333333', // Dark gray color
    },
});


export default EditorProjectHistory