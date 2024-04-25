import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet,TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const interestsData = [
  { id: 1, label: 'Comedy' },
  { id: 2, label: 'Horror' },
  { id: 3, label: 'Action' },
  { id: 4, label: 'Sci-fi' },
  { id: 5, label: 'Fantasy' },
  { id: 6, label: 'Drama' },
  { id: 7, label: 'Thriller' },
  { id: 8, label: 'Crime' },
  { id: 9, label: 'Romantic' },
  { id: 10, label: 'Animation' },
  { id: 11, label: 'Historical' }
  // Add more interests as needed
];

const Interest = ({navigation}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interestId) => {
    let updatedInterests = [...selectedInterests];
    if (updatedInterests.includes(interestId)) {
      updatedInterests = updatedInterests.filter(id => id !== interestId);
    } else {
      updatedInterests.push(interestId);
    }
    setSelectedInterests(updatedInterests);
  };

  return (
    <View style={{backgroundColor:'#2D3748', flex:1}}>
        <Text style={style.text}>Select Interest</Text>
    <ScrollView contentContainerStyle={style.container}> 
      {interestsData.map(interest => (
        <View key={interest.id} style={style.interestContainer}>
          <CheckBox
            value={selectedInterests.includes(interest.id)}
            onValueChange={() => toggleInterest(interest.id)}
          />
          <Text style={style.interestText}>{interest.label}</Text>
        </View>
      ))}
    </ScrollView>
    <TouchableOpacity style={style.button} onPress={()=>navigation.navigate("WriterMainScreen")}> 
        <Text style={style.buttonText}>Submit<Text style={{color:"yellow", textAlign:'right'}}>.......</Text>
        {/* <Text style={{alignSelf:'flex-end'}}><ArrowRightIcon size={20} color='black'></ArrowRightIcon></Text> */}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const style=StyleSheet.create({
    text:{textDecorationLine:'underline' ,fontSize:30, color:'yellow',alignSelf:'center',marginTop:20},
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 20,
      },
      interestContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
      },
      interestText: {
        marginLeft: 10,
        fontSize: 16,
      },
      button: {
        marginBottom:150,
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
})

export default Interest;
