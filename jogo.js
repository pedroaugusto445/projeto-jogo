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
    gravidade: 8.25,
    velocidade: 0,
    atualizar() {
        flappyBird.y = flappyBird.y + flappyBird.gravidade;
        flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade
    },

    desenhar(){
        contexto.drawImage(
            sprites, 
            flappyBird.spritesX,flappyBird.spritesy,
            flappyBird.largura,flappyBird.altura,
            flappyBird.x,flappyBird.y,
            flappyBird.largura,flappyBird.altura,
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

    const planoDefundo = {
        spriteX: 390,
        spriteY: 0,
        largura: 275,
        altura: 100,
        x: 0,
        y: canvas.height - 204,
        desenhar() {
            contexto.fillStyle = '#70c5ce';
            contexto.fillRect(0,0, canvas.width, canvas.height)

            contexto.drawImage(
                sprites,
                planoDefundo.spriteX,planoDefundo.spriteY,
                planoDefundo.largura,planoDefundo.altura,
                planoDefundo.x,planoDefundo.y,
                planoDefundo.largura,planoDefundo.altura,
            )
                contexto.drawImage(
                    sprites,
                    planoDefundo.spriteX,planoDefundo.spriteY,
                    planoDefundo.largura,planoDefundo.altura,
                    (planoDefundo.x + planoDefundo.largura),planoDefundo.y,
                    planoDefundo.largura,planoDefundo.altura
            )
        } 
    }







function loop() {

    flappyBird.atualizar()
    
    planoDefundo.desenhar()
    chao.desenhar()
    flappyBird.desenhar()

    requestAnimationFrame(loop)
}

loop()