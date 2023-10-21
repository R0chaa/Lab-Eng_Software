import express from "express";
import CondominioController from "../controllers/condominioController.js"

const routes = express.Router();

routes.get("/condominio", AutorController.listarAutores);


export default routes;