let butao = document.getElementById("butao") //ta informando que o o elemento esta com ID "butao"
let atk = document.getElementById("attack")
let hp = document.getElementById("hp")
let def = document.getElementById("defense")
let spAtk = document.getElementById("special-attack")
let speed = document.getElementById("speed")
let aby = document.getElementById("aby")
let namep = document.getElementById("ab")

let box = document.getElementById("box")


butao.addEventListener('click', function(){ //informando o que o botao faz, nesse caso ele quer o click
    let sound = new Audio("pling.mp3");  // variavel do som
      sound.currentTime = 0;
      sound.play();
    fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 150)).then(function(resp){ //resta ta voltando a resposta da funcao
        return resp.json()
    }).then(function(json){
        
//fetch ta pegando do API informado, o + math.floor(floor eh para numero inteiro)(random * 150 pq edoi apenas que foi determinado, nao quis buscar os outros.)


        // do something with the json payload
       
        let pokemon = json //resposta de qual pokemon que, abaixo eh a informacao dada no API
        let Pname = pokemon.forms[0].name
        let attack = pokemon.stats[1].base_stat
        let healthp = pokemon.stats[0].base_stat
        let defense = pokemon.stats[2].base_stat
        let speAtk = pokemon.stats[3].base_stat
        let sp = pokemon.stats[5].base_stat
        

        let img = document.getElementById("img") //novamente pegando o ID e salvando na variavel
        img.src = pokemon.sprites.front_default //a fonte vem do API
         
        namep.textContent = Pname.toUpperCase() //ele troca o conteudo que ta na DIV, nesse caso o spontinhos.
        atk.textContent = attack
        hp.textContent = healthp
        def.textContent = defense
        spAtk.textContent = speAtk
        speed.textContent = sp
        
       fetch(pokemon.abilities[0].ability.url).then(function(resp){ //esse fetch so esta aqui pq tinha q ter 2 fetch no dever.
           return resp.json()
       }).then(function(json){
           let abilities = json
           let aName = abilities.name
           aby.textContent = aName.toUpperCase() //sair maisuculo
           
        })
    
      
       
    })
})




//  img https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// 
//