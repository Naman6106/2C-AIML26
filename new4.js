class Employee{
    eid;
    Name;
    basicSalary;
    constructor(e,n,B){
        this.eid=e;
        this.Name=n;
        this.basicSalary=B
    }
    calculateSalary(){
        return this.basicSalary;
    }



};
class manager extends Employee{
    incentive;
    constructor(i){
        super(e,n,B);
        this.incentive=i;
    }
    calculateSalary(){
        return this.basicSalary+this.incentive;
    }
};
let e1=new Employee(122,"Naman",100000);
let bs=e1.calculateSalary();
console.log(bs);
let m1= new manager(2000);
let bs2=m1.calculateSalary();
console.log(bs2);