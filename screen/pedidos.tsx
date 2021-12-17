import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
export default function PedidosScreen({navigation}){
    const [busca,setBusca] = React.useState('');
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scview}>
            <View style={[styles.container2,{width:'100%',borderBottomWidth:2,borderBottomColor:'#fff',paddingBottom:10}]}>
                <Text style={{color:'#fff',fontSize:30}}>PEDIDOS</Text>
                <TextInput style={styles.input_text} value={busca} onChangeText={setBusca}/>
            </View>
            <View style={styles.cardsPD}>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43025, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43026, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43025, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43026, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43025, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43026, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43025, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity style={{minWidth: '100%', maxWidth: '100%'}}>
                    <Card containerStyle={styles.cardPD}>
                        <Card.Title style={styles.card_title}>PEDIDO Nº 43025</Card.Title>
                        <Card.Divider style={styles.card_line}/>
                        <Card.FeaturedSubtitle style={{color:"#fff",fontSize:16.25}}>Descrição</Card.FeaturedSubtitle>
                        <Text style={styles.card_text} numberOfLines={1}>Descrição do pedido 43026, fjodsa bfgjhk ghgh hkgh ghjg hjk</Text>
                    </Card>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
            </View>
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