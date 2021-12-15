import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'
//TELAS
import HomeScreen from './screen/index';
import LoginScreen from './screen/login';
import CadastroScreen from './screen/cadastro';
import DashboardScreen from './screen/dashboard';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DashBoard(){
  return(
    <Drawer.Navigator
      drawerContent={(props) => <DrawerItem
          label="Sair"
          labelStyle={{color:"#fff",fontSize:15}}
          inactiveBackgroundColor="#00d0f0"
          onPress={()=>{props.navigation.navigate("Home")}}
        />}
      screenOptions={{
          drawerStyle: {
            backgroundColor: "#000",
          }
        }}
    >
      <Drawer.Screen
        name="Inicio"
        component={DashboardScreen}
        options={{
          headerShown:true,
          headerStyle:{backgroundColor: '#E1EAF4'}
        }}
      />
    </Drawer.Navigator>
  )
}
const ProfileScreen = ({navigation}) => {
  const func = [
    {nome:'Teste',desc:'Um teste'},
    {nome:'Douglas',desc:'Eu sou o douglas você não é o douglas'},
    {nome:'Dantesys',desc:'Desenvolvedor'},
    {nome:'Pedrin_sigma',desc:'Testador beta'},
    {nome:'Netilvan',desc:'Maketing'}
  ]
  return (
    <View>
      {func.map((item,key)=>(
        <TouchableOpacity
          style={styles.btn}
          key={key}
          onPress={()=>{navigation.navigate('Home',{func:item})}}
        ><Text style={{fontSize:20}}>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const RoomScreen = ({navigation}) => {
  const func = [
    {num:'01',desc:'Diretoria'},
    {num:'02',desc:'Deposito'},
    {num:'03',desc:'Servidor'},
    {num:'04',desc:'Dormitorio'},
    {num:'05',desc:'Lanchonete'},
  ]
  return (
    <View>
      {func.map((item,key)=>(
        <Text key={key} style={{fontSize:20}}>Sala {item.num} - {item.desc}</Text>
      ))}
    </View>
  )
}
export default function App() {
  return (
    <SafeAreaView style={{flex:1,paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{headerShown:false}}
          />
          <Stack.Screen 
            name="Login"
            component={LoginScreen}
            options={{
              headerShown:true,
              title:"VIDRAPP LOGO",
              headerTitleAlign:'center',
              headerTitleStyle:{fontSize:25},
              headerShadowVisible: false,
              headerStyle:{backgroundColor: '#E1EAF4'}
            }}
          />
          <Stack.Screen 
            name="Cadastro"
            component={CadastroScreen}
            options={{
              headerShown:true,
              title:"VIDRAPP LOGO",
              headerTitleAlign:'center',
              headerTitleStyle:{fontSize:25},
              headerShadowVisible: false,
              headerStyle:{backgroundColor: '#E1EAF4'}}}
          />
          <Stack.Screen 
            name="Dashboard"
            component={DashBoard}
            options={{
              headerShown:false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: "5%",
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: "5%",
  },
  vw: {
    flexDirection: 'row',
  },
  input:{
    borderColor: '#45cd45',
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25
  },
  btn:{
    backgroundColor: '#45cd45',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
});