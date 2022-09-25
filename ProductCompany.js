import React from "react";
import { View,Image,Text,StyleSheet, ScrollView, TouchableOpacity } from "react-native";
const ProductCompany = () => {
    return(
        <View style={Styles.container}>
            <Image source = {{uri:'https://zohowebstatic.com/sites/default/files/ogimage/zoho-logo.png'}} style={{width:350,height:230,borderBottomLeftRadiuss:40}}/>
            <ScrollView>
                <View style={{flex:1,flexDirection:'row',textAlign:'center'}}>
                <Text style={{color:'#990021',fontSize:32,fontWeight:'bold',textAlign:'center',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'center'}}>                 Z</Text>
                <Text style={{color:'#1f9900',fontSize:32,fontWeight:'bold',textAlign:'center',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'center'}}>O</Text>
                <Text style={{color:'#000899',fontSize:32,fontWeight:'bold',textAlign:'center',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'center'}}>H</Text>
                <Text style={{color:'#ffdd00',fontSize:32,fontWeight:'bold',textAlign:'center',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'center'}}>O</Text>
                </View>
                <View>
                <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'left',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'flex-start'}}>  About Zoho Corporation</Text>
                </View>
                <View>
                    <Text style={{color:'black',textAlign:'center',fontSize:21,justifyContent:'center'}}>
                              Zoho Corporation is an Indian multinational technology company that makes web-based business tools. It is best known for the online office suite offering Zoho Office Suite.
                </Text></View>
                <View>
                <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'left',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'flex-start'}}>  Skills Required </Text>
                </View>
                <View>
                    <Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:21}}>
                    Have a keen interest in Programming.{'\n'}Brilliant Verbal and Communication skill.{'\n'}Customer handling skills.{'\n'}Have a knowledge of C, C++, C# & JAVA.
                </Text></View>
                <View>
                <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'left',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'flex-start'}}>  Minimum Qualification</Text>
                </View>
                <View>
                    <Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:21}}>
                    B.E / B.Tech / M.E / M.Tech / MCA
                </Text></View>
                <View>
                <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'left',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'flex-start'}}>  Interview Rounds</Text>
                </View>
                <View>
                    <Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:21}}>
                    Aptitude and C MCQ {'\n'} Basic Programming {'\n'} Advanced Programming
                </Text></View>
                <View>
                <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'left',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'flex-start'}}>  Salary for Freshers</Text>
                </View>
                <View>
                    <Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:21}}>
                    4.5 to 6.5 LPA
                </Text></View>
                <View>
                <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'left',fontStyle:'bold',fontFamily:'Gill Sans Extrabold',justifyContent:'flex-start'}}>  Other Important Criteria</Text>
                </View>
                <View>
                    <Text style={{color:'black',textAlign:'center',justifyContent:'center',fontSize:21}}>
                    1 active backlog is allowed at the the time of assessment.{'\n'}No active backlog at the time of joining.{'\n'}The education gap should be of maximum 1 years,if any, is allowed between 12th and graduation.
Candidates who have participated in any Zoho Interview process in the last{'\n'} 6 Months are not eligible.{'\n'}
                </Text></View>
            </ScrollView>
        </View>
    );
}
const Styles = StyleSheet.create({
    container:{
        color:'#123125',
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    TSty:{
        color:'#123125',
    }
})
export default ProductCompany;
