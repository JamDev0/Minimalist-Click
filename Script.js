//Pegando os elementos do Teste que vão ser utilizados

let ClickBox = document.getElementById('ClickBox');

let Indicador = document.getElementById('Indicador');

let ValorS = document.getElementById('ValorS');

let Tempo = document.getElementById('Tempo');


//Pegando os elementos do Teste ContainerOp vão ser utilizados

let ContainerOp = document.getElementById('ContainerOp');

let Opções = document.getElementsByClassName('Opções');


//Pegando o elemento Retry

let Retry = document.getElementById('Retry');


//Pegando os elementos do Resultados que vão ser utilizados

let IdResultados = document.getElementById('Resultados');

let OpFiltros = document.getElementById('OpFiltros');


//Pegando o elemento Resul

let Resul = document.getElementById('Resul');


//Decalrando variavel responsavel por definir de quantos segundos é o teste que o usuário esta fazendo

let MetricaPCPS;


//Decalrando variavel responsavel por dizer se o teste começou ou não

let VerificarTeste;


//Declarando variavel responsavel por contar os clicks do usuário

let ContarCli = 0;


//Declarando array onde os resultados vão ser colocados

let Resultados = [];


OpFiltros.addEventListener('change', Filtrar);

function Filtrar(event)
{
    let Compa;
    if(event != undefined)
    {
        Compa = event.target.value;
    }
    else
    {
        Compa = 'Só' + MetricaPCPS;
        OpFiltros.value = Compa;
    }

    switch(Compa)
    {
        case 'Todos':
            while (Resul.firstChild) {
            Resul.removeChild(Resul.firstChild);
            }
            for(let c = 0; c < Resultados.length; c++)
            {
                Resul.appendChild(document.createTextNode(Resultados[c].NumDeClicks + ' clicks em ' + Resultados[c].Metrica + 's'));
                Resul.appendChild(document.createElement('br'));
            }
            break;
            
        case 'Só3':
            let ResultadosF3 = Resultados.filter((Res)=>{return Res.Metrica == '3'});
            while (Resul.firstChild) {
                Resul.removeChild(Resul.firstChild);
                }
            for(let c = 0; c < ResultadosF3.length; c++)
            {
                Resul.appendChild(document.createElement('p').appendChild(document.createTextNode(ResultadosF3[c].NumDeClicks + ' clicks em ' + ResultadosF3[c].Metrica + 's')));
                Resul.appendChild(document.createElement('br'));
            }
            break;

        case 'Só5':
            let ResultadosF5 = Resultados.filter((Res)=>{return Res.Metrica == '5'});
            while (Resul.firstChild) {
            Resul.removeChild(Resul.firstChild);
            }
            for(let c = 0; c < ResultadosF5.length; c++)
            {
                Resul.appendChild(document.createElement('p').appendChild(document.createTextNode(ResultadosF5[c].NumDeClicks + ' clicks em ' + ResultadosF5[c].Metrica + 's')));
                Resul.appendChild(document.createElement('br'));
            }
            break;

        case 'Só10':
            let ResultadosF10 = Resultados.filter((Res)=>{return Res.Metrica == '10'});
            while (Resul.firstChild) {
            Resul.removeChild(Resul.firstChild);
            }
            for(let c = 0; c < ResultadosF10.length; c++)
            {
                Resul.appendChild(document.createElement('p').appendChild(document.createTextNode(ResultadosF10[c].NumDeClicks + ' clicks em ' + ResultadosF10[c].Metrica + 's')));
                Resul.appendChild(document.createElement('br'));
            }
            break;

        case 'Só30':
            let ResultadosF30 = Resultados.filter((Res)=>{return Res.Metrica == '30'});
            while (Resul.firstChild) {
            Resul.removeChild(Resul.firstChild);
            }
            for(let c = 0; c < ResultadosF30.length; c++)
            {
                Resul.appendChild(document.createElement('p').appendChild(document.createTextNode(ResultadosF30[c].NumDeClicks + ' clicks em ' + ResultadosF30[c].Metrica + 's')));
                Resul.appendChild(document.createElement('br'));
            }
            break;

        case 'Só60':
            let ResultadosF60 = Resultados.filter((Res)=>{return Res.Metrica == '60'});
            while (Resul.firstChild) {
            Resul.removeChild(Resul.firstChild);
            }
            for(let c = 0; c < ResultadosF60.length; c++)
            {
                Resul.appendChild(document.createElement('p').appendChild(document.createTextNode(ResultadosF60[c].NumDeClicks + ' clicks em ' + ResultadosF60[c].Metrica + 's')));
                Resul.appendChild(document.createElement('br'));
            }
            break;
    }
}

