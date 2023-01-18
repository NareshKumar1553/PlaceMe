import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,ScrollView,TouchableOpacity, Linking } from 'react-native';
class GovDetails extends Component {
    state = {
        title: this.props.route.params.user.name,
        image : this.props.route.params.user.image,
        des : this.props.route.params.user.description,
    };
    render() {
        const {title} = this.state;
        const {image} = this.state;
        const {des} = this.state;
    return (
        
      <View style={{backgroundColor:'white',flex:1}}>
        <Image source={{uri: image}} 
        style={{width:'100%',height:250}}/>
        <ScrollView>
        <Text style={{justifyContent:'center',alignItems:'center',paddingTop:10,fontWeight:'bold',textAlign:'center',fontSize:24,color:'black'}}> {title} </Text>
        <Text style={styles.title}>About</Text>
        <Text style={styles.container}>{des}</Text>
        <Text style={styles.title}>Minimum Qualification Required</Text>
        <Text style={styles.container}>10th Pass</Text>
        <Text style={styles.title}>Age Limit</Text>
        <Text style={styles.container}>18-40</Text>
        <Text style={styles.title}>Salary</Text>
        <Text style={styles.container}>Rs. 20000</Text>
        <Text style={styles.title}>How to Apply</Text>
        <Text style={styles.container}>Apply Online</Text>
        <Text style={styles.title}>Official Website</Text>
        <TouchableOpacity style={{backgroundColor:'black',padding:10,margin:10,borderRadius:10}} onPress={() => Linking.openURL('https://www.example.com')}>
            <Text style={{color:'white',textAlign:'center',fontSize:18}}>Apply Now</Text>
        </TouchableOpacity>

        </ScrollView>
      </View>
    );
}
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 10,
        marginLeft:15,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        fontSize:18,
        marginLeft:15,
        marginRight:15,
        paddingTop:10,

    }
});

export default GovDetails;