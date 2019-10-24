var objetoTouchMethod = {};

objetoTouchMethod.updateDirVel = function()//movimento de formiguinhas.
{
    this.direcaoGraus =  (Math.atan2((-this.posInicialY+this.y),(-this.posInicialX+this.x)))*(180/Math.PI);
    this.velocidade =  (Math.sqrt((this.x-this.posInicialX)*(this.x-this.posInicialX) +(this.y-this.posInicialY)*(this.y-this.posInicialY)))/((Date.now() - this.touchStartTime)/1000);
};

objTouch = function ()
{
    var results = {};
    results.naTela = false;
    results.x = 0;
    results.y = 0;
    results.h = 5;
    results.w = 5;
    results.velocidade = 0.0;
    results.direcaoGraus = 0.0;
    results.touchStartTime=0.0;
    results.posInicialX = -50;
    results.posInicialY = -50;
    results.previousTouchTime = 0.0;
    results.posAnteriorX = -50;
    results.posAnteriorY = -50;

    results.updateDirVel = objetoTouchMethod.updateDirVel;
    return results;
}

function tocouObj(listaObjs,objetoTouch)//da forma que esta o unico objeto retornado eh o ultimo que for desenhado
{    // isso implica em passar uma listaObjs ordenada por ordem de desenho sendo que o ultimo desenhado eh o ultimo da lista.
    offset=0//serve para prover um gap
    var listaColisoes = [];
    var conf = false;
    var j = objetoTouch;
    //var listaPula = [];
    for (i in listaObjs)
    {


        if (listaObjs[i].x < j.x + j.w &&
        listaObjs[i].x + listaObjs[i].w > j.x &&
        listaObjs[i].y < j.y + j.h &&
        listaObjs[i].h + listaObjs[i].y > j.y)
        {
            listaColisoes = [listaObjs[i],j];
            conf = true;
        }

    }
    return [conf,listaColisoes]
}
