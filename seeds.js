const mongoose=require('mongoose');
const Product=require('./models/product');
mongoose.connect("mongodb://localhost:27017/farmStand",{useNewUrlParser:true}).catch(err=>{console.log('Oh no an error')});

// const p=new Product({
//     name:'Ruby Grapefruit',
//     price:1.99,
//     category:'fruit'
// })

// p.save().then(p=>{
//     console.log(p);
// }).catch(e=>{
//     console.log(e);
// })
const seedProducts=[
    {
        name:'tomato',
        price:0.5,
        category:'vegetables'
    },
    {
        name:'zucchini',
        price:2,
        category:'vegetables'
    },
    {
        name:'apple',
        price:0.25,
        category:'fruit'
    },
    {
        name:'Chocolate milk',
        price:0.5,
        category:'dairy'
    }
]
Product.insertMany(seedProducts).then(()=>{
    console.log('success')
}).catch(e=>{
    console.log(e);
})

