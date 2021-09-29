const express = require("express");
const app = express();
const path = require("path"); 
const port = 3000; 

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    const pokedex = [];
    const pokelist = pokedex.push({Nome: 'teste', Imagem: 'teste', Tipo: 'teste'});
    res.render("index.ejs", { pokedex: pokedex });
});

app.get("/cadastro", function (req, res) {
    res.render("../views/cadastro.ejs");
});

app.get("/detalhes", function (req, res) {
    const details = ['Imagem', 'Descrição', 'Altura', 'Peso', 'Categoria', 'Habilidade'];
    res.render("../views/detalhes.ejs", { details: details });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));