import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { View, Text,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Anim from './AnimationLib';
import { Linking } from 'react-native';
function Education({ navigation }) {
    var img = [];
    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [users, setUsers] = useState([]); // Initial empty array of users
    useEffect(() => {
        const subscriber = firestore()
            .collection('Training')
            .get()
            .then(querySnapshot => {
                console.log('Total Data: ', querySnapshot.size);
                const users = [];
                querySnapshot.forEach(documentSnapshot => {
                   // console.log(documentSnapshot.data());
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
        return <Anim />;
    }
    users.map(user => {
        let link = user.link;
        img.push(
            <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',backgroundColor:''}}>
            <TouchableOpacity style={{width:360,height:55,backgroundColor:'white',marginBottom:10,borderTopLeftRadius:35,borderRadius:35}}
                    onPress={()=>{Linking.openURL(link)
                }}>
                    <Text style={{fontWeight:'bold',fontSize:20,justifyContent:'center',color:'black',paddingTop:10,textAlign:'center'}}>{user.name}</Text>
        </TouchableOpacity>
        </View>
        )
    });
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ScrollView >
            <Text style={{paddingBottom:15,textAlign:'center',color:'black',justifyContent:'center',marginTop:15,fontSize:32}}>Platform to Develop Skills</Text>
            {img}
            </ScrollView>
            </View>
    );
}

export default Education;