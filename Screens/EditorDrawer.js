// // // import { View, Text } from 'react-native'
// // // import React, { useState } from 'react'

// // // const EditorDrawer = () => {
// // //     [propsal,SetProposal]=useState('1')
// // //     [WriterID,SetWriterId]=useState('11')
// // //     [WriterName,SetWriterName]=useState('1')
// // //     [MovieName,SetMovieName]=useState('1')
// // //     [Type,SetType]=useState('1')
// // //     [Genre,SetGenre]=useState('')
// // //     [DueDate,SetDueDate]=useState('1')
// // //     [Status,SetStatus]=useState('1')
// // //   return (
// // //     <View>
// // //       <Text>H I s t o r y</Text>

// // //       <Text>Propsal ID:{propsal}</Text>
// // //       <Text>Writer_ID:{WriterID}</Text>
// // //       <Text>WriterName:{WriterName}</Text>
// // //       <Text>Movie_Name:{MovieName}</Text>
// // //       <Text>Type:{Type}</Text>
// // //       <Text>Genre:{Genre}</Text>
// // //       <Text>DueDate:{DueDate}</Text>
// // //       <Text>Status:{Status}</Text>


// // //       <></>
// // //     </View>
// // //   )
// // // }

// // // export default EditorDrawer

// // // // // {"SentProposal_ID": 1,
// // // // "Writer_ID": 3,
// // // // "Image": null,
// // // // "WriterName": "Amman",
// // // // "Movie_Name": "Waar",
// // // // "Type": "Movie",
// // // // "Genre": "Comedy",
// // // // "DueDate": "3/31/2024",
// // // // "Status": null}





// // import { View, Text } from 'react-native';
// // import React, { useEffect, useState } from 'react';

// // const EditorDrawer = () => {
// //     const [proposal, setProposal] = useState('');
// //     const [writerID, setWriterId] = useState('');
// //     const [writerName, setWriterName] = useState('');
// //     const [movieName, setMovieName] = useState('');
// //     const [type, setType] = useState('');
// //     const [genre, setGenre] = useState('');
// //     const [dueDate, setDueDate] = useState('');
// //     const [status, setStatus] = useState('');
// //    useEffect(()=>{
// //     const History = async() => {
// //         const responce= await fetch(global.Url + '/api/Editor/ShowSentProposals?editorId=3')
// //         const data = await responce.json();
// //         console.log(data)
// //         setProposal(data)

// //     }; History()


// //    },[])

// //     return (
// //         <View >
// //             <Text style={{fontSize:30}}> H I s t o r y</Text>
// //            <View>
// //             <Text>Proposal ID: {proposal.SentProposal_ID}</Text>
// //             {/* <Text>Writer ID: {writerID}</Text>
// //             <Text>Writer Name: {writerName}</Text>
// //             <Text>Movie Name: {movieName}</Text>
// //             <Text>Type: {type}</Text>
// //             <Text>Genre: {genre}</Text>
// //             <Text>Due Date: {dueDate}</Text>
// //             <Text>Status: {status}</Text> */}
// //             </View>
// //         </View>
// //     );
// // };

// // export default EditorDrawer;





// // import { View, Text } from 'react-native';
// // import React, { useEffect, useState } from 'react';

// // const EditorDrawer = () => {
// //     const [proposal, setProposal] = useState(); // Initialize state variable with null

// //     useEffect(() => {
// //         const fetchProposalData = async () => {
// //             try {
// //                 const response = await fetch(global.Url + '/api/Editor/ShowSentProposals?editorId=3');
// //                 const data = await response.json();
// //                 console.log(data);
// //                 setProposal(data); // Update state with fetched data
// //                 console.log(proposal[0].Status)
// //             } catch (error) {
// //                 console.error('Error fetching proposal data:', error);
// //             }
// //         };

// //         fetchProposalData();
// //     }, []);

// //     return (
// //         <View>
// //             <Text style={{ fontSize: 30 }}>H I s t o r y</Text>
// //             {proposal && ( // Check if proposal data is available
// //                 <View>
// //                     <Text>Proposal ID: {proposal[0].SentProposal_ID}</Text>
// //                     <Text>Writer ID: {proposal[0].Writer_ID}</Text>
// //                     <Text>Writer Name: {proposal[0].WriterName}</Text>
// //                     <Text>Movie Name: {proposal[0].Movie_Name}</Text>
// //                     <Text>Type: {proposal[0].Type}</Text>
// //                     <Text>Genre: {proposal[0].Genre}</Text>
// //                     <Text>Due Date: {proposal[0].DueDate}</Text>
// //                     <Text>Status: {proposal[0].Status}</Text>
// //                 </View>
// //             )}
// //         </View>
// //     );
// // };

