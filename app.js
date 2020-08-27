const pokemon = {
    sprite: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name'),
    /*ability1: document.getElementById('pokemon-ability1'),
    ability2: document.getElementById('pokemon-ability2'),
    egg: document.getElementById('pokemon-egg'),
    type: document.getElementById('pokemon-type'),
    type1: document.getElementById('pokemon-type1')*/
    types: document.getElementById('pokemon-types'),
    abilities: document.getElementById('pokemon-abilities'),
}


const GetPokemon = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/decidueye';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites, name, types, abilities} = dataJson;

    console.log(await dataJson);

    pokemon.sprite.src = await sprites.front_default;
    pokemon.name.innerHTML = await `Name: ${name}`;
    /*pokemon.ability1.innerHTML = await `<li>${abilities[0].ability.name}</li>`;
    pokemon.ability2.innerHTML = await `<li>${abilities[1].ability.name}</li>`;
    pokemon.type.innerHTML = await `<li>${types[0].type.name}</li>`;
    pokemon.type1.innerHTML = await `<li> ${types[1].type.name}</li>`;*/

    types.forEach(element => {
        const {type} = element;
        //console.log(type.name);
        pokemon.types.innerHTML += `<li>${type.name}</li>`;
    });

    abilities.forEach(element => {
        const{ability} = element;
        //pokemon.abilities.innerHTML += `<li>${ability.name}</li>`;
        //console.log(ability.url);
        GetAbilityInfo(ability.url,  ability.name);

        //console.log(pokemonAbilitesInfo);
    });
    
    //console.log(await abilities);
}

const GetAbilityInfo= async (url, abilityName)=>{

    const data = await fetch(url);
    const dataJson = await data.json();
    const{effect_entries} = dataJson;

    let effectsList = '';

    effect_entries.forEach(element => {

        const{effect, language} = element;

        if(language.name === 'en'){
            //console.log(effect);
            effectsList += `<li>${effect}</li>`;
        }
    });

    pokemon.abilities.innerHTML += 
    `<li>
        ${abilityName}
        <div>effect</div>
        <ul>
            ${effectsList}
        </ul>
    </li>`;

    /*const abilitiesPokemon = effect_entries.map( element =>{
        const{effect, language} = element;

        if(language.name === 'en'){
            //console.log(effect);
            return effect;
        }
    });*/

    //console.log(abilitiesPokemon);
}

GetPokemon();

const pokemones = {
    sprite1: document.getElementById('pokemones-image1'),
    sprite2: document.getElementById('pokemones-image2'),
    sprite3: document.getElementById('pokemones-image3'),
    sprite4: document.getElementById('pokemones-image4'),
    sprite5: document.getElementById('pokemones-image5'),
    sprite6: document.getElementById('pokemones-image6'),
    sprite7: document.getElementById('pokemones-image7'),
    sprite8: document.getElementById('pokemones-image8'),
    sprite9: document.getElementById('pokemones-image9'),
    sprite10: document.getElementById('pokemones-image10')
}
 
//mew
const GetPokemones = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/151/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite1.src = await sprites.front_default;
    /*pokemones.sprite2.src = await sprites.front_default;
    https://pokeapi.co/api/v2/pokemon?offset=140&limit=10
    pokemones.sprite3.src = await sprites.front_default;
    pokemones.sprite4.src = await sprites.front_default;
    pokemones.sprite5.src = await sprites.front_default;
    pokemones.sprite6.src = await sprites.front_default;
    pokemones.sprite7.src = await sprites.front_default;
    pokemones.sprite8.src = await sprites.front_default;
    pokemones.sprite9.src = await sprites.front_default;
    pokemones.sprite10.src = await sprites.front_default;*/

}
GetPokemones();

const GetChikorita = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/152/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite2.src = await sprites.front_default;
}
GetChikorita();

const GetBayleef = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/153/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite3.src = await sprites.front_default;
}
GetBayleef();

const GetMeganium = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/154/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite4.src = await sprites.front_default;
}
GetMeganium();

const GetCyndaquil = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/155/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite5.src = await sprites.front_default;
}
GetCyndaquil();

const GetQuilava = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/156/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite6.src = await sprites.front_default;
}
GetQuilava();

const GetTyphlosion = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/157/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite7.src = await sprites.front_default;
}
GetTyphlosion();

const GetTotodile = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/158/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite8.src = await sprites.front_default;
}
GetTotodile();

const GetCroconaw = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/159/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite9.src = await sprites.front_default;
}
GetCroconaw();

const GetFeraligatr = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/160/';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites} = dataJson;

    console.log(await dataJson);

    pokemones.sprite10.src = await sprites.front_default;
}
GetFeraligatr();