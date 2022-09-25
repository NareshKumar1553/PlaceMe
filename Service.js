import React from "react";
import { View,StyleSheet,Text, ScrollView, TouchableOpacity } from "react-native";
const Service=()=>{
    let SCompanies =[];
    for(let i=0;i<10;i++){
        SCompanies.push(
            <TouchableOpacity style={styles.card}></TouchableOpacity>
        )
    }
    return(
        <ScrollView>{SCompanies}</ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        color:'red',
        flex: 1,
        backgroundColor: '#6b2e2e',
        alignItems: 'center',
        justifyContent: 'center',

    },
    card:{
        height:250,
        width:360,
        borderRadius:15,
        margin:8,
        backgroundColor: '#5fd9c9',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        flex:1,
        padding:7,
      }
});
export default Service; 