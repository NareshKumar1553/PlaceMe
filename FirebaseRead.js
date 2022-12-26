import { firebase } from "@react-native-firebase/database";
import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Companies = () =>{
    firebase.initializeApp({
        apiKey: "AIzaSyArSYQFjGO0VjgYROPoOPNJ3O6ml43C1uo",
        authDomain: "placeme96.firebaseapp.com",
        databaseURL: "https://placeme96-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "placeme96",
        storageBucket: "placeme96.appspot.com",
        messagingSenderId: "1022670999184",
        appId: "1:1022670999184:web:2b2b1b1b1b1b1b1b1b1b1b",
        measurementId: "G-1B1B1B1B1B1"
    });
    const [data, setData] = useState([]);
    useEffect(() => {
        const onValueChange = firebase.database().ref('/').on('value', snapshot => {
            setData(snapshot.val());
        });
        return () => {
            firebase.database().ref('/').off('value', onValueChange);
        };
    }, []);
    return (
        <View  style={{backgroundColor:'white',color:'black',flex:1}}>
            <TouchableOpacity style={styles.container}><Text>{data}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Companies;