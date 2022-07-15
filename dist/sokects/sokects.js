"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista = exports.escritorios = exports.atndera = exports.tiketgenerado = exports.desconectar = exports.tiket = exports.casos = void 0;
var aleatorio;
const tikets = [];
var ultimovalor;
exports.casos = [];
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
    });
};
exports.desconectar = desconectar;
const tiketgenerado = (cliente, io) => {
    cliente.on('tiketgenerado', () => {
        /* var aleatorio = Math.floor((Math.random() * (50 - 1 + 1)) + 1);*/
        aleatorio = Math.floor((Math.random() * (50 - 1 + 1)) + 1);
        tikets.push(aleatorio);
        console.log('tiket nuevo', tikets);
        io.emit('tiket-n', aleatorio);
    });
};
exports.tiketgenerado = tiketgenerado;
const atndera = (cliente, io) => {
    cliente.on('atiende', () => {
        //  var ultimovalor:Number;
        ultimovalor = tikets[tikets.length - 1];
        // console.log('ultimo elemento', ultimovalor);
        //  console.log('eliminado',tikets);
        io.emit('tiket-n2', ultimovalor);
        tikets.splice(-1, 1);
    });
};
exports.atndera = atndera;
const escritorios = (cliente, io) => {
    cliente.on('generarE', (datos) => {
        exports.casos.push(datos);
        console.log(exports.casos);
        io.emit('nocasos', exports.casos);
    });
};
exports.escritorios = escritorios;
const lista = (cliente, io) => {
    cliente.on('noti', (data) => {
        exports.tiket = data;
        io.emit('unico', exports.tiket);
        console.log(exports.tiket);
    });
};
exports.lista = lista;
