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
    const eggs = ["Hard  Egg", "Soft Boiled Egg", "Poached Egg", "Sunny-side Up Egg", "Omelette"];
    res.send(JSON.stringify(eggs));
});

//POTATOES
app.get('/api/potatoes', (req, res) => {
    //dummy data
    const potatoes = ["Baked Potato", "Mashed Potatoes", "Fries", "Tater Tots", "Hashbrowns"];
    res.send(JSON.stringify(potatoes));
});

//NOODLES
app.get('/api/noodles', (req, res) => {
    //dummy data
    const noodles = ["Pasta", "Hand-pulled Noodles", "Instant Noodles", "Rice Noodles", "Fried Noodles"];
    res.send(JSON.stringify(noodles));
});

//STRAWBERRIES
app.get('/api/strawberries', (req, res) => {
    //dummy data
    const strawberries = ["Strawberry Tarts", "Strawberry Milkshake", "Chocolate Covered Strawberries", "Strawberry Shortcake", "Strawberry Ice-cream"];
    res.send(JSON.stringify(strawberries));
});

app.listen(port, () => {
    console.log("Listening on port", port)
});

