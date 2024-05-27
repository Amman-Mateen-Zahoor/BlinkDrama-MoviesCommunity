import { StyleSheet, Text,  TouchableOpacity, View ,Modal,useWindowDimensions, Alert, ScrollView} from 'react-native'
import React, { useEffect, useState ,useRef } from 'react'
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import RenderHTML from 'react-native-render-html';

const ShowCommnent = ({route}) => {
  const richText = useRef();



const data = route.params;
console.log('i am data',data)

const[comment,SetComment]=useState('')
const[sId,SetsId]=useState('')
const[summary,SetSummary]=useState('')
const source = {
  html: `

  ${comment}
`
};


const Comment=async()=>{
  // this will execute when daata is dynamic
    const responce= await fetch(global.Url + `/api/Writer/GetRewriteData?SentProject_ID=${route.params}`)
    // const responce= await fetch(global.Url + `/api/Writer/GetRewriteData?SentProject_ID=2031397907`)
    const data= await responce.json()
    console.log('i am data console',data)
    
    
    
    // data (data!=null) console.log(data.SentProjects.EditorComment, data.Summaries.Summary1);
if(data.SentProjects!=null){
    const eComment=data.SentProjects.EditorComment;
    console.log(' i  am eComment',eComment)
    SetComment(eComment)
    const id =data.SentProjects.SentProject_ID;
    SetsId(id)
    console.log('i am data Senprojectid',id)
    
// const summary = data.Summaries.Summary1;
// SetSummary(summary)

//     console.log('Summary',summary)
}
else{
    console.log('there is no comment')
    SetComment('There is No Comment')
}
   
    
  }

    useEffect(()=>{
      const data = route.params
      console.log('ioioioioioi',data)
 Comment();
},[data,comment,summary])


// const SendUpdatedData = async () => {
//   try {
//       const response = await fetch(global.Url + `/api/Editor/UpdateSummary?sentProjectId=${sId}&newSummary=${summary}`,{
//       method : 'PUT',
//   });
//       const data = await response.json();
//       console.log('updated Sent Summary', data)
//       SetVisible(false);
//   } catch (error) {
//       console.error('Error fetching proposal data:', error);
//   }
// };
// const SendUpdatedData = async () => {
//   const SentProject ={
//     sentProjectId:sId,
//     newSummary:summary
//   }
//   try {
//     const response = await fetch(`${global.Url}+/api/Editor/UpdateSummary?sentProjectId`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json' // Assuming your server expects JSON
//       },
//       body: JSON.stringify(SentProject) // Assuming newSummary is expected as JSON
//     });
//     const data = await response.json();
//     console.log('updated Sent Summary', data);
//    // SetVisible(false);
//   } catch (error) {
//     console.error('Error fetching proposal data:', error);
//   }
// };

// const SendUpdatedData = async () => {
//   const urla="http://192.168.100.13/BlinkBAckend/api/writer/UpdateSummary";
//   const SentProject = {
//     sentProjectId:521226321 ,
//     newSummary: 'Hello this is me Amman'
//   };

//   try {
//     const response = await fetch(urla, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(SentProject)
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     console.log('updated Sent Summary', data);
//     // Handle success, maybe update UI
//   } catch (error) {
//     console.error('Error updating summary:', error);
//     // Handle error, show error message to user
//   }
// };


const SendUpdatedData=async()=>{
const url=`${global.Url}/api/writer/UpdateSummary?sentProjectId=${sId}&newSummary=${summary} `;
const response=await fetch(url)
const data=await response.json();
console.log("THis is Data",data)
if (data!=null)
  {
    SetVisible(false)
    Alert.alert(data)
  }
  else{
    Alert.alert('data',data)
  }
 }
 const { width } = useWindowDimensions(); 
const [visible,SetVisible]=useState(false)
  return (
    <View style={{backgroundColor:'#2D3748', flex:1}}>
      <Text style={{backgroundColor:'grey'}} >
  Editor comment : 
  {comment ? <RenderHTML contentWidth={width} 
  style={{Color:'blue'}}
  source={source} /> : console.log(comment)}
  </Text>
      <TouchableOpacity  onPress={() => SetVisible(true)}>
  <Text style={{color:'green', borderRadius:12, fontSize:30} } >Accept to rewrite</Text>
</TouchableOpacity>

<Modal
      transparent={false}
      visible={visible}
      animationType='slide'
      >
        <ScrollView><View style={{backgroundColor:'#2D3748', flex:1}}>
         <Text>Rewrite Summary </Text>
        <RichEditor
        ref={richText}
        placeholder="Start typing..."
        onChange={SetSummary}
         // Use onChange instead of onTextChange
      />


      {/* Toolbar for formatting options */}
      <RichToolbar
        getEditor={() => richText.current}
      />

<TouchableOpacity style={styles.button} onPress={SendUpdatedData}> 
          {/* > */}
          <Text style={styles.buttonText}>Send Project</Text>
        </TouchableOpacity>
        </View>
        </ScrollView> 

      </Modal>
     


    </View>

  )
}

export default ShowCommnent

const styles = StyleSheet.create({

  button: {
    marginBottom: 150,
    backgroundColor: 'yellow',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 9,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
  ,
})