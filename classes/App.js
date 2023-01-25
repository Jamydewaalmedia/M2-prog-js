class Dino
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
    }
}



class App
{
    runApplication()
    {
        let trex = new Dino("Trex",true,10);
        let vex = new Dino("vex",false,8)
        let dog = new Dino("dog",false,12)
        console.log(dog);
        console.log(vex);
        console.log(trex);
       
        //code hier
        
       
    }
}

let app = new App();
app.runApplication(); 