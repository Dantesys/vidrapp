import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Modal, Pressable } from 'react-native';
import { Card } from 'react-native-elements';
export default function MakePedidoScreen({navigation}){
    const [desc,setDesc] = React.useState('');
    const [espe,setEspe] = React.useState('');
    const [cor,setCor] = React.useState('');
    const [alt,setAlt] = React.useState('');
    const [com,setCom] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    function pedir(){
        navigation.navigate('Pedidos');
    }
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scview}>
            <View style={[styles.container2,{width:'100%'}]}>
                <Text style={{color:'#fff',fontSize:30}}>Espessura</Text>
                <TextInput keyboardType={'numeric'} style={styles.input_text} placeholder="mm" value={espe} onChangeText={setEspe}/>
                <View style={styles.duplocont}>
                    <View style={{width:"50%",alignItems:'center'}}>
                        <Text style={{color:'#fff',fontSize:30}}>Altura</Text>
                        <TextInput keyboardType={'numeric'} style={[styles.input_text,{paddingLeft:5,paddingRight:5}]} placeholder="cm" value={alt} onChangeText={setAlt}/>
                    </View>
                    <View style={{width:"50%",alignItems:'center'}}>
                        <Text style={{color:'#fff',fontSize:30}}>Largura</Text>
                        <TextInput keyboardType={'numeric'} style={[styles.input_text,{paddingLeft:5,paddingRight:5}]} placeholder="cm" value={com} onChangeText={setCom}/>
                    </View>
                </View>
                <Text style={{color:'#fff',fontSize:30}}>Cor</Text>
                <TextInput style={styles.input_text} value={cor} placeholder="Incolor" onChangeText={setCor}/>
                <Text style={{color:'#fff',fontSize:30}}>Descrição</Text>
                <TextInput multiline={true} numberOfLines={7} style={styles.input_text} value={desc} onChangeText={setDesc}/>
            </View>
            <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}} style={{backgroundColor:'#00e0f0',margin:10,borderRadius:10}}>
                <Text style={styles.btn_text}>PROJETO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{pedir()}} style={{backgroundColor:'#12de12',margin:10,borderRadius:10}}>
                <Text style={styles.btn_text}>PEDIR</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal}>
                    <View style={styles.modalvw}>
                        <TouchableOpacity style={{backgroundColor:'#00a0b0',width:'95%',margin:10,borderRadius:10}}>
                            <Text style={styles.btn_text}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#00a0b0',width:'95%',margin:10,borderRadius:10}}>
                            <Text style={styles.btn_text}>Galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{width:'95%',backgroundColor:'#ff0a0b',margin:10,borderRadius:10}}>
                            <Text style={styles.btn_text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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