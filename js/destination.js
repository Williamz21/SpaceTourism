import json from "../data.json" assert {type: 'json'};

const getplanet = document.getElementsByClassName('planet-active');
const deleteactive = document.getElementsByClassName('delete-active');
const image = document.getElementById('image');
const planet = document.getElementById('planet');
const description = document.getElementById('description');
const distance = document.getElementById('distance');
const travel = document.getElementById('travel');

for (let i = 0; i < deleteactive.length; i++) {

    deleteactive[i].addEventListener('click',()=>{
        index(i);
    })
}

function index(number){
    for (var i = 0; i < deleteactive.length; i++) {
        if(deleteactive[i].classList.contains('planet-active')){
            deleteactive[i].classList.toggle('planet-active');
            break;
        } 
    }
    deleteactive[number].classList.toggle('planet-active');
    refreshList()
}

function refreshList(){
    for (let index = 0; index < json.destinations.length; index++) {
        if(getplanet[0].textContent==json.destinations[index].name){
            planet.innerHTML='<h1>'+json.destinations[index].name+'</h1>'
            image.innerHTML='<img src="'+json.destinations[index].images.png+'">'
            description.innerHTML='<p>'+json.destinations[index].description+'</p>'
            distance.innerHTML='<h6>'+json.destinations[index].distance+'</h6>'
            travel.innerHTML='<h6>'+json.destinations[index].travel+'</h6>'
            break;
        }
    }
}

function init(){
    refreshList()
}

init()