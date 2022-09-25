import React from "react";
import { View,StyleSheet,Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
const Product=({ navigation })=>{
    let PCompanies =[];
    let ImageDB = ['https://www.inorgnet.com/wp-content/uploads/2020/12/Infosys-Chennai.jpg.webp',
                    'https://images.livemint.com/img/2021/09/25/1600x900/accenture-kgHC--621x414@LiveMint_1632573659594.JPG',
                    'https://upload.wikimedia.org/wikipedia/commons/e/e3/Virtusa_Building.jpg',
                    'https://media.glassdoor.com/l/2866375/shopup-office.jpg',
                    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Zoho_headquarters_in_chennai.jpg',
                    'https://www.ducenit.com/wp-content/uploads/2019/08/ducen-office-1.jpg',
                    'https://m.economictimes.com/thumb/msid-93144758,width-1280,height-720,resizemode-4,imgsize-41610/cognizant.jpg',
                    'https://velocityincubator.com/wp-content/uploads/2022/08/cpt2-940x627.jpg',
                    'https://www.wipro.com/content/dam/nexus/en/newsroom/events/2019/images/spirit-of-wipro-run-2.jpg',
                    'https://m.economictimes.com/thumb/msid-86991876,width-1599,height-1052,resizemode-4,imgsize-20996/amazon-india.jpg'
                ];
    for(let i=0;i<10;i++){
        PCompanies.push(
            <TouchableOpacity style={styles.card} 
            onPress={()=>navigation.push('ProductCompany')}>
                <ImageBackground source={{uri:ImageDB[i]}} style={styles.image}/>
                <Text>Company {i}</Text>
                </TouchableOpacity>
        )
    }
    
    return(
        <ScrollView>{PCompanies}</ScrollView>
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
    cardimage:{
        height:250,
        width:360,
        borderRadius:150,
        position:'absolute',
    },
    card:{
        height:250,
        width:360,
        borderRadius:15,
        margin:8,
        backgroundColor: '#8b3ef7',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
        flex:1,
        padding:7,
      }
});
export default Product; 