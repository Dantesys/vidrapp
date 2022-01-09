import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { PedidoService } from '../api/pedido';
export default function DetalheScreen({route,navigation}){
    const usuario = route.params.usuario;
    const pedido = route.params.pedido;
    const [pedidos,setPedidos] = React.useState([]);
    React.useEffect(() => {
        loadData();
    },[route.params.usuario]);
    async function loadData(){
        console.log(pedido);
    }
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.scview}>
            <View style={[styles.container2,{width:'100%',borderBottomWidth:2,borderBottomColor:'#fff',paddingBottom:10}]}>
                <Text style={{color:'#fff',fontSize:30}}>PEDIDO Nº{pedido.numero}</Text>
            </View>
            <View style={styles.cardsPD}>
                <Text style={styles.card_text}>{pedido.descricao}</Text>
            </View>
            <Image style={{width:300,height:400,alignSelf:'center'}} source={{uri:`data:image/png;base64,${pedido.projeto.projeto}`}}/>
        </View>
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
    container2: {
        alignItems: 'center',
        backgroundColor: '#00c0d0',
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
        marginBottom: 20
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
        marginTop: -10
    },
    card_text:{
        color: '#fff',
        fontSize: 20,
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
        textAlign: 'center',
        color: "#00c0d0",
        borderRadius: 10,
        padding: 5
    }
});