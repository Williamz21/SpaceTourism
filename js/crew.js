import json from "../data.json" assert {type: 'json'};

const getcrew = document.getElementsByClassName('circle-active');
const circle = document.getElementsByClassName('circle');
const name = document.getElementById('name');
const role = document.getElementById('role');   
const bio = document.getElementById('bio');
const image = document.getElementById('imagecrew');

for (let i = 0; i < circle.length; i++) {
    circle[i].addEventListener('click',()=>{
        index(i);
    })
}

function index(number){
    for (var i = 0; i < circle.length; i++) {
        if(circle[i].classList.contains('circle-active')){
            circle[i].classList.toggle('circle-active');
            break;
        } 
    }
    circle[number].classList.toggle('circle-active');
    refreshList(parseInt(getcrew[0].className.split(' ')[1]))
}

function refreshList(number = 0){
    name.innerHTML='<h3>'+json.crew[number].name+'</h3>';
    image.innerHTML='<img src="'+json.crew[number].images.png+'">';
    role.innerHTML='<h4>'+json.crew[number].role+'</h4>';
    bio.innerHTML='<p>'+json.crew[number].bio+'</p>';
}

function init(){
    refreshList()
}

init()