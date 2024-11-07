const key = "45cc6ee9300bf3bf3c2a20aae0444874"; 

function colocarDadosNaTela(dados) {
  console.log(dados);

  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  
 
  const temp = dados.main.temp - 273.15; 
  document.querySelector(".temp").innerHTML = `${Math.round(temp)}°C`;

  
  const descricao = dados.weather[0].description;
  document.querySelector(".text-prev").innerHTML = descricao.charAt(0).toUpperCase() + descricao.slice(1); 
}

async function buscarcidade(cidade) {
  try {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`)
      .then(resposta => resposta.json());

    
    colocarDadosNaTela(dados);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

function cliquenobotao() {
  const cidade = document.querySelector(".input").value;
  if (cidade) {
    buscarcidade(cidade);
  } else {
    alert("Por favor, insira o nome de uma cidade!");
  }
}