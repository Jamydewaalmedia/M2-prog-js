class App
{
    huis()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        g.beginPath()
        g.fillStyle = "red"
        let x =200;
        let y =200;
        g.moveTo(x,y);
        g.lineTo(x+250,y-120);
        g.lineTo(x+500,y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "orange"
        g.fillRect(x,y,500,200);
        g.fillStyle = "black"
        g.fillRect(250,250,100,60);

        g.fillRect(480,280,100,120);
        


        g.beginPath();
        g.fillStyle = "orange";
        g.moveTo(700,200)
        g.lineTo(700,400)
        g.lineTo(800,400)
        g.lineTo(800,150)
        g.lineTo(700,200)
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(700,200);
        g.lineTo(800,150);
        g.lineTo(450,80);
        g.lineTo(700,200)
        g.stroke();
        g.fill();
        g.closePath();

        
        console.log(canvas)
    }

    lantaarn()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);
        
        g.fillStyle = "gray"
        g.fillRect(120,230,20,200);
        g.fillStyle = "gold"
        g.fillRect(160,250,20,20);
        g.fillRect(80,250,20,20);
        g.fillStyle = "gray"
        g.fillRect(120,230,60,20);
        g.fillRect(80,230,60,20);
        //second lantarn
        g.fillStyle = "gray"
        g.fillRect(1120,230,20,200);
        g.fillStyle = "gold"
        g.fillRect(1160,240,20,20);
        g.fillRect(1080,240,20,20);
        g.fillStyle = "gray"
        g.fillRect(1120,220,60,20);
        g.fillRect(1080,220,60,20);
        console.log(canvas)
    }
    road()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);
        
        g.fillStyle = "black"
        g.fillRect(0,450,1500,200)
        g.fillStyle = "white"
        g.fillRect(140,545,100,20)
        g.fillRect(340,545,100,20)
        g.fillRect(540,545,100,20)
        g.fillRect(740,545,100,20)
        g.fillRect(940,545,100,20)
        g.fillRect(1140,545,100,20)
        g.fillRect(1340,545,100,20)


        console.log(canvas)
    }
    huis2()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        g.fillStyle = "green"
        g.fillRect(835,30,380,380)
        g.fillStyle = "pink"
        g.fillRect(1210,1,20,410)
        g.fillStyle = "aqua"
        g.fillRect(835,1,375,30)
       
        

        //leftside
        g.fillStyle = "darkgray"
        g.fillRect(850,40,100,60);
        g.fillRect(850,120,100,60);
        g.fillRect(850,200,100,60);
        g.fillRect(850,280,100,60);
        //midde side
        g.fillRect(975,40,100,60);
        g.fillRect(975,120,100,60);
        g.fillRect(975,200,100,60);
        //door
        g.fillStyle = "black"
        g.fillRect(975,280,100,130);
        //right side
        g.fillStyle = "darkgray"
        g.fillRect(1100,40,100,60);
        g.fillRect(1100,120,100,60);
        g.fillRect(1100,200,100,60);
        g.fillRect(1100,280,100,60);

        console.log(canvas)
    }

    

    snowman()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        g.beginPath();
        g.fillStyle = "white";
        /*(x,y) maak x groter om naar rechts te doen, kleiner naar links. maak y groter om omlaag te doen en kleiner om onhoog te doen*/
        g.moveTo(880,390);
        g.arc(800,390,80,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
        
        //middle

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(860,300);
        g.arc(800,300,60,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //head

        g.beginPath();
        g.fillStyle = "white";
        g.moveTo(840,220);
        g.arc(800,220,40,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "orange";
        g.moveTo(800,220)
        g.lineTo(840,230)
        g.lineTo(800,240)
        g.stroke();
        g.fill();
        g.closePath();

         //eye left
         g.beginPath();
         g.fillStyle = "black";
         g.moveTo(790,210);
         g.arc(790,210,5,0,Math.PI*2);
         g.stroke();
         g.fill();
         g.closePath();
 
         //eye right
         g.beginPath();
         g.fillStyle = "black";
         g.moveTo(820,210);
         g.arc(820,210,5,0,Math.PI*2);
         g.stroke();
         g.fill();
         g.closePath();

        console.log(canvas)
    }

    runApplication()
    {
        this.road();
        this.huis();
        this.huis2();
        this.lantaarn();
        this.snowman();
        

    }
}

let app = new App();
app.runApplication();