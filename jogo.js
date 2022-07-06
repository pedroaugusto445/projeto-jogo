const sprites = new Image();
sprites.src = "imagems/sprites.png"

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext('2d');
const flappyBird = {
    spritesX: 0,
    spritesy: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,

    desenhar() {
          
         contexto.drawImage(
            sprites,
            flappyBird.spritesX,flappyBird.spritesy,
            flappyBird.largura,flappyBird.altura,
            flappyBird.x,flappyBird.y,
            flappyBird.largura, flappyBird.altura,

        )


    } 
}

const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,

    desenhar() {
        contexto.drawImage(
            sprites,
            chao.spriteX,
            chao.spriteY,
            chao.largura,
            chao.altura,
            chao.x,
            chao.y,
            chao.largura,
            chao.altura
        )

        contexto.drawImage(
            sprites,
            chao.spriteX,
            chao.spriteY,
            chao.largura,
            chao.altura,
            (chao.x + chao.largura),
            chao.y,
            chao.largura,
            chao.altura
        )
    }
}








function loop() {
    flappyBird.desenhar()
    chao.desenhar()
    requestAnimationFrame(loop)
}

loop()