if(localStorage.getItem('Segundos') != null)
{
    MetricaPCPS = localStorage.getItem('Segundos');
}
else
{
    MetricaPCPS = 3;
}


ContainerOp.style.width = ClickBox.clientWidth + 'px';

window.addEventListener('resize', () => {ContainerOp.style.width = ClickBox.clientWidth + 'px';});


ClickBox.addEventListener('click', ComeçarTeste);


for(let c = 0; c < Opções.length; c++)
{
    Opções[c].addEventListener('mouseover', OpHover);
    Opções[c].addEventListener('mouseout', OpHoverOut);
    Opções[c].addEventListener('focusin', OpFocus);
    Opções[c].addEventListener('focusout', OpFocusOut);
    Opções[c].addEventListener('click', OpClick);
    Opções[c].focus();
}

function OpHover(event)
{
        event.target.style.boxShadow = '0px 0px 6px 1px black';
        Ver = 1;
}

function OpHoverOut(event)
{
    event.target.style.boxShadow = '0px 0px 7px 1.5px transparent';
    Ver = 0;
}

function OpFocus(event)
{
    event.target.style.outline = '5px solid orange';
    event.target.style.outlineOffset = '4px';
}

function OpFocusOut(event)
{
    event.target.style.outline = 'none';
}

function OpClick(event)
{
    MetricaPCPS = event.target.value;

    ValorS.innerText = MetricaPCPS;

    localStorage.setItem('Segundos', MetricaPCPS);
}

ValorS.innerText = MetricaPCPS;


function ComeçarTeste()
{
    if(VerificarTeste == null)
    {
        Indicador.innerText = 1;
        Indicador.style.fontSize = '200px';
        let c = 1;
        var Contagem = setInterval(()=>{
            c = c + 1;
            Indicador.innerText = c;
            if(c == 4)
            {
                clearInterval(Contagem);
                Indicador.innerText = 'Click!';
                ContarClicks();
            }
        }, c*1000);

        VerificarTeste = 1;
    }
}

function ContarClicks()
{
        let TempoAt = 0;
        let IntervaloCont = setInterval(()=>{
            TempoAt = TempoAt + 0.1;
            Tempo.innerText = TempoAt.toFixed(1) + 's';
            if(Math.floor(TempoAt) == MetricaPCPS)
            {
                clearInterval(IntervaloCont);
                Indicador.style.fontSize = '100px';
                Indicador.innerText = 'Resultados abaixo';
                IdResultados.style.display = 'flex';
                Resultados.push({Metrica: MetricaPCPS, NumDeClicks: ContarCli, Cps: ()=>{ContarCli/MetricaPCPS}});
                Filtrar();
            }
        }, 100);
        ContarCli = 0;
        ClickBox.addEventListener('touchstart', EventClickClickBox)
        ClickBox.addEventListener('click', EventClickClickBox);
}


function EventClickClickBox(event)
{
    ContarCli = ContarCli + 1;
    setTimeout(()=>{ClickBox.removeEventListener('click', EventClickClickBox); ClickBox.removeEventListener('touchstart', EventClickClickBox); Retry.style.display = 'initial'; Retry.style.left = (window.innerWidth/2 - Retry.clientWidth/2) + 'px';}, MetricaPCPS*1000);
}

Retry.addEventListener('click', Recomeçar);

function Recomeçar()
{
    Retry.style.display = 'none';

    Tempo.innerText = '';

    ValorS = document.getElementById('ValorS');
    
    Indicador.style.fontSize = '40px';
    Indicador.innerHTML = '<p id="Indicador">Click para começar o teste de <span id="ValorS">x</span> segundos</p>';

    VerificarTeste = null;
}

window.addEventListener('resize', ()=>{Retry.style.left = (window.innerWidth/2 - Retry.clientWidth/2) + 'px';});