// // export default EditorDrawer;

// // import { View, Text } from 'react-native';
// // import React, { useEffect, useState } from 'react';

// // const EditorDrawer = () => {
// //     const [proposals, setProposals] = useState([]); // Initialize state variable with an empty array

// //     useEffect(() => {
// //         const fetchProposalData = async () => {
// //             try {
// //                 const response = await fetch(global.Url + '/api/Editor/ShowSentProposals?editorId=3');
// //                 const data = await response.json();
// //                 console.log(data);
// //                 setProposals(data); // Update state with fetched data
// //             } catch (error) {
// //                 console.error('Error fetching proposal data:', error);
// //             }
// //         };

// //         fetchProposalData();
// //     }, []);

// //     return (
// //         <View>
// //             <Text style={{ fontSize: 30 }}>H I s t o r y</Text>
// //             {proposals.map((proposal, index) => ( // Map through the array of proposals
// //                 <View key={index}>
// //                     <Text>Proposal ID: {proposal.SentProposal_ID}</Text>
// //                     <Text>Writer ID: {proposal.Writer_ID}</Text>
// //                     <Text>Writer Name: {proposal.WriterName}</Text>
// //                     <Text>Movie Name: {proposal.Movie_Name}</Text>
// //                     <Text>Type: {proposal.Type}</Text>
// //                     <Text>Genre: {proposal.Genre}</Text>
// //                     <Text>Due Date: {proposal.DueDate}</Text>
// //                     <Text>Status: {proposal.Status}</Text>
// //                 </View>
// //             ))}
// //         </View>
// //     );
// // };

// // export default EditorDrawer;

// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import navigation from '../Navigation/Navigation';

// const EditorDrawer = () => {
//     const [proposals, setProposals] = useState([]);

//     useEffect(() => {
//         const fetchProposalData = async () => {
//             try {
//                 const response = await fetch(global.Url + '/api/Editor/ShowSentProposals?editorId=3');
//                 const data = await response.json();
//                 console.log('no data',data)
//                 setProposals(data);
//             } catch (error) {
//                 console.error('Error fetching proposal data:', error);
//             }
//         };

//         fetchProposalData();
//     }, []);

  


//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.title}>Proposal History</Text>
//             {proposals.map((proposal, index) => (
//                 <View style={styles.proposalContainer} key={index}>
//                     <Text style={styles.text}>Proposal ID: {proposal.SentProposal_ID}</Text>
//                     <Text style={styles.text}>Writer ID: {proposal.Writer_ID}</Text>
//                     <Text style={styles.text}>Writer Name: {proposal.WriterName}</Text>
//                     <Text style={styles.text}>Movie Name: {proposal.Movie_Name}</Text>
//                     <Text style={styles.text}>Type: {proposal.Type}</Text>
//                     <Text style={styles.text}>Genre: {proposal.Genre}</Text>
//                     <Text style={styles.text}>Due Date: {proposal.DueDate}</Text>
//                     <Text style={styles.text}>Status: {proposal.Status}</Text>
//                 </View>
//             ))}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         backgroundColor: '#1A202C',
//         paddingVertical: 20,
//         paddingHorizontal: 10,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     proposalContainer: {
//         borderWidth: 1,
//         borderColor: '#cccccc',
//         borderRadius: 10,
//         padding: 10,
//         marginBottom: 15,
//     },
//     text: {
//         fontSize: 16,
//         marginBottom: 5,
//     },
// });

// export default EditorDrawer;

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const EditorDrawer = () => {
    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        const fetchProposalData = async () => {
            try {
                const response = await fetch(global.Url + '/api/Editor/ShowSentProposals?editorId=1573719806');
                const data = await response.json();
                console.log('no data', data)
                setProposals(data);
            } catch (error) {
                console.error('Error fetching proposal data:', error);
            }
        };

        fetchProposalData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Proposal History</Text>
            {proposals.map((proposal, index) => (
                <View style={styles.proposalContainer} key={index}>
                    <Text style={styles.text}>Proposal ID: {proposal.SentProposal_ID}</Text>
                    <Text style={styles.text}>Writer ID: {proposal.Writer_ID}</Text>
                    <Text style={styles.text}>Writer Name: {proposal.WriterName}</Text>
                    <Text style={styles.text}>Movie Name: {proposal.Movie_Name}</Text>
                    <Text style={styles.text}>Type: {proposal.Type}</Text>
                    <Text style={styles.text}>Genre: {proposal.Genre}</Text>
                    <Text style={styles.text}>Due Date: {proposal.DueDate}</Text>
                    <Text style={styles.text}>Status: {proposal.Status}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

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
});

export default EditorDrawer;
