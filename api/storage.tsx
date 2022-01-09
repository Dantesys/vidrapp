import AsyncStorage from "@react-native-async-storage/async-storage";
export const _storeData = async (type, data) => {
    try{
        await AsyncStorage.setItem(type, JSON.stringify(data));
    } catch(error){

    }
}
export const _retrieveData = async (type) => {
    try{
        const value = await AsyncStorage.getItem(type);
        return JSON.parse(value);
    } catch(err){
        console.log(err);
    }
}
export const getUser = async () => {
    const usuario = await _retrieveData("usuario");
    return JSON.parse(usuario);
}
export const getToken = async () => {
    const token = await _retrieveData("token");
    return token;
}