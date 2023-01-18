import json from "../data.json" assert {type: 'json'};

const gettechnology = document.getElementsByClassName('technology-active');
const deletetechnology = document.getElementsByClassName('technology');
const name = document.getElementById('name');
const description = document.getElementById('description');
const image = document.getElementById('imagetechnology');

for (let i = 0; i < deletetechnology.length; i++) {
    deletetechnology[i].addEventListener('click',()=>{
        index(i);
    })
}

function index(number){
    for (var i = 0; i < deletetechnology.length; i++) {
        if(deletetechnology[i].classList.contains('technology-active')){
            deletetechnology[i].classList.toggle('technology-active');
            break;
        } 
    }
    deletetechnology[number].classList.toggle('technology-active');
    refreshList(parseInt(gettechnology[0].className.split(' ')[1]))
}

function refreshList(number = 0){
    name.innerHTML='<h3>'+json.technology[number].name+'</h3>';
    image.innerHTML='<img src="'+json.technology[number].images.portrait+'">';
    description.innerHTML='<p>'+json.technology[number].description+'</p>';
}

function init(){
    refreshList()
}

init()