import { View,Image, Text, StyleSheet, Touchable,TextInput, TouchableOpacity, TouchableHighlight, ScrollView
  ,FlatList,ActivityIndicator
 } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import {useTheme} from '@react-navigation/native'
import MiniCard from '../Screens/MiniCard'
import ReaderSearchPaid from './ReaderSearchPaid';


const ReaderPaidHome = ({navigation}) => {


  const {colors} =  useTheme()
  const [value,setValue] = useState("")
  const [miniCardData,setMiniCard] = useState([])
  const [loading,setLoading] = useState(false)
  const[image,SetImage]=useState('')
    const[mname,SetMname]=useState('')
    const[mid,SetMId]=useState('')
    const[type,SetType]= useState('')
    const [acceptedProject, setAcceptedProject] = useState([]);
    const [acceptedProject1, setAcceptedProject1] = useState([]);

    const [projectimage,SetProjectImage]= useState('')

    const fetchData = async () => {
      
      
      try {
        const response = await fetch(global.Url +`/api/Reader/GetAllMovies?genre=${value}&searchTerm=${value}`);
        const data = await response.json();
        console.log('no data', data)
        const a = data
        setMiniCard(a)
        console.log('lllllllll',miniCardData)        
    
        
    } catch (error) {
        console.error('Error fetching proposal data:', error);
    } 
  }


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

  const fetchAccordingToInterests = async () => {
    try {
        const response = await fetch(global.Url +`/api/Reader/IssuePaidMovie`);
        const data = await response.json();
        console.log('no data Interestsssssssss', data)
        const a = data.Project[0].ProposalData
        console.log('jjjjjjjjjjjj',a)

        const b = data.Project[0].WriterData
        console.log('jjjjjjjjjjjj',b)
        console.log('ppp',data.Project[0].Writer_ID)

        setAcceptedProject1(data.Project);
        // console.log(acceptedProject1,'llllllllllllllllllllllllllll')
        SetMId()
        // console.log('no data projectttttttttttttt 1', data.Project)
        // console.log('useeeestaattttee',acceptedProject)
        // const pimage= data.Project[0].ProposalData.Image
        // console.log('no data projectttttttttttttt 2', pimage)
        // SetProjectImage(pimage)
        
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
fetchAccordingToInterests()

      },[movie])
  return (
    
    <View style={styles.container}>
      <ScrollView>
        <View style={{
          
          backgroundColor:'#1A202C'
        //   marginTop:Constant.statusBarHeight,
          }}>
          <View style={{
              padding:5,
              flexDirection:"row",
              justifyContent:"space-around",
              elevation:5,
              backgroundColor:colors.headerColor
        
          }}>
             <Ionicons
             style={{color:'black'}}
             name="arrow-back-outline" size={32}
             onPress={()=>navigation.goBack()}
             />
             <TextInput
             style={{
                 width:"70%",
                 //backgroundColor:"#e6e6e6"
                 backgroundColor:"#333333"
                }}
             value={value}
             onChangeText={(text)=>setValue(text)}

             />
             <Ionicons
              style={{color:'grey'}}
             name="search"
             size={32}
             onPress={()=>fetchData()}
             />
          </View>
           {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 
          <FlatList
           data={miniCardData}
           renderItem={({item})=>{
             console.log('itemmmmmmmmmmmmmmmmmmmmmmmmmmmmm',item)
               return <ReaderSearchPaid
               MovieName={item.Name}
               />
           }}
           
          />
        
      </View>
        <View contentContainerStyle={styles.proposalContainer}>
            <Text style={styles.title}></Text>

          


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
          {/* <Text style={{color:'yellow'}}>{acceptedProject.Movie_ID}</Text> */}

          <TouchableOpacity style={styles.button} onPress={()=>{{navigation.navigate('paidShowMovie',{ Movie_ID: acceptedProject.Movie_ID })}}} >
        <Text style={styles.buttonText}>view</Text>
        </TouchableOpacity>
                    <View>
 
 </View>
                
                </View>
            ))}
        </ScrollView>
</View>

<View style={styles.RowView}>
      <TouchableOpacity><Text style={styles.RowText}>According To Interests                                        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
      onPress={()=>navigation.navigate('Seeallbtnpaid')}
      >
        <Text>See All</Text></TouchableOpacity> */}
      </View>
      <View>
<ScrollView contentContainerStyle={styles.container} horizontal={true}>
            
           {acceptedProject1.map((acceptedProject1, index) => (
                <View style={styles.proposalContainer} key={index}>
                    <Image source={acceptedProject1.ProposalData.Image ? { uri: `${global.Url}/Images/${acceptedProject1.ProposalData.Image}` } : require('../Images/teefa.jpeg')} 
          style={styles.image}
          />
         
          <Text style={{color:'yellow'}}>{acceptedProject1.ProposalData.Movie_Name}</Text> 

          <Text style={{color:'yellow'}}>Writer: {acceptedProject1.WriterData.UserName}</Text>

          <TouchableOpacity style={styles.button} onPress={()=>{{navigation.navigate('paid',{ Movie_ID: acceptedProject1.Movie_ID,Wid:acceptedProject1.Writer_ID })}}} >
        <Text style={styles.buttonText}>view</Text>
        </TouchableOpacity>
                    <View>
 
 </View>
                
                </View>
            ))}
        </ScrollView>
</View>
      

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    
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