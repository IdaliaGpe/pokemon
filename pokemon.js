const urlList = JSON.parse(sessionStorage.getItem('urlList'));
const sprite = sessionStorage.getItem('sprite');


//console.log(urlList);

const GetPokemon = ()=>{
    const spriteName = sprite.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', '');
    const spriteNumber = spriteName.replace('.png', '');
    console.log(spriteNumber);
    urlList.forEach(element => {

        let pokemonNumber = element.replace('https://pokeapi.co/api/v2/pokemon/', '');
        pokemonNumber = pokemonNumber.replace('/', '');
        if(spriteNumber == pokemonNumber)
        {
            console.log(element);
            GetInfo(element);
        }
    });
}

GetPokemon();

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

const pokemonImages = document.getElementById('pokemon.images');

const GetPokemon = async url =>{

    const data = await fetch(url);
    const dataJson = await data.json();
    
    const{sprites, name, types, abilities} = dataJson;

    /*console.log(await dataJson);

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

    return await sprites.front_default;
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

    const abilitiesPokemon = effect_entries.map( element =>{
        const{effect, language} = element;

        if(language.name === 'en'){
            //console.log(effect);
            return effect;
        }
    });

    //console.log(abilitiesPokemon);
}

GetPokemon();