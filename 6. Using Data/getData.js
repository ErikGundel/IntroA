
let url = "https://erikgundel.github.io/IntroA/pokemon.json";
let data;

async function getData(){
  try {
    let response = await fetch(url);
    data = await response.json();
    readData(data);
  }
  catch(error) {
    console.log(error);
  }
}

getData();

