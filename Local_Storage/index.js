let name=document.getElementById("name");
let age=document.getElementById("age");
let main_containe=document.getElementById("container");
function sub(){
    localStorage.setItem("name",name.value);
    localStorage.setItem("age",age.value);
}
function rev(){
    document.getElementById("first").innerText=`Name: ${localStorage.getItem("name")}`;
    let age=document.createElement("p");
    document.getElementById("second").innerText=`Age: ${localStorage.getItem("age")}`;
}