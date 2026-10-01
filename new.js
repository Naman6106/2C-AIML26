 class Student {
        // constructor() {
        //   console.log("Hello Student");
        // }
        constructor(name) {
          this.name=name;
          console.log(this.name);
        }
        info(){
            console.log("Student information");
            console.log(this.name);
        }
        static name="KAUSHIK";
        static display(){
            console.log(this.name)
        }
      };
    //   let s1 = new Student();
      let s2= new Student("Naman");
    //   s2.info();
    



    

    