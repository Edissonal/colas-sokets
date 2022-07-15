"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
const sokects_1 = require("../sokects/sokects");
const router = (0, express_1.Router)();
router.get('/mensajes', (req, res) => {
    const server = server_1.default._instance;
    server.io.emit('nocasos', sokects_1.casos);
    res.json({
        ok: true,
        casos: sokects_1.casos
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        cuerpo,
        de
    });
});
router.get('/tiket', (req, res) => {
    const server = server_1.default._instance;
    // server.io.emit('',turnos);
    res.json({
        ok: true,
        tiket: sokects_1.tiket
    });
});
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
exports.default = router;
