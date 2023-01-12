import express from "express";
import * as dotenv from 'dotenv' 
dotenv.config()
import { db } from "../db/databaseMongo.js";
import { formulario } from "../routes/index.js";
export class Server {
  constructor() {
    this.port = process.env.PORT || 5000
    //Express
    this.app = express();
    //Middleware
    this.middleware();
    //ruta
    this.rutas();
    this.mongodb();
  }

  middleware(){
    this.app.use(express.json())
  };

  async mongodb(){
    await db();
  }
  rutas() {
    this.app.use("/api/v1" , formulario)
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando");
    });
  }
}
