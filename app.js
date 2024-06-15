const metaData = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};
const characters = metaData.characters;
const container = document.getElementById("container");
const button = document.getElementById("button");
let isActive = false;

function renderCharacters(renderCharacters = characters) {
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("characters-row");
  container.append(row);
  for (i = 0; i < renderCharacters.length; i++) {
    let pic = renderCharacters[i].pic;
    let name = renderCharacters[i].name;
    let homeworld = (
      renderCharacters[i].homeworld ?? "other"
    ).toLocaleLowerCase();
    let cardHtmlData = `
        <div class="card mx-auto mt-2" style="width: 20rem;">
                <img class="card-img-top" src="${pic}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${homeworld}</p>
                </div>     
            </div>
        `;
    row.innerHTML += cardHtmlData;
  }
  button.innerHTML = "Karakterleri Gizle";
  button.classList.replace("btn-primary", "btn-danger");
  isActive = true;
}

function changeCharactersVisibility(removedClass) {
  if (isActive) {
    if (removedClass) {
      document.querySelectorAll(`.${removedClass}`).forEach(e => e.remove());
      button.innerHTML = "Karakterleri Göster";
      button.classList.replace("btn-danger", "btn-primary");
      isActive = false;
    } else {
      document.querySelectorAll(".row").forEach((e) => e.remove());
      button.innerHTML = "Karakterleri Göster";
      button.classList.replace("btn-danger", "btn-primary");
      isActive = false;
    }
  } else {
    renderFilters();
    renderCharacters();
  }
}

function getUniqueHomeworld() {
  const homeworldRaw = characters.map(
    (character) => character.homeworld ?? "other"
  );
  const homeworldLowerCase = homeworldRaw.map((homeworld) =>
    homeworld.toLocaleLowerCase()
  );
  const uniqueHomeworlds = [...new Set(homeworldLowerCase)];
  return uniqueHomeworlds;
}

function renderFilters() {
  homeworldList = getUniqueHomeworld();
  const row = document.createElement("div");
  row.classList.add("row");
  row.classList.add("filter-row");
  container.append(row);
  homeworldList.push("all");
  homeworldList.forEach((element) => {
    const item = document.createElement("div");
    item.className = "filter-item";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `homeworld`;
    input.value = element;
    input.className = "form-check-input";
    if (element === "all") {
      input.checked = true;
    }
    const label = document.createElement("label");
    label.htmlFor = element;
    label.className = "form-check-label";
    label.innerText = element.toLowerCase();
    item.appendChild(input);
    item.appendChild(label);
    row.appendChild(item);
    input.addEventListener("click", () => {
      let filteredCharacters;
      if (element === "other") {
        filteredCharacters = characters.filter(
          (character) => character.homeworld === undefined
        );
      } else if (element === "all") {
        filteredCharacters = characters;
      } else {
        filteredCharacters = characters.filter(
          (character) => character.homeworld?.toLocaleLowerCase() === element
        );
      }
      changeCharactersVisibility("characters-row");
      renderCharacters(filteredCharacters);
    });
  });
}

let play = document.getElementById("music");
let audio = new Audio("Star Wars - The Imperial March (Darth Vaders Theme).mp3");
let isPlaying = false;

function playMusic() {
    if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}
play.addEventListener("click", playMusic);
