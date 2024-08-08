const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili',
  ];
  
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  let timeInterval;
  
  // Seleccionar elementos del DOM
  const randomWordElement = document.getElementById('randomWord');
  const textInput = document.getElementById('text');
  const timeSpan = document.getElementById('timeSpan');
  const scoreElement = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');
  
  // Función para obtener una palabra aleatoria
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Función para agregar palabra al DOM
  function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordElement.innerHTML = palabraAleatoria;
  }
  
  // Evento de input para chequear la palabra ingresada
  textInput.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value;
  
    if (palabraIngresada === palabraAleatoria) {
      addToDOM();
      updateScore();
      e.target.value = '';
      time += 3;
    }
  });
  
  // Función para actualizar el tiempo
  function actualizarTiempo() {
    time--;
    timeSpan.innerHTML = `${time}s`;
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  
  // Función para actualizar el puntaje
  function updateScore() {
    score++;
    scoreElement.innerHTML = score;
  }
  
  // Función para terminar el juego
  function gameOver() {
    endGameContainer.innerHTML = `
      <h1>Se acabó el tiempo</h1>
      <p>Tu puntaje final es: ${score}</p>
      <button onclick="location.reload()">Reiniciar</button>
    `;
    document.querySelector('.main').style.display = 'none';
  }
  
  // Inicializar el juego
  addToDOM();
  textInput.focus();
  timeInterval = setInterval(actualizarTiempo, 1000);
  