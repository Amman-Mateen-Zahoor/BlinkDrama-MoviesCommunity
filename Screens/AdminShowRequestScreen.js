// import { StyleSheet, Text, View ,ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'

// const AdminShowRequestScreen = ({route}) => {
//     const data =route.params

//     const[SentPropossal,SetSentPropossal]=useState()

//     const ShowBalanceReq = async () => {
//         try {
//             const response = await fetch(global.Url +`/api/Admin/GetBalanceRequests`);
//             const data = await response.json();
//             console.log('no data', data)
//            SetSentPropossal(data) 
            
//         } catch (error) {
//             console.error('Error fetching proposal data:', error);
//         }
//     };
//     useEffect(()=>{
//         ShowBalanceReq()
//         console.log('hiii')
//     },[])

//   return (
// <View style={styles.container}>
// <View style={styles.container}>
//       {SentPropossal.map((item, index) => (
//         <View key={item.Balance_ID} style={styles.item}>
//           <Text style={styles.text}>Balance: {item.Balance}</Text>
//         </View>
//       ))}
//     </View>
//   );

// </View>
//   )
// }

// export default AdminShowRequestScreen

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: '#1A202C',
//         paddingVertical: 20,
//         paddingHorizontal: 10,
//     },
//       button: {
    
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
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         color: '#FFFFFF', // White color
//     },
//     proposalContainer: {
//         borderWidth: 1,
//         borderColor: '#cccccc',
//         borderRadius: 10,
//         padding: 10,
//         marginBottom: 15,
//         backgroundColor: '#FFFFFF', // White color
//     },
//     text: {
//         fontSize: 16,
//         marginBottom: 5,
//         color: '#333333', // Dark gray color
//     },
// });

    
  
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Image, TouchableOpacity, Alert } from 'react-native';


const AdminShowRequestScreen = () => {
    const[data1,SetData1]=useState([])
    
const data = [
  {
    Balance: 500,
    Balance_ID: 369211581,
    ReaderDetails: {
      Email: "Abdullah@gmail.com",
      Image: "55839d2d-6912-4265-8a69-41d50f6d47b8.jpg",
      UserName: "Abdullah"
    },
    RequestDate: "1/1/0001 12:00:00 AM",
    Status: "Sent"
  },
  {
    Balance: 500,
    Balance_ID: 572354514,
    ReaderDetails: {
      Email: "Reader@gmail.com",
      Image: "55839d2d-6912-4265-8a69-41d50f6d47b8.jpg",
      UserName: "Reader"
    },
    RequestDate: "1/1/0001 12:00:00 AM",
    Status: "Sent"
  }
];

    const ShowBalanceReq = async () => {
        try {
            const response = await fetch(global.Url +`/api/Admin/GetBalanceRequests`);
            const data = await response.json();
            console.log('no data', data)
           SetData1(data) 
           console.log('no data1111', data1)
            
        } catch (error) {
            console.error('Error Moye Moye:', error);
        }
    };
    useEffect(()=>{
        ShowBalanceReq()
        console.log('hiii')
        console.log(data1,'wwwwwwwwww')
    },[])
    const [reloadFlag, setReloadFlag] = useState(false);

    const AcceptedStatus = async (a) => {
        try {
          const response = await fetch(`${global.Url}/api/Admin/AcceptBalanceRequest?id=${a}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              // 'Content-Type': 'multipart/form-data',
            }
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          console.log(data);
      
          // Display alert with received data
          Alert.alert(JSON.stringify(data));
          setReloadFlag(!reloadFlag);
        } catch (error) {
          console.error('Error:', error);
          // Display error alert
          alert('Error occurred while fetching data.');
        }
      };
      


  return (
    <View style={style.container}>
        <Text 
            style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 50,
                textAlign: 'center',
                color: '#FFFFFF', // White color
            }}>Balance Requests</Text>
    <ScrollView contentContainerStyle={style.container}>
        
      {data1.map((item,index)=>{
      return(

        <View style={style.view1} key={index}>
          
        <Text style={style.text2}>
          Write Summary</Text>
          <View style={style.view2}>
            <View style={{paddingLeft:28}}>
            {/* <Image source={require('../Images/teefa.jpeg')}  */}
            {/* <Image source={{ uri: `${global.Url}/Images/${e.Image}` }}  */}
            <Image
      source={item.ReaderDetails.Image ? { uri: `${global.Url}/Images/${item.ReaderDetails.Image}` } : require('../Images/teefa.jpeg')}

    style={style.image}
            />
            </View>
            <View style={{paddingLeft:20}}>
              <Text style={{fontSize:18,fontWeight:'bold',}}>
              {item.ReaderDetails.Email}
              </Text>
              <Text style={{fontSize:18,fontWeight:'bold',}}>
              Director : {item.Balance}
              </Text>
              <View style={{flexDirection:'row'}}>
              {/* <TouchableOpacity onPress={()=> navigation.navigate('AllAccepted',SentPropossal) }><Text style={{color:'green',borderRadius:12,fontSize:30}}>Accept</Text></TouchableOpacity> */}
              <TouchableOpacity onPress={()=>AcceptedStatus(item.Balance_ID)}>
  <Text style={{color:'green', borderRadius:12, fontSize:30} } >Accept</Text>
</TouchableOpacity>

              <TouchableOpacity><Text style={{color:'red',borderRadius:12,fontSize:30}} 
              onPress={()=>RejectedStatus(item.Balance_ID)}>   Reject</Text></TouchableOpacity>
              </View>
              </View>
          </View>
          
      </View>
      
      )
      
    })}
    <View style={{paddingTop:'20'}}></View>

    </ScrollView>
    </View>
  );
};

const style =StyleSheet.create({
    text:{
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
    },container: {
                flexGrow: 1,
                backgroundColor: '#1A202C',
                paddingVertical: 20,
                paddingHorizontal: 10,
            },
    }
      )

export default AdminShowRequestScreen;
