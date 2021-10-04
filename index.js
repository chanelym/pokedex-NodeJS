const express = require("express");
const app = express();
const path = require("path"); 
const port = process.env.PORT || 3000;

let message = "";

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded( { extended: true } ));

// Creating JSON for Pokémon Info

const pokedex = [
    {
    number: "012",
    name: "Butterfree",
    type: "Bug",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    height: "1.1m",
    weight: "32Kg",
    category: "Borboleta",
    skill: "Compound Eyes",
    },
    {
    number: "004",
    name: "Charmander",
    type: "Fire",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    description: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    height: "0.6m",
    weight: "8.5Kg",
    category: "Lizard",
    skill: "Blaze",
    },
    {
    number: "039",
    name: "Jigglypuff",
    type: "Fairy",
    photo: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    description: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won’t stop singing its lullabies until its foes fall asleep.",
    height: "0.5m",
    weight: "5.5Kg",
    category: "Balloon",
    skill: "Cute Charm",
    }
];

// Initiating Routing

app.get("/", function (req, res) {
    setTimeout(() => {
        message = "";
      }, 1000);
    res.render("index.ejs", { pokedex: pokedex, message });
});

app.get("/cadastro", function (req, res) {
    res.render("cadastro.ejs", );
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
        message = 'Parabéns, seu Pokémon foi cadastrado!'
    res.redirect("/");
});

app.get('/detalhes/:id', function (req, res) {
    const id = req.params.id;
    const poked = pokedex[id];
    res.render("detalhes", { poked });
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));