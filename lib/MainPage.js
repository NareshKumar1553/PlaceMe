import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image, ImageBackground } from "react-native";
const MainPage = ({ navigation }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ffffff' }}>
            <View>

            </View>
            <Text style={{ flex: 0, fontSize: 42, textAlign: 'left', fontFamily: 'Times', color: "#63e0de", fontWeight: 'bold', paddingLeft: 15, paddingTop: 50 }}>Welcome Back</Text>
            <Text style={{ flex: 0, fontSize: 42, textAlign: 'center', fontFamily: 'Times', color: "#63e0de", paddingLeft: 15, fontWeight: 'bold' }}>Name...</Text>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity activeOpacity={0.75} style={sty.TopRight} onPress={() => navigation.push('Product')}>
                    <Image
                        source={require('./assets/Pro.jpg')}
                        resizeMode='cover' style={{ flex: 1, borderTopRightRadius: 40, borderBottomLeftRadius: 40, width: 170 }}>
                        {/* <Text>Product Companies</Text> */}
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('Service')} style={sty.TopLeft}>
                    <Image
                        source={require('./assets/Servicebased.jpg')}
                        resizeMode='cover' style={{ flex: 1, borderBottomRightRadius: 40, borderTopLeftRadius: 40, width: 170 }} />
                    {/* <Text style={{color:"red",textAlign:'center',fontSize:24,fontWeight:'bold'}}>Service Based Company</Text>
                     */}
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity style={sty.BottomLeft}>
                    <Image
                        source={require('./assets/Govt.jpg')}
                        resizeMode='cover' style={{ flex: 1, borderBottomRightRadius: 40, borderTopLeftRadius: 40, width: 170 }}>

                    </Image>
                    {/* <Text style={{color:"red",textAlign:'center',fontSize:24,fontWeight:'bold'}}>Goverment Jobs</Text> */}

                </TouchableOpacity>
                <TouchableOpacity style={sty.BottomRight}>
                    <Image
                        source={require('./assets/about.jpg')}
                        resizeMode='cover' style={{ flex: 1, borderTopRightRadius: 40, borderBottomLeftRadius: 40, width: 170 }} />
                    {/* <Text style={{color:"red",textAlign:'center',fontSize:24,fontWeight:'bold'}}>About Us</Text> */}

                </TouchableOpacity>
            </View>
        </View>
    );


}
const sty = StyleSheet.create({
    image: {
        flex: 1
    },
    PadImage: {
        height: 100,
        width: 100,
    },
    fullview: {
        flex: 1,
        backgroundColor: 'white',
    },
    TopLeft: {
        justifyContent: 'space-evenly',
        margin: 5,
        backgroundColor: '#ff9705',
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        height: 230,
        width: 170,

    },
    TopRight: {
        justifyContent: 'space-evenly',
        margin: 5,
        height: 230,
        width: 170,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        backgroundColor: '#f70094',
    },
    BottomRight: {
        justifyContent: 'space-evenly',
        margin: 5,
        height: 230,
        width: 170,
        backgroundColor: '#00ff91',
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,

    },
    BottomLeft: {
        justifyContent: 'space-evenly',
        margin: 5,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ffdd00',
        height: 230,
        width: 170,
    },
    second: {
        flex: 1,
        height: 500,
        width: 400,
        backgroundColor: 'red',
    },
    itemText: {
        fontFamily: "RobotoCondensed-Bold",
        fontSize: 42,
        color: "black"
    },
    backImageTR: {
        margin: 2,
        height: 170,
        width: 170,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
    },
})
export default MainPage;