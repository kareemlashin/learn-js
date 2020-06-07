class person{
     name;
     age;
     constructor(name,age)
     {
          this.age=age;
          this.name=name;
     }
     get(){
          console.log(`age${this.age} name  ${this.name}`)
     }
}
let x =new person('kareem',10);
x.get();
class all extends person{
     address;
     constructor(name,age,address)
     {
          super(name,age);
          this.address=address;
     }
     get(){
          console.log(`age${this.age} name  ${this.name} address  ${this.address}`)
     }
}
let y =new all('kareem',10,'banha');
y.get();