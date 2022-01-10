import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, ScrollView, TextInput, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { PedidoService } from '../api/pedido';
export default function PedidosScreen({route,navigation}){
    const usuario = route.params.usuario;
    const [pedidos,setPedidos] = React.useState([]);
    const [listbusca,setListbusca] = React.useState([]);
    const [busca,setBusca] = React.useState('');
    const [loading,setLoading] = React.useState(true);
    React.useEffect(() => {
        loadData();
    },[route.params.usuario]);
    async function loadData(){
        setLoading(true);
        let r = await PedidoService.list();
        setPedidos(r);
        setListbusca(r);
        setLoading(false);
    }
    async function buscar(){
        setLoading(true);
        let info = [
            "Enviado para fabrica",
            "Entrou em analise",
            "Analisado",
            "Entrou em produção",
            "Projeto produzido",
            "Entrou para escala de entrega",
            "Enviado",
            "Erro com o seu projeto"
        ]
        let r = [];
        let fe = pedidos;
        if(busca!=''){
            fe.forEach((item,index)=>{
                if(item.numero.toString().includes(busca)){
                    r.push(item);
                }else if(item.descricao.includes(busca)){
                    r.push(item);
                }else{
                    info.map((item2)=>{
                        if(item2.includes(busca)){
                            r.push(item);
                        }
                    })
                }
            });
        }else{
            r=pedidos;
        }
        setListbusca(r);
        setLoading(false);
    }
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.scview}>
            <View style={[styles.container2,{width:'100%',borderBottomWidth:2,borderBottomColor:'#fff',paddingBottom:10}]}>
                <Text style={{color:'#fff',fontSize:30}}>PEDIDOS</Text>
                <TextInput onEndEditing={()=>buscar()} style={styles.input_text} value={busca} onChangeText={setBusca}/>
            </View>
            {!loading && listbusca && (<FlatList
                data={listbusca}
                scrollEnabled={true}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={()=>{navigation.navigate('Detalhe',{pedido:item})}} key={item.key} style={{minWidth: '100%', maxWidth: '100%'}}>
                        <Card containerStyle={styles.cardPD}>
                            <Card.Title style={styles.card_title}>PEDIDO Nº {item.numero}</Card.Title>
                            <Card.Divider style={styles.card_line}/>
                            {item.estado==0 && (
                                <Text style={styles.card_text}>Enviado para fabrica</Text>
                            )}
                            {item.estado==1 && (
                                <Text style={styles.card_text}>Entrou em analise - {item.dti_analise}</Text>
                            )}
                            {item.estado==2 && (
                                <Text style={styles.card_text}>Analisado - {item.dtf_analise}</Text>
                            )}
                            {item.estado==3 && (
                                <Text style={styles.card_text}>Entrou em produção - {item.dti_producao}</Text>
                            )}
                            {item.estado==4 && (
                                <Text style={styles.card_text}>Projeto produzido - {item.dtf_producao}</Text>
                            )}
                            {item.estado==5 && (
                                <Text style={styles.card_text}>Entrou para escala de entrega - {item.dti_escala}</Text>
                            )}
                            {item.estado==6 && (
                                <Text style={styles.card_text}>Enviado - {item.dtf_escala}</Text>
                            )}
                            {item.estado==9 && (
                                <Text style={styles.card_text}>Erro com o seu projeto</Text>
                            )}
                            <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                            <Text style={styles.card_text} numberOfLines={1}>{item.descricao}</Text>
                        </Card>
                    </TouchableOpacity>
                }
            />)}
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