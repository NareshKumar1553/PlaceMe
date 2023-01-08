import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,FlatList,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
function ServiceList({ navigation }) {
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Services')
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
            <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <TouchableOpacity style={{width:375,height:275,backgroundColor:'white',marginBottom:10,borderTopLeftRadius:35,borderRadius:35}}
                    onPress={()=>{navigation.push('Details',{user})
                }}>
                <Image source = {{uri : user.image}} 
                resizeMode='cover'
                style={{width:375,height:235,borderRadius:15,}}/>
                <TouchableOpacity style={{width:375,height:50,alignContent:'center'}} >
                    <Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',color:'black',paddingTop:10,paddingLeft:70}}>{user.name}</Text>
                </TouchableOpacity>
        </TouchableOpacity>
        </View>
        )
    });
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ScrollView >
            <Text style={{alignItems:'center',alignItems:'center',color:'black',fontSize:32,paddingBottom:15,marginLeft:90,paddingTop:5}}>Service Companies</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default ServiceList;