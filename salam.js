console.log('salam dunya')
let x='nurgun'
let y='ganbarova'
console.log(x+y)
const fs=require('fs')
const { json } = require('stream/consumers')
fs.readFile(
    "./user.json",'utf-8',function(err,data){
       let x= JSON.parse(data)
       let sum=0;
       x.forEach(function(el,index){
        sum=sum+x[index].age/x.length
       });
       console.log("istifadecilerin orta yasi")
           
    }
)
