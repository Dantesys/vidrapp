import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, ScrollView, TextInput, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { PedidoService } from '../api/pedido';
export default function PedidosScreen({route,navigation}){
    const usuario = route.params.usuario;
    const [pedidos,setPedidos] = React.useState([]);
    const [busca,setBusca] = React.useState('');
    React.useEffect(() => {
        loadData();
    },[route.params.usuario]);
    async function loadData(){
        let r = await PedidoService.list();
        setPedidos(r);
    }
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.scview}>
            <View style={[styles.container2,{width:'100%',borderBottomWidth:2,borderBottomColor:'#fff',paddingBottom:10}]}>
                <Text style={{color:'#fff',fontSize:30}}>PEDIDOS</Text>
                <TextInput style={styles.input_text} value={busca} onChangeText={setBusca}/>
            </View>
            <View style={styles.cardsPD}>
                <FlatList
                    data={pedidos}
                    renderItem={({item}) => 
                    <TouchableOpacity onPress={()=>{navigation.navigate('Detalhe',{pedido:item})}} key={item.key} style={{minWidth: '100%', maxWidth: '100%'}}>
                        <Card containerStyle={styles.cardPD}>
                            <Card.Title style={styles.card_title}>PEDIDO Nº {item.numero}</Card.Title>
                            <Card.Divider style={styles.card_line}/>
                            <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                            <Text style={styles.card_text} numberOfLines={1}>{item.descricao}</Text>
                        </Card>
                    </TouchableOpacity>
                    }
                />
            </View>
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
        textAlign: 'center',
        color: "#00c0d0",
        borderRadius: 10,
        padding: 5
    }
});