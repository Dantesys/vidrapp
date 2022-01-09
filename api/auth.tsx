import { api } from './api';
import { _retrieveData, _storeData } from './storage';

var login = async (email:string, senha:string) => {
    try {
        const result = await api.post('/auth/login', { "email": email, "senha": senha });
        const { accessToken } = result.data;
        await _storeData("token", accessToken);
        return result.data.user;
    } catch (err) {
        console.log(err);
    }
}
var logout = async () => {
    try {
        await _storeData("token", null);
    } catch (err) {
        console.log(err);
    }
}

var changeData = async (nome:string,senha:any,endereco:object) => {
    try {
        let result = await api.post(`/auth/edit`, { nome:nome,senha:senha,endereco:endereco });
        return result.data;
    } catch (err) {
        throw err;
    }
}
var cadastro = async (nome:string,email:string,senha:string,endereco:object) => {
    try{
        let result = await api.post(`/auth/cadastro`, { nome:nome,email:email,senha:senha,endereco:endereco,tp:0 });
        console.log(result.data);
    } catch(err){
        console.log(err);
    }
}
const AuthService = {
    login: login,
    changeData: changeData,
    logout: logout,
    cadastro: cadastro,
}
export { AuthService };