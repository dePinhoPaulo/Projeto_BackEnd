require('dotenv').config()
const mongoose = require("mongoose")

const dblink = process.env.DB_LINK

mongoose.connect(`${dblink}`)
.then(()=>{console.log("Mongobd Conectado...");})
.catch((error)=>{console.log("Houve um erro: " + error);
})

//teste db
const Schema = mongoose.Schema; // Add this line to define the Schema object

const UsuariotestSchema = new Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  }
});

const Usuariotest = mongoose.model('usuariostest', UsuariotestSchema); // Create a model using the schema

new Usuariotest({
  nome: "paulo",
  sobrenome: "pinho", // Corrected "Sobrenome" to "sobrenome"
  email: "sasdasdaf@fasdfds.com",
  idade: 45
}).save().then(() => {
  console.log("usuario criado com sucesso");
}).catch((err) => {
  console.log("Houve erro ao criar o usuario" + err);
});