import Server from "./classes/server";
import router from './routes/routes';
import bodyParser from "body-parser";
import cors from 'cors';


const server = Server.instance;

//cors
server.app.use(cors({origin:true,credentials:true}));

//body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());


server.app.use('/',router)




server.start(()=>{

console.log(`servidor corriendo por puerto ${server.port}`)

});