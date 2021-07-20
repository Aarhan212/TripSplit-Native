/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, TextInput, View, SafeAreaView, StyleSheet, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {IoIosArrowDropleft} from 'react-icons/io';
import {LinearGradient} from 'expo-linear-gradient';




const Home = () => {
  return (
    <SafeAreaView style={styles.body}>
   {/*<LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#EFBB35', '#4AAE9B']} style={{borderRadius:10}}>*/}
     <ImageBackground source={require('../../images/home3.jpg')} style={styles.image}>
      <View style={styles.container}>
        <Image source={require('../../images/logo3.png')} style={styles.logo}/>
        <Text style={{color:"white", textAlign:"center", fontSize:30, fontWeight:"bold"}}>Trip Split</Text>
        <TouchableOpacity style={styles.button}><Text style={{color:"#ffff", alignSelf:'center', textAlignVertical:'auto', fontSize:15, fontWeight:"bold"}}>Get started</Text></TouchableOpacity>
     </View>
    {/*</LinearGradient>*/}
    </ImageBackground>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        marginTop: 80,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        textAlign:'center',
      },
    button:{
        marginHorizontal: 17,
        marginTop: 550,
        textAlign:'center',
        margin: 10,
        color: '#171717',
        borderRadius: 10,
        height:60,
        width:350,
        padding:15,
        backgroundColor:'#171717',
    },
    logo:{
        alignSelf:'center',
        height:95,
        width:90,
        marginTop:0,
    },
    body: {
        flex:1,
       },
});



export default Home;
