let xAtor = 100;
let yAtor = 365;
let meusPontos = 0;

function mostraAtor(){
  
  image(imagemAtor, xAtor, yAtor, 40, 30);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
      
    yAtor -= 3;
      }
  
  if (keyIsDown(DOWN_ARROW)){
      
    yAtor += 3;
      }
  if (keyIsDown(65)){
      
    xAtor += 3;
      }

  
  
}

function marcaPonto(){
  //print(yAtor);
  //print(meuprints);
  
  if(yAtor < 2){
    meusPontos  += 1;
    voltaAtor();
  }
}

function voltaAtor(){
  
  yAtor = 375;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos,350,27);
  fill(color(124,252,0));
}


function verificaColisao(){
  
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], 40, 30,
                               xAtor, yAtor, 70);
    if (colisao){
      colidiu();
    }
    
  }    
}

function colidiu(){
  yAtor = 366;
  
  if(pontosMaiorQueZero()){
    meusPontos -= 1;
  }
  
}


function pontosMaiorQueZero(){
  return meusPontos > 0;
}
