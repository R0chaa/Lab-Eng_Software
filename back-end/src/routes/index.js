import express from "express";
import condominio from "./condominioRoutes.js";


const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("CConnect"));
    app.use(express.json(), condominio);
};

export default routes