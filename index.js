const express = require("express");
const app = express();
const path = require("path"); 
const port = 3000; 

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded( { extended: true } ));

// Creating JSON for Pokémon Info

const pokedex = [{
    number: "",
    name: "",
    type: "",
    photo: "",
    description: "",
    height: "",
    weight: "",
    category: "",
    skill: "",
}];

// Initiating Routing

app.get("/", function (req, res) {
    res.render("index.ejs", { pokedex: pokedex });
});

app.get("/cadastro", function (req, res) {
    res.render("../views/cadastro.ejs");
});

app.post("/receiveinfo", function (req, res) {
    const {poke_number, poke_name, poke_type, poke_photo, poke_description, poke_height, poke_weight, poke_category, poke_skill} = req.body;
    pokedex.push({
        number: poke_number, 
        name: poke_name, 
        type: poke_type, 
        photo: poke_photo, 
        description: poke_description, 
        height: poke_height, 
        weight: poke_weight, 
        category: poke_category, 
        skill: poke_skill});
    res.redirect("/cadastro");
});

app.get("/detalhes", function (req, res) {
    res.render("../views/detalhes.ejs", { pokedex : pokedex });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));