// --- Configuración MVP Mario Runner ---

let serial; // Objeto Serial
let latestData = [512, 0]; // [slider, mic] valores iniciales
let sliderValue = 512;
let micValue = 0;

// Estados del juego
const ESTADO_MENU = 0;
const ESTADO_JUEGO = 1;
const ESTADO_GAMEOVER = 2;
let estadoJuego = ESTADO_MENU;

// Mario
let mario;
let gravedad = 1.0;
let saltoVel = -14;
let cooldownSalto = 0;

// Obstáculos
let obstaculos = [];
let obstaculoCooldown = 0;
let velocidadObstaculos = 6;

// Puntuación
let score = 0;
let highscore = 0;

// Dimensiones
const W = 480;
const H = 320;

// --- Configuración p5.js ---
function setup() {
  let canvas = createCanvas(W, H);
  canvas.parent('sketch-holder');
  frameRate(60);

  mario = new Mario