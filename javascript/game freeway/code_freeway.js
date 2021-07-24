var canvas; //o elemento canvas sobre o qual desenharemos
var ctx; //o "contexto" da canvas que será utilizado (2D ou 3D)

var WIDTH = 800; //largura da área retangular
var HEIGHT = 349; //altura da área retangular
var imgEstrada = new Image();
var estradaX = 0; //posição horizontal do objeto (com valor inicial)
var estradaY = 0; //posição vertical do objeto (com valor inicial)

var imgAtor = new Image();
var dx = 3; //a tava de variação (velocidade) horizontal do objeto
var dy = 3; //a tava de variação (velocidade) vertical do objeto
var atorX = 100; //posição horizontal do objeto (com valor inicial)
var atorY = 322; //posição vertical do objeto (com valor inicial)

var pontos = 0; // variável para pontos marcados e pontos perdidos

var audioTrilha = new Audio(); // trilha sonora
audioTrilha.src = "elements/sons/trilha.mp3";

var audioPontos = new Audio(); // som dos pontos
audioPontos.src = "elements/sons/pontos.mp3"


    function desenharEstrada() {

        imgEstrada.src = "elements/estrada-3.png";
        ctx.drawImage(imgEstrada, estradaX, estradaY, 800, 349);
    }

        function desenharAtor() {

            imgAtor.src = "elements/ator-1.png";
            ctx.drawImage(imgAtor, atorX, atorY, 26, 23);

            check1();
            check2();
            check3();
            check4();
            check5();
            check6();
        }

        function placarTexto(placarTextoX, placarTextoY) {

            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");

            ctx.fillStyle = "gold";
            ctx.font = "24px Georgia";
            ctx.fillText(pontos, placarTextoX, placarTextoY);
            ctx.strokeStyle = "red";
            ctx.strokeText(pontos, placarTextoX, placarTextoY);
        }

        function marcarPontos() {
                    
                    // 17
            if (atorY < 5) {

                ++pontos;// pontos = pontos + 1;
                atorY = 322;
                audioPontos.play();
            }
        }

        function perderPontos() {

            if (pontos < 0) {

                pontos = pontos + 1;
            }
        }


    function LimparTela() {

        ctx.fillStyle = "white";
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.rect(0, 0, WIDTH, HEIGHT);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    function Iniciar() {

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        return setInterval(Atualizar, 6);
    }

        function KeyDown(evt) {

            switch (evt.keyCode) {

                case 38 /*seta para cima */:

                if (atorY - dy > 1) {

                    atorY -= dy;
                }
                break;

                case 40 /*set para baixo*/:

                if (atorY + dy < 325) {

                    atorY += dy;
                }
                break;
                /*
                case 37 //set para esquerda:

                if (atorX - dx > 0) {

                    atorX -= dx;
                }
                break;

                case 39 //seta para direita:

                if (atorX + dx < 475) {

                    atorX += dx;
                }
                break;
                */
            }
        }

    function Atualizar() {

        LimparTela();
        audioTrilha.play();
        desenharEstrada();
        desenharAtor();
        desenharCarro1();
        desenharCarro2();
        desenharCarro3();
        desenharCarro4();
        desenharCarro5();
        desenharCarro6();
        placarTexto(100, 22, pontos);
        marcarPontos();
        perderPontos();
    }
    alert("Use as teclas PgUp e PgDn");

    window.addEventListener("keydown", KeyDown, true);
    Iniciar();
