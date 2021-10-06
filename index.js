//EXPRESS
const express = require('express');
const app = express();
const port = 9000;

//API / urls
app.get('/', (req, res) => {
    res.send ("Let's learn about different ways to cook food!");
});

//EGGS
app.get('/api/eggs', (req, res) => {
    //dummy data
    const eggs = ["Hard Boiled", "Soft Boiled", "Poached", "Sunny-side Up", "Omelette"];
    res.send(JSON.stringify(eggs));
});

//POTATOES
app.get('/api/potatoes', (req, res) => {
    //dummy data
    const potatoes = ["Baked", "Mashed", "Fries", "Tater Tots", "Hashbrown"];
    res.send(JSON.stringify(potatoes));
});

app.listen(port, () => {
    console.log("Listening on port", port)
});

