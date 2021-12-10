import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
export default function LoginScreen({navigation}){
    const [email,setEmail] = React.useState('');
    const [senha,setSenha] = React.useState('');
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container2}>
            <View style={styles.form}>
                <Text style={styles.form_text}>EMAIL</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="EMAIL"
                    keyboardType="email-address"
                />
                <Text style={styles.form_text}>SENHA</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="SENHA"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.btn}
                    onPress={()=>{
                        navigation.navigate('Dashboard');
                    }}
                >
                    <Text style={styles.btn_text}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E1EAF4',
        paddingTop: "5%",
        alignItems: 'center',
    },
    container2:{
        flex: 1,
        backgroundColor: '#E1EAF4',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    form:{
        flexDirection: 'column',
        backgroundColor: '#00E0F0',
        borderRadius: 20
    },
    form_text:{
        fontSize: 25,
        fontWeight: "bold",
        alignItems: 'flex-start',
        textAlign: 'left',
        color: "#fff",
        paddingLeft: 10,
        paddingTop: 10
    },
    form_input:{
        backgroundColor: '#fff',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#00C1F9",
        alignSelf: 'stretch',
        padding: 6,
        minWidth: "75%",
        fontSize: 25
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