
//secao utilidade publica....

// var objetoTouchMethod = {};

// objetoTouchMethod.updateDirVel = function()//movimento de formiguinhas.
// {
//     this.direcaoGraus =  (Math.atan2((-this.posInicialY+this.y),(-this.posInicialX+this.x)))*(180/Math.PI);
//     this.velocidade =  (Math.sqrt((this.x-this.posInicialX)*(this.x-this.posInicialX) +(this.y-this.posInicialY)*(this.y-this.posInicialY)))/((Date.now() - this.touchStartTime)/1000);
// };

// export function objTouch()
// {
//     var results = {};
//     results.naTela = false;
//     results.x = 0;
//     results.y = 0;
//     results.h = 5;
//     results.w = 5;
//     results.velocidade = 0.0;
//     results.direcaoGraus = 0.0;
//     results.touchStartTime=0.0;
//     results.posInicialX = -50;
//     results.posInicialY = -50;
//     results.previousTouchTime = 0.0;
//     results.posAnteriorX = -50;
//     results.posAnteriorY = -50;

//     results.updateDirVel = () => {
//         results.direcaoGraus =  (Math.atan2((-results.posInicialY+results.y),(-results.posInicialX+results.x)))*(180/Math.PI);
//         results.velocidade =  (Math.sqrt((results.x-results.posInicialX)*(results.x-results.posInicialX) +(results.y-results.posInicialY)*(results.y-results.posInicialY)))/((Date.now() - results.touchStartTime)/1000);
//     }

//     return results;
// }



// function tocouObj(listaObjs,objetoTouch)//da forma que esta o unico objeto retornado eh o ultimo que for desenhado
// {    // isso implica em passar uma listaObjs ordenada por ordem de desenho sendo que o ultimo desenhado eh o ultimo da lista.
//     offset=0//serve para prover um gap
//     var listaColisoes = [];
//     var conf = false;
//     var j = objetoTouch;
//     //var listaPula = [];
//     for (i in listaObjs)
//     {
//         if (listaObjs[i].x < j.x + j.w &&
//         listaObjs[i].x + listaObjs[i].w > j.x &&
//         listaObjs[i].y < j.y + j.h &&
//         listaObjs[i].h + listaObjs[i].y > j.y)
//         {
//             listaColisoes = [listaObjs[i],j];
//             conf = true;
//         }
//     }
//     return [conf,listaColisoes]
// }





    
class objTouch {
    constructor(){
        this.naTela = false;
        this.x = 0;
        this.y = 0;
        this.h = 5;
        this.w = 5;
        this.velocidade = 0.0;
        this.direcaoGraus = 0.0;
        this.touchStartTime=0.0;
        this.posInicialX = -50;
        this.posInicialY = -50;
        this.previousTouchTime = 0.0;
        this.posAnteriorX = -50;
        this.posAnteriorY = -50;
    }

    updateDirVel() {
        this.direcaoGraus =  (Math.atan2((-this.posInicialY+y),(-this.posInicialX+x)))*(180/Math.PI);
        this.velocidade =  (Math.sqrt((this.x-this.posInicialX)*(this.x-this.posInicialX) +(this.y-this.posInicialY)*(this.y-this.posInicialY)))/((Date.now() - this.touchStartTime)/1000);
    }
}

export { objTouch} ;
