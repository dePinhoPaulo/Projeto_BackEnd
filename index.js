require('dotenv').config()
const mongoose = require("mongoose")

const dblink = process.env.DB_LINK

mongoose.connect(`${dblink}`)
.then(()=>{console.log("Mongobd Conectado...");})
.catch((error)=>{console.log("Houve um erro: " + error);
})
