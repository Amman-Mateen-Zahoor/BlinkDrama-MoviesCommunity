import { View,Image, Text, StyleSheet, Touchable, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {WebView} from 'react-native-webview';



const ReaderPaidHome = ({navigation}) => {

  const[image,SetImage]=useState('')
    const[mname,SetMname]=useState('')
    const[mid,SetMId]=useState('')
    const[type,SetType]= useState('')
    const [acceptedProject, setAcceptedProject] = useState([]);
    const [projectimage,SetProjectImage]= useState('')
    const fetchAcceptedProjectData = async () => {
      try {
          const response = await fetch(global.Url +`/api/Editor/HistoryAcceptedprojectByEditor?Editor_ID=1`);
          const data = await response.json();
          console.log('no data', data)
          const a = data.Project
          setAcceptedProject(a);
          SetMId()
          console.log('no data projectttttttttttttt 1', data.Project)
          console.log('useeeestaattttee',acceptedProject)
          const pimage= data.Project[0].ProposalData.Image
          console.log('no data projectttttttttttttt 2', pimage)
          SetProjectImage(pimage)
          
      } catch (error) {
          console.error('Error fetching proposal data:', error);
      }
  };
    const login = async () => {
        try {
          const response = await fetch(global.Url + `/api/Reader/IssueFreeMovie?readerId=1560688237`);
          const data = await response.json();
          console.log('Login data:', data);
          if(data!=null){
            const m = data.Movie.Movie_ID;
            SetMovie(m)
          console.log('movie id',m)
          const n = data.Movie.Name;
            SetMname(n)
          console.log('movie name',n)
          const i = data.Movie.Image;
            SetImage(i)
          console.log('movie imgg',i)
          const t = data.Movie.Type;
            SetType(t)
          console.log('Type',t)



      }  } catch (error) {
          console.error('Login error:', error);
          alert('Error occurred while logging in.');
        }
      };
      const[movie,SetMovie]=useState('')
            useEffect(()=>{
login()
fetchAcceptedProjectData()

      },[movie])
  return (
    <View style={styles.container}>
        <View contentContainerStyle={styles.proposalContainer}>
            <Text style={styles.title}>Home</Text>
                <View style={styles.proposalContainer} >
                <TouchableOpacity onPress={()=>navigation.navigate('readerfreeshow',movie)}><View >
    <View style={styles.view1}>
      <Text style={styles.text2}>
        Top Rated Movie</Text>
        <View style={styles.view2}>
          <View style={{paddingLeft:28}}>
          {/* <Image source={require('../Images/teefa.jpeg')} 
          style={styles.image}
          />
           */}
            <Image source={image ? { uri: `${global.Url}/Images/${image}` } : require('../Images/teefa.jpeg')} 
          style={styles.image}
          />
          </View>
          <View style={{paddingLeft:20}}>
            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:1}}>
            Name:{mname} 
            </Text>
            <Text style={{fontSize:18,fontWeight:'bold',paddingTop:2}}>
            Type:  {type} 
            </Text>
            <View style={{flexDirection:'row'}}>
            <TouchableHighlight><Text style={{color:'yellow',borderRadius:12,fontSize:28}}><Text style={{color:'gray'}}>Rating:</Text></Text></TouchableHighlight>
            <Text style={{color:'yellow',borderRadius:12,fontSize:30}}> * * * * </Text>  
            </View>
            </View>
        </View>
    </View>
    </View>
    </TouchableOpacity>       
                </View>
            
        </View>
      
      <View style={styles.RowView}>
      <TouchableOpacity><Text style={styles.RowText}>Top Pick For You                                        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Seeallbtnpaid')}
      ><Text>See All</Text></TouchableOpacity>
      </View>
<View>
<ScrollView contentContainerStyle={styles.container} horizontal={true}>
            
            {acceptedProject.map((acceptedProject, index) => (
                <View style={styles.proposalContainer} key={index}>
                    <Image source={acceptedProject.ProposalData.Image ? { uri: `${global.Url}/Images/${acceptedProject.ProposalData.Image}` } : require('../Images/teefa.jpeg')} 
          style={styles.image}
          />
          <Text style={{color:'yellow'}}>{acceptedProject.ProposalData.Movie_Name}</Text>
          <Text style={{color:'yellow'}}>{acceptedProject.Movie_ID}</Text>

          <TouchableOpacity style={styles.button} onPress={()=>{{navigation.navigate('paidShowMovie',{ Movie_ID: acceptedProject.Movie_ID })}}} >
        <Text style={styles.buttonText}>view</Text>
        </TouchableOpacity>
                    <View>
 
 </View>
                
                </View>
            ))}
        </ScrollView>
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
        backgroundColor: '#1A202C', // White color
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333333', // Dark gray color
    }, text:{
        marginTop:20,alignSelf:'center',color:'yellow',fontSize:30,textDecorationLine:'underline',marginBottom:30
        },
        view1:{ 
        paddingTop:13,backgroundColor:'#333333',borderRadius:50,
        }
        ,
        
        text2:{
         color:'yellow',alignSelf:'center',paddingBottom:10,fontSize:20,fontWeight:'bold'        
        },
        view2:{
        flexDirection:'row'
        },
        image: {
        width: 80,
        height: 120,
        borderRadius: 10, // example border radius
        resizeMode: 'cover', // example resizeMode
        },
        textContent:{
        paddingStart:10,
        fontSize:20
        },
        RowView:{
flexDirection:'row',
borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        },
        RowText:{
          fontSize: 15,
          fontWeight: 'bold',
        },
        button: {
      
          backgroundColor: 'yellow',
          paddingVertical: 4,
          paddingHorizontal: 12,
          borderRadius: 29,
          alignSelf:'center'
        },
        buttonText: {
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
        },
});

export default ReaderPaidHome