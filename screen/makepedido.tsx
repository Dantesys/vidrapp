import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Modal} from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { PedidoService } from '../api/pedido';
export default function MakePedidoScreen({navigation}){
    const [hasPermission, setHasPermission] = React.useState(null);
    const [type, setType] = React.useState(Camera.Constants.Type.back);
    const [desc,setDesc] = React.useState('');
    const [proj,setProj] = React.useState('');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [camVisible, setCamVisible] = React.useState(false);
    const [ref,setRef] = React.useState(null);
    React.useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    async function pedir(){
        let r = await PedidoService.pedir(desc,proj);
        console.log(r);
        alert('Pedido feito com sucesso');
        navigation.navigate('Pedidos');
    }
    async function galeria(){
        try{
            const r = await ImagePicker.launchImageLibraryAsync({quality:0.25,base64:true});
            if(!r.cancelled){
                setProj(r.base64);
                setModalVisible(!modalVisible);
            }
        }catch(err){
            console.log(err)
        }
    }
    async function foto(){
        try{
            let r = await ref.takePictureAsync({quality:0.25,base64:true});
            setProj(r.base64);
            setCamVisible(!camVisible);
        }catch(err){
            console.log(err);
        }
    }
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scview}>
            <View style={[styles.container2,{width:'100%'}]}>
                <Text style={{color:'#fff',fontSize:30}}>Descrição</Text>
                <TextInput multiline={true} numberOfLines={7} style={styles.input_text} value={desc} onChangeText={setDesc}/>
            </View>
            {proj ? (
                <View style={{paddingTop:10}}>
                    <Image style={{width:150,height:200,alignSelf:'center'}} source={{uri:`data:image/png;base64,${proj}`}}/>
                    <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}} style={{backgroundColor:'#00e0f0',margin:10,borderRadius:10}}>
                        <Text style={styles.btn_text}>ALTERAR</Text>
                    </TouchableOpacity>
                </View>
            ):(
                <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}} style={{backgroundColor:'#00e0f0',margin:10,borderRadius:10}}>
                    <Text style={styles.btn_text}>PROJETO</Text>
                </TouchableOpacity>
            )}
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
                        <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible);setCamVisible(!camVisible)}} style={{backgroundColor:'#00a0b0',width:'95%',margin:10,borderRadius:10}}>
                            <Text style={styles.btn_text}>Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{galeria()}} style={{backgroundColor:'#00a0b0',width:'95%',margin:10,borderRadius:10}}>
                            <Text style={styles.btn_text}>Galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{width:'95%',backgroundColor:'#ff0a0b',margin:10,borderRadius:10}}>
                            <Text style={styles.btn_text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                visible={camVisible}
                transparent={true}
                onRequestClose={() => {
                  setCamVisible(!camVisible);
                }}
            >
                <View style={styles.modal2}>
                    <View style={{flex:1,backgroundColor:'transparent'}}>
                        <Camera
                            style={{flex:1}}
                            ref={(r)=>setRef(r)}
                            type={type}
                            autoFocus={true}
                            focusDepth={1}
                        >
                            <TouchableOpacity onPress={() => setCamVisible(!camVisible)} style={{width:'98%',flexDirection:'row',alignContent:'flex-start' ,backgroundColor:'transparent',margin:10}}>
                                <Icon type="feather" name="chevron-left" size={42} color="#fff"/>
                            </TouchableOpacity>
                            <View style={{position:'absolute',bottom:30,flexDirection:'row',alignContent:'center',justifyContent:'center',backgroundColor:'transparent'}}>
                                <TouchableOpacity onPress={() => {setType(type === Camera.Constants.Type.back? Camera.Constants.Type.front: Camera.Constants.Type.back);}} style={{width:'25%',alignContent:'center',justifyContent:'center',backgroundColor:'transparent'}}>
                                    <Icon type="feather" name="rotate-ccw" size={42} color="#fff"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => foto()} style={{width:'54%',backgroundColor:'transparent'}}>
                                    <Icon type="feather" name="circle" size={75} color="#fff"/>
                                </TouchableOpacity>
                            </View>
                        </Camera>
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
    modal2: {
        flex: 1
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