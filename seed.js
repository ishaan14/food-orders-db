const mongoose = require('mongoose');
const Food = require('./models/food')


const dummy_food=[
    {
        name:'Burger',
        price:40,
        desc:'Extra cheese and spicy'
    },
    {
        name:'Paneer Tikka',
        price:222.5,
        desc:'Smooth and delicious paneer,grilled to perfection'
    },
    {
        name:'Pizza',
        price:88,
        desc:'italian style pizza'
    },
    {
        name:'Pasta',
        price:50,
        desc:'Saucy and Creamy loaded with mayo'
    },
    {
        name:'Noodles',
        price:60,
        desc:'Korean style soupy noodles'
    }
];

const seedDb=async()=>{
    await Food.deleteMany({});
    await Food.insertMany(dummy_food);  
    console.log('Db seeded');
}

module.exports=seedDb;