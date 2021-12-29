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
import PedidosScreen from './screen/pedidos';
import MakePedidoScreen from './screen/makepedido';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DashBoard({navigation}){
  return(
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {backgroundColor:"#000"}
    }}
      initialRouteName="Inicio"
    >
      <Drawer.Screen
        name="Inicio"
        component={DashboardScreen}
        options={{
          headerShown:true,
          headerStyle:{backgroundColor: '#E1EAF4'},
          drawerLabel: "Inicio",
          drawerItemStyle: {backgroundColor:"#00c0d0"},
          drawerLabelStyle: {color:"#fff",fontSize:15},
          drawerType: 'slide',
          drawerIcon: ((props)=> <Icon type="feather" name="home" size={18} color="#fff"/>)
        }}
      />
      <Drawer.Screen
        name="Pedidos"
        component={PedidosScreen}
        options={{
          headerShown:true,
          headerStyle:{backgroundColor: '#E1EAF4'},
          headerRight: ((props)=> <TouchableOpacity onPress={()=>{navigation.navigate('Fazer Pedido')}} style={{paddingRight:10}}><Icon type="feather" name="edit" size={25} color="#000"/></TouchableOpacity>),
          drawerLabel: "Pedidos",
          drawerItemStyle: {backgroundColor:"#00c0d0"},
          drawerLabelStyle: {color:"#fff",fontSize:15},
          drawerType: 'slide',
          drawerIcon: ((props)=> <Icon type="feather" name="clipboard" size={18} color="#fff"/>)
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={HomeScreen}
        options={{
          headerShown:false,
          drawerLabel: "Sair",
          drawerItemStyle: {backgroundColor:"#00c0d0"},
          drawerLabelStyle: {color:"#fff",fontSize:15},
          drawerType: 'slide',
          drawerIcon: ((props)=> <Icon type="feather" name="log-out" size={18} color="#fff"/>)
        }}
      />
      <Drawer.Screen
        name="Fazer Pedido"
        component={MakePedidoScreen}
        options={{
          headerShown:true,
          headerStyle:{backgroundColor: '#E1EAF4'},
          drawerLabel:()=>null,
          title: undefined,
          drawerIcon:()=>null,
        }}
      />
    </Drawer.Navigator>
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