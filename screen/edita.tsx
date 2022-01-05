import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Modal, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
import MaskInput from 'react-native-mask-input';
export default function EditarScreen({navigation}){
    const [senha,setSenha] = React.useState('');
    const [rsenha,setRSenha] = React.useState('');
    const [nome,setNome] = React.useState('');
    const [rua,setRua] = React.useState('');
    const [num,setNum] = React.useState('');
    const [bairro,setBairro] = React.useState('');
    const [cep,setCep] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    function pedir(){
        navigation.navigate('Inicio');
    }
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scview}>
            <View style={[styles.container2,{width:'100%'}]}>
                <Text style={{color:'#fff',fontSize:30}}>Senha</Text>
                <TextInput
                    style={styles.input_text}
                    onChangeText={setSenha}
                    value={senha}
                    secureTextEntry={true}
                />
                <Text style={{color:'#fff',fontSize:30}}>Repetir Senha</Text>
                <TextInput
                    style={styles.input_text}
                    onChangeText={setRSenha}
                    value={rsenha}
                    secureTextEntry={true}
                />
                <Text style={{color:'#fff',fontSize:30}}>Nome</Text>
                <TextInput
                    style={styles.input_text}
                    onChangeText={setNome}
                    value={nome}
                />
            </View>
            <TouchableOpacity onPress={()=>{pedir()}} style={{backgroundColor:'#12de12',margin:10,borderRadius:10}}>
                <Text style={styles.btn_text}>SALVAR</Text>
            </TouchableOpacity>
            <View style={[styles.container2,{width:'100%'}]}>
                <Text style={[{color:'#fff',fontSize:30},{textAlign:"center"}]}>ENDEREÇO</Text>
                <Text style={{color:'#fff',fontSize:30}}>CEP</Text>
                <MaskInput
                    style={styles.input_text}
                    onChangeText={(masked,unmasked)=>{
                        setCep(masked);
                    }}
                    value={cep}
                    keyboardType='numeric'
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                />
                <Text style={{color:'#fff',fontSize:30}}>Rua</Text>
                <TextInput
                    style={styles.input_text}
                    onChangeText={setRua}
                    value={rua}
                />
                <Text style={{color:'#fff',fontSize:30}}>Número</Text>
                <TextInput
                    style={styles.input_text}
                    onChangeText={setNum}
                    value={num}
                    keyboardType="numeric"
                />
                <Text style={{color:'#fff',fontSize:30}}>Bairro</Text>
                <TextInput
                    style={styles.input_text}
                    onChangeText={setBairro}
                    value={bairro}
                />
            </View>
            <TouchableOpacity onPress={()=>{pedir()}} style={{backgroundColor:'#12de12',margin:10,borderRadius:10}}>
                <Text style={styles.btn_text}>ALTERAR ENDEREÇO</Text>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00c0d0',
        paddingTop: "5%",
        alignItems: 'center',
    },
    scview:{
        width: '100%'
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'baseline',
        backgroundColor: 'transparent'
    },
    modalvw: {
        backgroundColor: "#00f0ff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: "center",
        width:'100%',
        minHeight: '30%',
        maxHeight: '40%'
    },
    container2: {
        alignItems: 'center',
        backgroundColor: '#00c0d0',
    },
    duplocont:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    cards:{
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginBottom: 20
    },
    cardsPD:{
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    card:{
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#00b0d0'
    },
    cardPD:{
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 1,
        backgroundColor: '#00e0f0'
    },
    card_title:{
        color: '#fff',
        fontSize: 17.5
    },
    card_line:{
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    card_text:{
        color: '#fff',
        fontSize: 15,
        textAlign: 'justify'
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
    },
    input_text:{
        backgroundColor: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        width: "98%",
        textAlign: 'justify',
        color: "#00c0d0",
        borderRadius: 10,
        padding: 5
    }
});