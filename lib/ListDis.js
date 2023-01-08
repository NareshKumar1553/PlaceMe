import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,FlatList,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function ListDis() {
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('periyasamy')
            .get()
            .then(querySnapshot => {
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
        return () => subscriber
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }
    users.map(user => {
        img.push(
            <View style={{alignContent:'center',justifyContent:'center',backgroundColor:'black'}}>
            <TouchableOpacity style={{width:375,height:275,backgroundColor:'black',marginBottom:10,borderTopLeftRadius:35,borderRadius:35}}>
                <ImageBackground source = {{uri : user.image}} 
                style={{resizeMode:'cover',width:375,height:235}}/>
                <TouchableOpacity style={{width:375,height:50,alignContent:'center'}} >
                    <Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',paddingTop:10,paddingLeft:170}}>{user.name}</Text>
                </TouchableOpacity>
        </TouchableOpacity>
        </View>
        )
    });
    return(

        <ScrollView>{img}</ScrollView>
    );
}

const read =({user})=>{
    return(
        <ScrollView style={{backgroundColor:'white',alignContent:'center',flex:1,flexDirection:'column'}}>
        <View style={{ flex: 1, flexDirection: 'row' ,backgroundColor:'white'}}>
            <Image
                style={{ width: 300, height: 100 }}
                source={{ uri: user.image }}
            />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text style={{ color: 'black' }}>Name: {user.name}</Text>
                <Text>Age: {user.age}</Text>
            </View>
        </View>
        </ScrollView>
    );
}

export default ListDis;