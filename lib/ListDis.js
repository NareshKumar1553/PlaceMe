import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,FlatList,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function ListDis() {
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('periyasamy')
            .get()
            .then(querySnapshot => {
                let n = querySnapshot.size;
                console.log('Total users: ', querySnapshot.size);
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot.data());
                    users.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setUsers(users);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }
    return users.map(user => {
        return (
        //     // <View key={user.key}>
        //     //     <Text>Name: {user.name}</Text>
        //     //     <Text>Age: {user.age}</Text>
        //     // </View>
        //     <ScrollView>
        //     <FlatList
        //     data={users}
        //     renderItem={({ item }) => (
        //         <View style={{ flex: 1, flexDirection: 'row' ,backgroundColor:'white'}}>
        //             <Image
        //                 style={{ width: 150, height: 100 }}
        //                 source={{ uri: item.image }}
        //             />
        //             <View style={{ flex: 1, flexDirection: 'column' }}>
        //                 <Text style={{ color: 'black' }}>Name: {item.name}</Text>
        //                 <Text>Age: {item.age}</Text>
        //             </View>
        //         </View>
        //     )}
        //   />
        //   </ScrollView>
        <ScrollView style={{backgroundColor:'white',alignContent:'center',flex:1,flexDirection:'row'}}>
        <TouchableOpacity style={{width:350,height:150}}>
            <ImageBackground style={{ width: 350, height: 100 }} source={{ uri: user.image }} />
            <Text style={{color:'black'}}>{user.name}</Text>
        </TouchableOpacity>
    </ScrollView>
        );
    });
}

export default ListDis;