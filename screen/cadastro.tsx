import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, TextInput, ScrollView } from 'react-native';
import MaskInput from 'react-native-mask-input';
import { AuthService } from '../api/auth';
export default function CadastroScreen({navigation}){
    const [email,setEmail] = React.useState('');
    const [senha,setSenha] = React.useState('');
    const [nome,setNome] = React.useState('');
    const [rua,setRua] = React.useState('');
    const [num,setNum] = React.useState('');
    const [bairro,setBairro] = React.useState('');
    const [cep,setCep] = React.useState('');
    async function cadastro(){
        let endereco = {
            rua: rua,
            num: num,
            bairro: bairro,
            cep: cep
        }
        let r = await AuthService.cadastro(nome,email,senha,endereco);
        navigation.navigate('Home');
    }
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container2}>
            <View style={styles.form}>
                <Text style={styles.form_text}>Email</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                />
                <Text style={styles.form_text}>Senha</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry={true}
                />
                <Text style={styles.form_text}>Nome</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setNome}
                    value={nome}
                />
                <Text style={[styles.form_text,{textAlign:"center"}]}>ENDEREÇO</Text>
                <Text style={styles.form_text}>CEP</Text>
                <MaskInput
                    style={styles.form_input}
                    onChangeText={(masked,unmasked)=>{
                        setCep(masked);
                    }}
                    value={cep}
                    keyboardType='numeric'
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                />
                <Text style={styles.form_text}>Rua</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setRua}
                    value={rua}
                />
                <Text style={styles.form_text}>Número</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setNum}
                    value={num}
                    keyboardType="numeric"
                />
                <Text style={styles.form_text}>Bairro</Text>
                <TextInput
                    style={styles.form_input}
                    onChangeText={setBairro}
                    value={bairro}
                />
                <TouchableOpacity onPress={()=>{cadastro()}} style={styles.btn}>
                    <Text style={styles.btn_text}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E1EAF4',
        paddingTop: "5%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2:{
        flex: 1,
        backgroundColor: '#E1EAF4',
        alignContent: "center",
        flexDirection: "column"
    },
    form:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00E0F0',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        minWidth: '100%'
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