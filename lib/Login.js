import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
GoogleSignin.configure({
  webClientId: '1022670999184-1pelbhbnfe3a07t7nhr5qb7k783dspe9.apps.googleusercontent.com',
});


const Login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=> {
    GoogleSignin.configure({
        webClientId: '1022670999184-1pelbhbnfe3a07t7nhr5qb7k783dspe9.apps.googleusercontent.com',
    });
    })
    async function onGoogleButtonPress() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
  
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
  }
const googleLogin=()=>{
      console.log('Google SignIn');
      onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://t3.ftcdn.net/jpg/02/37/30/78/360_F_237307867_ZdXX6nF5ybOEgjJuWjjUtj1mIk9xi948.jpg'}} 
      style={{width:150,height:250}} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
        
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} 
      onPress={()=>{
        if(this.setPassword ==  this.setPassword)
        {
          console.log({email, password});
          auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Account Created Successfully");
        navigation.push('MainPage');
        console.log('User account created & signed in!');    
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
            navigation.push('MainPage');
          //Alert.alert("This Email is Already in Use...");
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          Alert.alert("This Email is Invalid...");
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
        }
        else{
          Alert.alert('Invalid');
        }}}
      >
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={googleLogin}>
        <Text style={styles.loginText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View> 
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color:'black'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
},
});

export default Login;