import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import livro from './models/Livro.js';
const conexao =  await conectaNaDataBase();
conexao.on( "error", (error) => {
    console.log("erro na conexão: ",error);
})
conexao.once( "open", () => {
    console.log("Conexão estabelecida");
})



const app = express();

app.use(express.json()); //coverter pra json




// GET, POST, PUT e DELETE. É o chamado CRUD (Create, Read, Update e Delete

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js"); 
})

app.get("/livros", async(req, res) => {
    const listaLivros= await livro.find({})
    res.status(200).json(listaLivros);   
});

// app.get("/livros/:id",async (req, res) => {    
//   const index = buscarLivroPorId(req.params.id);
//   res.status(200).json(livros[index]);
// });

// app.post("/livros", (req, res) => {
//     livros.push(req.body);
//     res.status(201).send("livro criado");
// })

// app.put("/livros/:id", (req, res) => {
//     const index = buscarLivroPorId(req.params.id);
//     livros[index].nome=req.body.nome
//     res.status(200).send("livro alterado");
// })

// app.delete("/livros/:id", (req, res) => {
//     const index = buscarLivroPorId(req.params.id);
//     livros.splice(index, 1);  
//     res.status(200).send("livro excluido");});


export default app