import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import logo from '../assets/icon.png'
export default function HomeScreen({navigation}){
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
            <Image style={{ width: 300, height: 300 }} source={logo}/>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.btn_text}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('Cadastro')}}>
                <Text style={styles.btn_text}>CADASTRO</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E1EAF4',
        paddingTop: "5%",
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#E1EAF4',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    btn:{
        backgroundColor: '#00C1F9',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#6793AC",
        alignSelf: 'stretch',
        padding: 6,
        minWidth: "75%"
    },
    btn_text:{
        fontSize: 30,
        fontWeight: "bold",
        alignItems: 'center',
        textAlign: 'center',
        color: "#fff"
    }
});