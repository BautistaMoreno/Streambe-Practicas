let miEdad = 18;
let edadMaxima = 92;
let snackFavorito = "barras de cereal";
let snacksPorDia = 2;

let aniosRestantes = edadMaxima - miEdad;
let snacksRestantes = aniosRestantes * 365 * snacksPorDia;

alert(`Necesitaras ${snacksRestantes} snacks para que te alcancen hasta los ${edadMaxima} anios.`);

let precioPorUnidad = 750;
let gastoTotal = snacksRestantes * precioPorUnidad;

alert(`Gastaras aproximadamente $${gastoTotal} en snacks el resto de tu vida.`);