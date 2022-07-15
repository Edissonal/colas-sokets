import express from 'express';  
import { SERVER_PORT } from '../globals/enviroment';
import socketIO from 'socket.io'
import http from 'http';
import * as sokect from '../sokects/sokects'





export default class Server{

    public static _instance:Server;
    public app: express.Application;
    public port:number;
    public io:socketIO.Server;
    private httpserver:http.Server;

 private  constructor(){ 
   this.app = express();
   this.port  = SERVER_PORT;

   this.httpserver = new http.Server(this.app);
   this.io = new socketIO.Server(this.httpserver,{
    cors:{
        origin:true,
        credentials:true
    }
   });

   this.escucharSokets();

  }

 private escucharSokets(){

  console.log('Escuchando conecxiones');

  this.io.on('connection',cliente=>{

      console.log('nuevo cliente conectado');

      //desconectar
      sokect.desconectar(cliente);
      sokect.tiketgenerado(cliente,this.io);   
      sokect.atndera(cliente,this.io);
      sokect.escritorios(cliente,this.io);
      sokect.lista(cliente,this.io);

      
  });
 }


     public static get instance(){

        return this._instance || (this._instance = new this());

     }

  start(callback:any){
      this.httpserver.listen(this.port,callback);

  }


}