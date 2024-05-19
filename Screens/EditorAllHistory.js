import { View, Text, StyleSheet, Touchable, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UserCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/outline';

const EditorAllHistory = () => {
    const [proposals, setProposals] = useState([]);
    const [visible1,SetVisible1]= useState(false);
    const [visible2,SetVisible2]= useState(false);

    useEffect(() => {
        const fetchProposalData = async () => {
            try {
                const response = await fetch(global.Url + '/api/Editor/ShowSentProposals?editorId=1');
                const data = await response.json();
                // console.log('no data', data)
                setProposals(data);
            } catch (error) {
                console.error('Error fetching proposal data:', error);
            }
        };

        fetchProposalData();
    }, []);

    const [acceptedProject, setAcceptedProject] = useState([]);

    useEffect(() => {
        const fetchAcceptedProjectData = async () => {
            try {
                const response = await fetch(global.Url +`/api/Editor/HistoryAcceptedprojectByEditor?Editor_ID=1`);
                const data = await response.json();
                console.log('no data', data)
                const a = data.Project
                setAcceptedProject(a);
                // console.log('no data projectttttttttttttt', data.Project)
                // console.log('no data projectttttttttttttt', data.Project[0].ProposalData)
                
            } catch (error) {
                console.error('Error fetching proposal data:', error);
            }
        };

        fetchAcceptedProjectData();
    }, []);


  return (
    <View style={styles.container}> 
        
      <Text style={styles.title}>H i s t o r y</Text>
      <View style={styles.proposalContainer} >
         <TouchableOpacity onPress={()=>SetVisible1(true)}>
      <Text style={styles.text}>All Proposals </Text></TouchableOpacity>
      <Modal
      transparent={false}
      visible={visible1}
      animationType='slide'
      >


      <ScrollView contentContainerStyle={styles.container}>
         <TouchableOpacity onPress={()=>SetVisible1(false)}>
      <ArrowLeftIcon size={30} color='yellow' / > 
      </TouchableOpacity>
            <Text style={styles.title}>Proposal History</Text>
            {proposals.map((proposal, index) => (
                <View style={styles.proposalContainer} key={index}>
                    <Text style={styles.text}>Proposal ID: {proposal.SentProposal_ID}</Text>
                    <Text style={styles.text}>Writer ID: {proposal.Writer_ID}</Text>
                    <Text style={styles.text}>Writer Name: {proposal.WriterName}</Text>
                    <Text style={styles.text}>Movie Name: {proposal.Movie_Name}</Text>
                    <Text style={styles.text}>Type: {proposal.Type}</Text>
                    {/* <Text style={styles.text}>Genre: {proposal.Genre}</Text> */}
                    <Text style={styles.text}>Due Date: {proposal.DueDate}</Text>
                    <Text style={styles.text}>Status: {proposal.Status}</Text>
                </View>
            ))}
        </ScrollView>

      </Modal>
      </View>
      <View style={styles.proposalContainer} >
      <TouchableOpacity onPress={()=>SetVisible2(true)}>
      <Text style={styles.text}>All Accepted Projects </Text></TouchableOpacity>
      <Modal
      transparent={false}
      visible={visible2}
      animationType='slide'
      >

<ScrollView contentContainerStyle={styles.container}>
<TouchableOpacity onPress={()=>SetVisible2(false)}>
      <ArrowLeftIcon size={30} color='yellow' / > 
      </TouchableOpacity>
            <Text style={styles.title}>Accepted Project History</Text>
            {acceptedProject.map((acceptedProject, index) => (
                <View style={styles.proposalContainer} key={index}>
                    <Text style={styles.text}>Movie Name: {acceptedProject.ProposalData.Movie_Name}</Text>
                    <Text style={styles.text}>Director: {acceptedProject.ProposalData.Director}</Text>
                    <Text style={styles.text}>Type: {acceptedProject.ProposalData.Type}</Text>
                    <View>
       
        <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity></View>
                </View>
            ))}
        </ScrollView>
      </Modal>

      </View>
      
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
});


export default EditorAllHistory