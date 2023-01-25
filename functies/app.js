class App
{
    MARIO()
    {
        console.log("MARIO!!")
    }
   functietest()
   {
      let s = "BWAHAHA!!!"
      return s;
   }
    plussom()
    {
        
        let x = 5;
        
        let y = 2;
        
        let z = x + y;
        return z;
    }
    keersom()
    {
        let x = 5;
        let y = 2;
        let z = x * y;
        return z;
    }
    runApplication()
    {
      console.log(this.MARIO());
      console.log(this.functietest());
      let keer= this.keersom();
      console.log(keer);
      console.log(this.plussom());
    }
}

let app = new App();
app.runApplication();
