/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler'
import React from 'react';
import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import {IoIosArrowDropleft} from 'react-icons/io'
import { LinearGradient } from 'expo-linear-gradient';


const Signup = () => {
  return (
   <SafeAreaView style={styles.body}>
   {/*<LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#EFBB35', '#4AAE9B']} style={{borderRadius:10}}>*/}
      <View style={styles.container}>
        <Text style={styles.login}>Sign up</Text>
        <Text style={styles.outsidebox}>Name</Text>
        <TextInput style={styles.box} placeholder="  Hello there" placeholderTextColor="#858585"/>
        <Text style={styles.outsidebox}>Email</Text>
        <TextInput style={styles.box} placeholder="  tim@google.com" placeholderTextColor="#858585" />
        <Text style={styles.outsidebox}>Password</Text>
        <TextInput style={styles.box} placeholder="  Pick a strong password" placeholderTextColor="#858585" />
        <LinearGradient colors={['#B615DE', '#D428A7']} style={styles.button} start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
          <Text style={{color:"#ffff", alignSelf:'center',textAlignVertical:'center'}}>Create account</Text>
        </LinearGradient>
        <Text style={styles.signup}>Already have an account? <Text style={{color:"#ffff"}}>Log in</Text></Text>
      </View>
    {/*</LinearGradient>*/}

   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 80,
      marginLeft: 10,
    },
    body: {
     backgroundColor: '#101010',
     flex:1,
    },
    box: {
      marginHorizontal: 16,
      borderWidth: 3,
      padding: 10,
      margin: 10,
      marginBottom:20,
      color: '#858585',
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      height:65,
      borderColor:'#212121',
      backgroundColor:'#171717',
    },
    button:{
        marginHorizontal: 17,
        marginTop: 40,
        textAlign:'center',
        margin: 10,
        color: '#ffff',
        borderRadius: 10,
        height:55,
        padding:15,
        backgroundColor:'#4B0082',
    },
    /*signature:{
    alignContent:'center',
    justifyContent:'center',
    marginTop:100,
    margin:10,
    color:'#858585',
    },
*/
    outsidebox:{
        marginHorizontal:22,
        color:'white',
    },
    signup:{
    alignContent:'center',
    textAlign:'center',
    color: '#858585',
    },
    login:{
     marginBottom:120,
     color:'#ffff',
     marginLeft:25,
     fontSize:35,
     fontWeight:'bold',
    },
});



export default Signup;
