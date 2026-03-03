//in-memory cache to reduce API calls
const pokemonCache = {};

const input = document.getElementById("pokemonInput");
const findBtn = document.getElementById("findBtn");
const addBtn = document.getElementById("addBtn");

const image = document.getElementById("pokemonImage");
const audio = document.getElementById("pokemonAudio");

const move1 = document.getElementById("move1");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");
const move4 = document.getElementById("move4");

const teamContainer = document.getElementById("teamContainer");

let currentPokemon = null;

//Fetch Pokemon Data
findBtn.addEventListener("click", async () => {

    const value = input.value.toLowerCase().trim();
    if (!value) return;

    try {

        let data;

        //Check cache first
        if (pokemonCache[value]) {
            data = pokemonCache[value];
        } else {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
            if (!response.ok) throw new Error("Pokemon not found");

            data = await response.json();

            //Save to cache
            pokemonCache[value] = data;
        }

        currentPokemon = data;

        loadPokemon(data);

    } catch (error) {
        alert("Pokemon not found. Try a number between 1-151 or a valid name.");
    }

});

//Load Pokemon Data to Page
function loadPokemon(data) {

    //Load Image
    image.src = data.sprites.front_default;

    //Load Audio 
    if (data.cries && data.cries.latest) {
        audio.src = data.cries.latest;
        audio.style.display = "block";
    } else {
        audio.style.display = "none";
    }

    //Clear previous dropdown options
    [move1, move2, move3, move4].forEach(select => {
        select.innerHTML = "";
    });

    //Limit to first 40 moves for usability
    const moves = data.moves.slice(0, 40);

    moves.forEach(moveObj => {
        const moveName = moveObj.move.name;

        [move1, move2, move3, move4].forEach(select => {
            const option = document.createElement("option");
            option.value = moveName;
            option.textContent = moveName;
            select.appendChild(option);
        });
    });

}

//Add Pokemon to Team
addBtn.addEventListener("click", () => {

    if (!currentPokemon) return;

    const selectedMoves = [
        move1.value,
        move2.value,
        move3.value,
        move4.value
    ];

    const teamMember = document.createElement("div");
    teamMember.classList.add("team-member");

    const img = document.createElement("img");
    img.src = currentPokemon.sprites.front_default;

    const moveList = document.createElement("ul");

    selectedMoves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        moveList.appendChild(li);
    });

    teamMember.appendChild(img);
    teamMember.appendChild(moveList);

    teamContainer.appendChild(teamMember);

});
