import { api } from './api';
import { _retrieveData, _storeData } from './storage';

var pedir = async (descricao:string, projeto:string) => {
    try {
        const result = await api.post('/pedidos/fazer', {descricao:descricao,projeto:{projeto}});
        return result.data.pedido;
    } catch (err) {
        console.log(err);
    }
}
var list = async () => {
    try {
        const result = await api.get('/pedidos/list');
        return result.data;
    } catch (err) {
        console.log(err);
    }
}
const PedidoService = {
    pedir: pedir,
    list: list
}
export { PedidoService };