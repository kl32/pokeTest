'use strict'

function fetchReq(url){
return fetch(url)
    .then(res => res.json())
    .catch(err => console.log("Something went wrong"));
}

//array of Pokemon names to randomly populate requests
const pokemon = [
  "ditto",
  "pikachu",
  "gastly",
  "eevee",
  "psyduck",
  "squirtle",
  "bulbasaur",
  "charizard",
  "magikarp",
  "mew",
  "mewtwo",
  "articuno",
  "blastoise",
  "caterpie",
  "metapod",
  "pidgeot",
  "rattata",
  "arbok",
  "sandslash",
  "nidorina",
  "clefairy",
  "jigglypuff",
  "oddish",
  "vileplume"

];

// get two random pokemon

let randomPoke1 = pokemon[Math.floor(Math.random() * pokemon.length)];

let randomPoke2 = pokemon[Math.floor(Math.random() * pokemon.length)];


Promise.all([
 fetchReq('https://pokeapi.co/api/v2/pokemon/' + randomPoke1),
 fetchReq('https://pokeapi.co/api/v2/pokemon/' + randomPoke2)
 ]).then(data=>{
     console.log(data)
getPokemonOne(data["0"].name, data["0"].sprites.front_default, data["0"].stats["4"].base_stat)
getPokemonTwo(data["1"].name, data["1"].sprites.front_default, data["1"].stats["4"].base_stat)

})

 //functions to get data to DOM

 function getPokemonOne(name,img, attack){
     pokemonOne.innerHTML = "<h2>" + name.charAt(0).toUpperCase() + name.slice(1) + "</h2>"; 
     imgOne.innerHTML = `<img src= ${img}>`
     attackStat1.innerHTML = `Attack power: ${attack}`
    
     pokeBattle.push(attack);
 }

 function getPokemonTwo(name,img, attack){
    pokemonTwo.innerHTML = "<h2>" + name.charAt(0).toUpperCase() + name.slice(1) + "</h2>";
    imgTwo.innerHTML = `<img src= ${img}>`
    attackStat2.innerHTML = `Attack power: ${attack}`
    
    pokeBattle.push(attack);
    
}

    let pokeBattle = [];

// battle pokemon


function battle(){

    if(pokeBattle[0] > pokeBattle[1]) {
        document.getElementById("battle").innerHTML =  pokemonOne.innerHTML + " has won!"
    } else {
        document.getElementById("battle").innerHTML = pokemonTwo.innerHTML + " has won!"
    } 
}

const assert = require('assert');

function getPokemon(fetch, endpoint){
    fetch('https://pokeapi.co/api/v2/' + endpoint)
        .then( response => response.json() )
        .then( data => data )
        .catch( error => console.log("oops, looks like we got an error: ", error) )
        .finally( ()=> console.log("finally, This function always runs...") ) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
}

describe('getPokemon', () => {
    it ('tests fetch and pokemon endpoint', () => {
        const testFetch = url => {
            assert (
                url === 'https://pokeapi.co/api/v2/pokemon'
            )
            return new Promise(function(){})
        }
        getPokemon(testFetch, 'pokemon')
    })
    it ('tests 10 pokemon', () => {
        const testFetch = url => {
            assert (
                url === 'https://pokeapi.co/api/v2/pokemon?page=1&per_page=10'
            )
            return new Promise(function(){})
        }
        getPokemon(testFetch, 'pokemon?page=1&per_page=10')
    })
})
