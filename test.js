// var mod1 = require('module1');
// console.log('mod1 = ', mod1);

// var total = mod1(2,3);
// console.log("total = ", total);

// var total = mod1.mult(2,3);
// console.log("total = ", total);

var fs = require('fs');

//var data = fs.readFileSync('fichier1.txt', { encoding: 'utf-8' });
//console.log('Contenu du fichier :');
//console.log(data);

fs.readFile("fichier1.txt" , {encoding : 'utf-8'} , function(error, data){console.log(data);})
console.log("la méthode redafile() a été appelée");

var colors = require("colors");
console.log("colors = ", colors);