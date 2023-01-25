class App{
    //g.beginPath();
    //g.fillStyle = "saddlebrown";
    //g.moveTo();
    //g.lineTo();
    //g.lineTo();
    //g.lineTo( );
    //g.closePath();
    //g.stroke();
    //g.fill();
    
    snowMan()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        //bottom
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(300,490);
        g.arc(200,490,100,0,Math.PI*2);
        g.stroke();
        g.closePath();

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(300,490);
        g.arc(200,490,99,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        
        //middle
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(280,400);
        g.arc(200,400,80,0,Math.PI*2);
        g.stroke();
        g.closePath();
        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(280,400);
        g.arc(200,400,79,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //head
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(260,290);
        g.arc(200,290,60,0,Math.PI*2);
        g.stroke();
        g.closePath();
        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(260,290);
        g.arc(200,290,59,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //button top
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(200,380);
        g.arc(200,380,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //button middle
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(200,415);
        g.arc(200,415,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //button bottom
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(200,450);
        g.arc(200,450,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //scarf
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(145,325);
        g.lineTo(255,325);
        g.lineTo(275,350);
        g.lineTo(125,350);
        g.lineTo(145,325);
        g.stroke();
        g.fill();
        g.closePath();

        //nose
        g.beginPath();
        g.fillStyle = "orange";
        g.moveTo(200,300)
        g.lineTo(230,310);
        g.lineTo(200,320);
        g.lineTo(200,300);
        g.stroke();
        g.fill();
        g.closePath();

        //eye left
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(180,285);
        g.arc(180,285,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //eye right
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(220,285);
        g.arc(220,285,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //hat
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(150,240);
        g.lineTo(250,240);
        g.lineTo(250,225);
        g.lineTo(235,225);
        g.lineTo(235,180);
        g.lineTo(165,180);
        g.lineTo(165,180);
        g.lineTo(165,225);
        g.lineTo(150,225);
        g.stroke();
        g.fill();
        g.closePath();


        console.log(canvas)
    }

    pad()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(1,300);
        g.lineTo(1000,550)
        g.lineTo(1000,650);
        g.lineTo(1,400);
        g.stroke();
        g.fill();
        g.closePath();


        console.log(canvas)
    }

    ster()
    {

        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        //ster
        g.beginPath();
        g.fillStyle = "gold";
        g.moveTo(820,248);
        g.lineTo(800,270);
        g.lineTo(830,265);
        g.lineTo(845,295);
        g.lineTo(860,265);
        g.lineTo(890,270);
        g.lineTo(870,248);
        g.lineTo(890,222);
        g.lineTo(857,232);
        g.lineTo(845,195);
        g.lineTo(833,232)
        g.lineTo(800,222)
        g.closePath();
        g.stroke();
        g.fill();

        console.log(canvas)
    }

    huis()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);
        let randomGetal = Math.random();
        console.log(randomGetal)
        
        g.beginPath();
        g.fillStyle = "tomato"
        g.moveTo(300,200);
        g.lineTo(700,300);
        g.lineTo(800,100);
        g.lineTo(400,1);
        g.lineTo(300,200);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "lightgrey"
        g.moveTo(700,500);
        g.lineTo(700,300);
        g.lineTo(300,200);
        g.lineTo(300,400);
        g.lineTo(700,500);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "darkgrey";
        g.moveTo(700,500);
        g.lineTo(900,400);
        g.lineTo(900,200);
        g.lineTo(700,300);
        g.lineTo(700,500);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(700,300);
        g.lineTo(800,100);
        g.lineTo(900,200);
        g.lineTo(700,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "saddlebrown"
        g.moveTo(425,432);
        g.lineTo(500,450);
        g.lineTo(500,318);
        g.lineTo(425,300);
        g.lineTo(425,432);
        g.closePath();
        g.stroke();
        g.fill();

        //deurknop
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(490,385);
        g.arc(490,385,5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();


        //raam
        g.beginPath();
        if (randomGetal == 0)
        {
            g.fillStyle = "green"
        }
        else if (randomGetal < 0.1)
        {
            g.fillStyle = "lightgreen"
        }
        else if( randomGetal > 0.2 , randomGetal < 0.6)
        {
            g.fillStyle = "teal"
        }
        else
        {
            g.fillStyle = "Darkolivegreen"
        }
        g.moveTo(598,418);
        g.lineTo(525,400);
        g.lineTo(525,332);
        g.lineTo(600,350);
        g.lineTo(598,418);
        g.closePath();
        g.stroke();
        g.fill();
        
        console.log(canvas)
    }

    kerstboom()
    {
        
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        g.fillStyle = "saddlebrown";
        g.moveTo(820,520);
        g.lineTo(820,420);
        g.lineTo(860,420);
        g.lineTo(860,520);
        g.closePath();
        g.stroke();
        g.fill();
        //kerstboom
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(750,460);
        g.lineTo(750,460);
        g.lineTo(925,460);
        g.lineTo(850,320);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(750,405);
        g.lineTo(800,405);
        g.lineTo(925,405);
        g.lineTo(850,270);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(770,350);
        g.lineTo(770,350);
        g.lineTo(910,350);
        g.lineTo(850,240);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(820,370);
        g.arc(820,370,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(850,330);
        g.arc(850,330,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(870,430);
        g.arc(870,430,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "purple";
        g.moveTo(870,380);
        g.arc(870,380,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

    
        g.beginPath();
        g.fillStyle = "purple";
        g.moveTo(810,420);
        g.arc(810,420,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "purple";
        g.moveTo(830,300);
        g.arc(830,300,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();



        console.log(canvas)
    }

    kerstster()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);
        
        g.fillStyle = "yellow";
        g.beginPath();
        g.moveTo(108, 0.0);
        g.lineTo(141, 70);
        g.lineTo(218, 78.3);
        g.lineTo(162, 131);
        g.lineTo(175, 205);
        g.lineTo(108, 170);
        g.lineTo(41.2, 205);
        g.lineTo(55, 131);
        g.lineTo(1, 78);
        g.lineTo(75, 68);
        g.lineTo(108, 0);
        g.closePath();
        g.stroke();
        g.fill();

        console.log(canvas  )
    }

    runApplication()
    {
        this.kerstster();
        this.pad();
        this.huis();
        this.snowMan();
        this.kerstboom();
        this.ster();
    }
}

let app = new App();
app.runApplication(); 