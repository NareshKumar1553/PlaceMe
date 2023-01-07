import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
const MainPage = () => {
    const [users, setUsers] = useState([]);
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
            });
        return () => subscriber();
    }, []);
    return (
        <View>
            <Text style={{color:'black'}}>Users List</Text>
            {users.map(user => {
                return (
                    <View key={user.key
                    }>
                        <Text style={{color:'black'}}>Name: {user.name}</Text>
                        <Text>Age: {user.age}</Text>
                    </View>
                );
            })}
        </View>
    );
};

export default MainPage;
