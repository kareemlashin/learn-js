import { IPerson } from './interface';
import {Animal} from './class';
import {Circle} from './class';
import {Dog} from './class';
import {Shape} from './class';
class Cat extends Animal
{
  
    constructor(age: number, breed: string)
    {
        super(age, breed)
    }
    makeSound(): void
    {
        super.makeSound_('meow meow')
    }
}
let cat1 = new Cat(11, "dddd");
cat1.makeSound();