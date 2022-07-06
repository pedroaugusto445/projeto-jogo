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

    const telaInicio = {
        sX: 134,
        sy: 0,
        w: 174,
        h: 152,
        x: (canvas.width/ 2) - 174 / 2,
        y: 50,

        desenhar() {
            contexto.drawImage(
                sprites,
                telaInicio.sX, telaInicio.sy,
                telaInicio.w, telaInicio.h,
                telaInicio.x,telaInicio.y,
                telaInicio.w,telaInicio.h,
            )
        },
    }


let telaActive =  {}

 function mudaDetela(novatela) {
    telaActive = novatela
}



const tela = {
    INICIO: {
        desenhar(){
            planoDefundo.desenhar();
            chao.desenhar();
            flappyBird.desenhar();
            telaInicio.desenhar();
        },
        atualiza() {

        }
    }
}

tela.JOGO = {
    desenhar() {
        planoDefundo.desenhar()
        chao.desenhar()
        flappyBird.desenhar()
    },

    click() {
        mudaDetela(INICIO.JOGO)
    },

    atualiza() {
        flappyBird.atualizar()
    }
}


function loop() {
    telaActive.desenhar()
    telaActive.atualiza()
    
    requestAnimationFrame(loop)
}

window.addEventListener('click', function() {
    if(telaActive.click)  {
        telaActive.click()
    }
})

mudaDetela(tela.INICIO)
    
loop()