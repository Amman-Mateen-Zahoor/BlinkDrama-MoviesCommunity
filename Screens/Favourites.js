
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import navigation from '../Navigation/Navigation'; // Ensure if this import is necessary and properly used

const Favourites = ({ navigation ,route}) => {
  const [sentProposals, setSentProposals] = useState([]);
  const[movieId,SetMovieId]=useState()
  const[writerId,SetWriterId]=useState()
    const [visible,SetVisible]=useState(false)
    const [summary,SetSummary] = useState('Summary DAta')
    const [clips, setClips] = useState([
      // "https://www.youtube.com/embed/VO0D7RpMhCc?start=0&end=20",
      // "https://www.youtube.com/embed/VO0D7RpMhCc?start=220&end=230"
      // Add more URLs as needed
    ]);
    const videoIds = clips.map(clip => clip.clip);
    const startTimes = clips.map(clip => clip.Start_time);
    const endTimes = clips.map(clip => clip.End_time);
    console.log('VideoIds:', videoIds);
    console.log('videoliength',videoIds.length)
    console.log('StartTimes:', startTimes);
    console.log('EndTimes:', endTimes);
    const [currentIndex, setCurrentIndex] = useState(0);
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
      const source = {
    html: `
  
    ${summary}
`
  };
  
  const { width } = useWindowDimensions();
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
   
  const[s,SetS]=useState('')

//   const showFreeMovie = async () => {
//     try {
    
//       const response = await fetch(global.Url + `/api/editor/ViewSentProject?Movie_ID=${s}`);
//       const data = await response.json();
//       console.log('View Project dataaaaaa:', data);
//       const summarydata= data.Summary[0].Summary1;
//     SetSummary(summarydata)
//     const urlse = data.Clips
//     setClips(urlse)
//     SetData(urlse)
//    console.log('clipsssssssssssss',clips)       
//     } catch (error) {
//       //console.error('Login error:', error);
//       console.log('Error occurred while logging in.');
//     }
//   };



  
  const fetchData = async () => {
    try {
      const response = await fetch(global.Url + `/api/Reader/GetFavoriteDetails?Reader_ID=${global.Readerid}`);
      
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
      const mid=data[0].MovieId
      SetS(mid)
      console.log('sssssss',mid)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  useEffect(() => {
    
    
    fetchData();
  }, []);
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Favourites</Text>
      {sentProposals.map((proposal, index) => (
        <View style={styles.proposalContainer} key={index}>
          <Text style={styles.text2}>Favourite</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.imageContainer}>
              {/* <Image source={require('../Images/teefa.jpeg')} style={styles.image} />
               */}

{/* <Image
      source={proposal.Image ? { uri: `${global.Url}/Images/${proposal.Image}` } : require('../Images/teefa.jpeg')}

    style={styles.image}
            /> */}
            </View>
            <View style={styles.details}>
              <Text style={styles.detailText}>Movie Name: {proposal.MovieTitle}</Text>
              <Text style={styles.detailText}>Director: {proposal.Director}</Text>
              <Text style={styles.detailText}>Writer_Name: {proposal.WriterName}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('readerfreeshow',s)}>
                  <Text style={styles.buttonText}>View...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Favourites;

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
