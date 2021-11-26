import React from 'react';
import { StyleSheet, View, Text, TouchableOpacityBase, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const HomeScreen = ({route,navigation}) => {
  const [func,setFunc] = React.useState(null)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={{fontSize:20}}>HOME</Text>
      </View>
    </SafeAreaView>
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
          onPress={()=>{navigation.navigate('Detalhes',{func:item})}}
        ><Text style={{fontSize:20}}>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const DetailScreen = ({route,navigation}) => {
  const func = route.params.func;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={{fontSize:20}}>{func.nome}</Text>
        <Text style={{fontSize:18}}>Descrição</Text>
        <Text style={{fontSize:16,textAlign: 'justify'}}>{func.desc}</Text>
      </View>
    </SafeAreaView>
  )
}
const profileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Lista de Funcionarios"
          component={ProfileScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetailScreen}
        />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen 
          name="Funcionarios"
          component={profileStack}
        />
      </Drawer.Navigator>
      
    </NavigationContainer>
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
