var imgCarro1 = new Image();
var carro1X = 810; // posicao x do inimigo
var carro1Y = 40; // posicao y do inimigo

var imgCarro2 = new Image();
var carro2X = 810; // posicao x do inimigo
var carro2Y = 90; // posicao y do inimigo

var imgCarro3 = new Image();
var carro3X = 810; // posicao x do inimigo
var carro3Y = 135; // posicao y do inimigo

var imgCarro4 = new Image();
var carro4X = 810; // posicao x do inimigo
var carro4Y = 185; // posicao y do inimigo

var imgCarro5 = new Image();
var carro5X = 810; // posicao x do inimigo
var carro5Y = 230; // posicao y do inimigo

var imgCarro6 = new Image();
var carro6X = 810; // posicao x do inimigo
var carro6Y = 280; // posicao y do inimigo

var pontos = 0; // variável para pontos marcados e pontos perdidos

var audioColidiu = new Audio() // som colisão
audioColidiu.src = "elements/sons/colidiu.mp3"

        function desenharCarro1() {

            imgCarro1.src = "elements/carro-1.png";
            ctx.drawImage(imgCarro1, carro1X, carro1Y, 55, 30);

            carro1X = carro1X - 2.4;

            if (carro1X < - 50) {

                carro1X = 810;
            }
        }

        function check1() {

            // checar colisão
            if (atorY - carro1Y <= 30 &&
                atorY - carro1Y >= - 23 &&
                atorX - carro1X <= 55 &&
                atorX - carro1X >= - 23) {

                    atorY = 322;
                    pontos = pontos - 1;
                    perderPontos();
                    audioColidiu.play();
            }
        }


        function desenharCarro2() {

            imgCarro2.src = "elements/carro-2.png";
            ctx.drawImage(imgCarro2, carro2X, carro2Y, 55, 30);

            carro2X = carro2X - 1.6;

            if (carro2X < - 50) {

                carro2X = 810;
            }
        }

        function check2() {

            // checar colisão
            if (atorY - carro2Y <= 30 &&
                atorY - carro2Y >= - 23 &&
                atorX - carro2X <= 55 &&
                atorX - carro2X >= - 23) {

                    atorY = 322;
                    pontos = pontos - 1;
                    perderPontos();
                    audioColidiu.play();
            }
        }


        function desenharCarro3() {

            imgCarro3.src = "elements/carro-3.png";
            ctx.drawImage(imgCarro3, carro3X, carro3Y, 55, 30);

            carro3X = carro3X - 2.2;

            if (carro3X < - 50) {

                carro3X = 810;
            }
        }

        function check3() {

            // checar colisão
            if (atorY - carro3Y <= 30 &&
                atorY - carro3Y >= - 23 &&
                atorX - carro3X <= 55 &&
                atorX - carro3X >= - 23) {

                    atorY = 322;
                    pontos = pontos - 1;
                    perderPontos();
                    audioColidiu.play();
            }
        }


        function desenharCarro4() {

            imgCarro4.src = "elements/carro-1.png";
            ctx.drawImage(imgCarro4, carro4X, carro4Y, 55, 30);

            carro4X = carro4X - 1.8;

            if (carro4X < - 50) {

                carro4X = 810;
            }
        }

        function check4() {

            // checar colisão
            if (atorY - carro4Y <= 30 &&
                atorY - carro4Y >= - 23 &&
                atorX - carro4X <= 55 &&
                atorX - carro4X >= - 23) {

                    atorY = 322;
                    pontos = pontos - 1;
                    perderPontos();
                    audioColidiu.play();
            }
        }


        function desenharCarro5() {

            imgCarro5.src = "elements/carro-2.png";
            ctx.drawImage(imgCarro5, carro5X, carro5Y, 55, 30);

            carro5X = carro5X - 2;

            if (carro5X < - 50) {

                carro5X = 810;
            }
        }

        function check5() {
    
            // checar colisão
            if (atorY - carro5Y <= 30 && 
                atorY - carro5Y >= - 23 &&
                atorX - carro5X <= 55 &&
                atorX - carro5X >= - 23) {
        
                    atorY = 322;
                    pontos = pontos - 1 ;
                    perderPontos();
                    audioColidiu.play();
            }
        }


        function desenharCarro6() {

            imgCarro6.src = "elements/carro-3.png";
            ctx.drawImage(imgCarro6, carro6X, carro6Y, 55, 30);

            carro6X = carro6X - 2.6;

            if (carro6X < - 50) {

                carro6X = 810;
            }
        }

        function check6() {

            // checar colisão
            if (atorY - carro6Y <= 30 &&
                atorY - carro6Y >= - 23 &&
                atorX - carro6X <= 55 &&
                atorX - carro6X >= - 23) {

                    atorY = 322;
                    pontos = pontos - 1 ;
                    perderPontos();
                    audioColidiu.play();
            }
        }
