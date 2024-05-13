function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(Fundo);
  mostraCarro();
  mostraAtor();
  movimentaAtor();
  movimentaCarro();
  retornaCarro();
  marcaPonto();
  incluiPontos();
  verificaColisao();
}





