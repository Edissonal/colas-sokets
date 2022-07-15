import { Router, Request, Response } from 'express';
import Server from '../classes/server'
import { casos, tiket } from '../sokects/sokects';

const router = Router();

router.get('/mensajes',(req:Request,res:Response) =>{


     const server = Server._instance;
     server.io.emit('nocasos',casos);
    
    res.json({

        ok:true,
        casos
    });

});


router.post('/mensajes',(req:Request,res:Response) =>{


    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        

        ok:true,
        cuerpo,
        de
    });

});



router.get('/tiket',(req:Request,res:Response) =>{

    const server = Server._instance;
   // server.io.emit('',turnos);

    res.json({

        ok:true,
        tiket


});

});



router.post('/mensajes/:id',(req:Request,res:Response) =>{


    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.json({
        

        ok:true,
        cuerpo,
        de,
        id
    });

});




export default router;