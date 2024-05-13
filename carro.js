let xCarros = [600,600,600,600,600,600];
let yCarros = [35, 90, 150, 200, 260, 310];
let velocidadeCarro = [2, 2.5, 3.2, 4.2, 5, 2];

function mostraCarro(){

  for(let i=0; i < imagemCarros.length; i = i+1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 50);
  }

}

function movimentaCarro(){
  for(let i=0; i < imagemCarros.length; i = i+1){
  xCarros[i] -= velocidadeCarro[i];
  }
}

function retornaCarro(){
  for(let i=0; i < imagemCarros.length; i = i+1){
    
  if (xCarros[i] < -50){
    
    xCarros[i] = 550;
      }
  }
  }
