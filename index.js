// Your code here

class Dog{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        return `${this.name} says woof!`
    }}

class Cat{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Bird{
    constructor(name, sex){
        this.name = name
        this.sex = sex
    }
    speak(){
        let message
        this.sex === `male` ? message = `It's me! ${this.name}, the parrot!` : message = `${this.name} says squawk!`
        return message
    }
}
