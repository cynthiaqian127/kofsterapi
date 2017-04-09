/**
 * Created by Eduardo Velloso on 10/04/2017.
 */
// Set up express
var express = require('express');
var app = express();

var cafes = [
    {
        "name":"Hipster Emporium",
        "address":"Richmond",
        "distance":"6.2 km",
        "rating":"4.0",
        "photo":"https://source.unsplash.com/O50HtSlCzag/"
    },
    {
        "name":"Lumberjack Cafe",
        "address":"Fitzroy",
        "distance":"1.9 km",
        "rating":"4.4",
        "photo":"https://source.unsplash.com/QC1u9B333ys/350x233"
    },
    {
        "name":"The Naked Barista",
        "address":"Collingwood",
        "distance":"2.7 km",
        "rating":"4.3",
        "photo":"https://source.unsplash.com/g-erOiuDxro/350x233"
    },
    {
        "name":"The Coffee Cobbler",
        "address":"Melbourne CBD",
        "distance":"2.2 km",
        "rating":"3.2",
        "photo":"https://source.unsplash.com/BonjBu19IiY/350x233"
    },
    {
        "name":"Kofsmanship",
        "address":"Toorak",
        "distance":"9.3 km",
        "rating":"3.9",
        "photo":"https://source.unsplash.com/xoBg77epln0/350x233"
    },
    {
        "name":"Before it Becomes Cool",
        "address":"Carlton",
        "distance":"650 m",
        "rating":"4.6",
        "photo":"https://source.unsplash.com/94taEmdowRw/350x233"
    },
    {
        "name":"Kawa",
        "address":"Fitzroy",
        "distance":"1.9 km",
        "rating":"2.4",
        "photo":"https://source.unsplash.com/4qJdtfJ2MmQ/350x233"
    }
];

app.post('/api',function(req,res){
    res.send('Received post');
});

app.get('/api',function(req,res){
    res.send(cafes);
});

app.listen(3000,function(req,res){
   console.log('Express listening on port 3000');
});