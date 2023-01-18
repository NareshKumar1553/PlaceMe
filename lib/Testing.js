import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Testing = ({
    params,
}) => (
    <View style={{}}>
        <TouchableOpacity style={{width:350,height:75,backgroundColor:'black'}}>
            <Text style={{color:'white',fontSize:20}}>Testing</Text>
        </TouchableOpacity>
    </View>
);

export default Testing;
