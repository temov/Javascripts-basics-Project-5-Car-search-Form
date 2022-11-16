var modelKola = document.getElementById("model");
var vKola = modelKola.value.toLowerCase();
var mokKola = document.getElementById("mok");
var vmok = mokKola.value.toLowerCase();
var x = document.getElementById("make");
var y = document.getElementById("type");
var cars = [{model: "S40", make: "Volvo", type: "saloon", fuel: "lpg", cond:"new", power:"100kw"},{model: "c class",make: "Mercedes", type: "estate",fuel: "diesel", cond:"new", power:"95kw"},{model: "a3",make: "Audi", type: "coupe",fuel: "gas", cond:"old", power:"80kw"}];
var i;
var res = "";

function all(){
    selectValue();
    selectValueT();
    radioG();
    radioS();
    textInput();
}
function selectValue(){
    var select = x.options[x.selectedIndex].text.toLowerCase();
    for (i in cars){
    if (select == cars[i].make.toLowerCase()){
        res+= cars[i].make + " ";
        console.log(res);
    };
}
}
function selectValueT(){
    var selected = y.options[y.selectedIndex].text.toLowerCase();
    for (i in cars){
    if (selected == cars[i].type.toLowerCase()){
        res+=cars[i].type +" ";
        console.log(res);
    };
}
}
function radioG(){
    var radioButt = document.querySelector('input[name="gorivo"]:checked');
    for (i in cars){
    if (radioButt.checked){
        res+= radioButt.value + " ";
        console.log(res);
    };
}
}
function radioS(){
    var radios = document.querySelector('input[name="sostojba"]:checked');
    for (i in cars){
    if (radios.checked){
        res+= radios.value + " ";
        console.log(res);
    };
}
}
function textInput(){
        res+= vKola + vmok + " ";
        console.log(res);  
    };




    
