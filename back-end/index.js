require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        message: "Conectado!"
    })
})


app.get("/Morador/:email/:senha", async (req,res)=>{
    const { email , senha } = req.params;
    const Morador = await db.selectLoginMorador(email, senha);
    res.json(Morador);
})

app.get("/Morador/:email/", async (req,res)=>{
    const Morador = await db.selectVerificarMorador(req.params.email);
    res.json(Morador);
})

app.post("/Morador", async(req,res)=>{
    await db.insertMorador(req.body);
    res.sendStatus(201);
})

app.patch("/Morador/:id", async(req,res) =>{
    await db.updateMorador(req.params.id, req.body);
    res.sendStatus(200);
})

app.delete("/Morador/delete/:id", async(req,res)=>{
    await db.deleteMorador(req.params.id);
    res.sendStatus(204);
})

app.listen(port);