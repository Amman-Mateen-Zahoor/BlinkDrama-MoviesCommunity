
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import navigation from '../Navigation/Navigation'; // Ensure if this import is necessary and properly used

const NewAcceptWriter = ({ navigation ,route}) => {
  const [sentProposals, setSentProposals] = useState([]);
  const { writerId } = route.params || {};
  const[gId,SetGId]=useState(`${global.wId}`)
console.log(writerId)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(global.Url + `/api/Writer/ShowAcceptedProposals?Writer_ID=${gId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not in JSON format');
        }
        
        const data = await response.json();
        console.log('I am ShoProposal Data:', data);
        setSentProposals(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Accepted Proposals</Text>
      {sentProposals.map((proposal, index) => (
        <View style={styles.proposalContainer} key={index}>
          <Text style={styles.text2}>Write Summary</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.imageContainer}>
              {/* <Image source={require('../Images/teefa.jpeg')} style={styles.image} />
               */}

<Image
      source={proposal.Image ? { uri: `${global.Url}/Images/${proposal.Image}` } : require('../Images/teefa.jpeg')}

    style={styles.image}
            />
            </View>
            <View style={styles.details}>
              <Text style={styles.detailText}>Movie Name: {proposal.Movie_Name}</Text>
              <Text style={styles.detailText}>Director: {proposal.Director}</Text>
              <Text style={styles.detailText}>Due Date: {proposal.DueDate}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AcceptProposal',{proposal})}>
                  <Text style={styles.buttonText}>Write...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default NewAcceptWriter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3748',
    paddingBottom: 100,
    flexGrow: 1, // Ensure ScrollView content expands to fill available space
  },
  text: {
    marginTop: 20,
    alignSelf: 'center',
    color: 'yellow',
    fontSize: 30,
    textDecorationLine: 'underline',
    marginBottom: 30,
  },
  proposalContainer: {
    paddingTop: 13,
    backgroundColor: '#333333',
    borderRadius: 50,
    marginBottom: 20,
  },
  text2: {
    color: 'yellow',
    alignSelf: 'center',
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  imageContainer: {
    paddingLeft: 28,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  details: {
    paddingLeft: 20,
    flex: 1,
  },
  detailText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 9,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
