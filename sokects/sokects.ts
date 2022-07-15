import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import Server from '../classes/server';

var aleatorio:number;
const tikets: Array<any> = [];
var ultimovalor:Number;
export const casos: Array<any> = [];
export var tiket:any;

export const  desconectar =(cliente:Socket) =>{

    cliente.on('disconnect',()=>{

        console.log('Cliente Desconectado');
    });

}



export const  tiketgenerado =(cliente:Socket,io:socketIO.Server) =>{

        cliente.on('tiketgenerado',()=>{

       /* var aleatorio = Math.floor((Math.random() * (50 - 1 + 1)) + 1);*/
        aleatorio = Math.floor((Math.random() * (50 - 1 + 1)) + 1);

        tikets.push(aleatorio)
        console.log('tiket nuevo',tikets);

        io.emit('tiket-n',aleatorio);
        
    });

   
}


export const atndera =(cliente:Socket,io:socketIO.Server) =>{

    cliente.on('atiende',()=>{
      //  var ultimovalor:Number;
        ultimovalor =tikets[tikets.length -1];
       // console.log('ultimo elemento', ultimovalor);
       
      //  console.log('eliminado',tikets);
        io.emit('tiket-n2',ultimovalor);
        tikets.splice(-1,1);

    });
}


export const escritorios =(cliente:Socket,io:socketIO.Server) =>{

    cliente.on('generarE',(datos:{id:number,valor:number})=>{        
        casos.push(datos);
        console.log(casos);
        io.emit('nocasos',casos);
    });


}



export const lista =(cliente:Socket,io:socketIO.Server) =>{

    cliente.on('noti',(data:{id:number,valor:number})=>{    
        tiket = data;        
       io.emit('unico',tiket);
       console.log(tiket);
 
    });


}


