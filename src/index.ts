//string, boolean, number...
let x: number = 10;
x = 12;
console.log(x);

//inferencia x annotation
let y = 12
// erro: y = "teste"
//inferencia não precisa colocar o tipo, de acordo com o primeiro tipo definido ele vai se comportar desta forma, ja annotation é o primeiro exemplo

//tipos básicos
let nome: string = "Juliana"
let idade: number = 21
const isAdmin: boolean = true

// String != string
console.log(typeof nome)
nome = "Ju"
console.log(nome)

//object
//array numericos
const meusNumeros: number[] = [1, 2, 3];
console.log(meusNumeros);
console.log(meusNumeros.length);

meusNumeros.push(5)

//tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b"]]

//objects literals -> {prop:value}
const user: { name: string, age: number } = {
    name: "Pedro",
    age: 18,
}
console.log(user)

//any (aceita qualquer tipo de dado)
let a: any = 0
a = "teste"

//union type
let id: string | number = "10"
id = 200

//type alias
type tiposQueQueroUsar = number | string
const userId: tiposQueQueroUsar = 10
const product: tiposQueQueroUsar = "car"

// enum
//tamanhos de roupas (size: Médio, size: Pequeno)
enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}
const camisa = {
    name: "Camisa gola V",
    size: size.G
}

//literal types
let teste: "algumvalor" | null
teste = "algumvalor"
teste = null

//funcoes
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name: string): string {
    return `Hello ${name}`
}
console.log(sayHelloTo("Matheus"));

//void é um tipo de função que não retorna nada
function logger(msg: string): void {
    console.log(msg)
}
logger("Teste!")

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`)
        return
    }
    console.log(`Olá ${name}`)
}
greeting("José")
greeting("Pedro", "Senhor")

//interfaces
interface MathFunctionsParams {
    n1: number;
    n2: number;
}
function sumNumber(nums: MathFunctionsParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumber({ n1: 1, n2: 2 }))
function multiplyNumbers(nums: MathFunctionsParams) {
    return nums.n1 * nums.n2
}
const someNumbers: MathFunctionsParams = {
    n1: 5,
    n2: 10
}
console.log(multiplyNumbers(someNumbers))

//narrowing
//checagem tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}
doSomething(5)
doSomething(true)

//generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM ${item}`)
    })
}
const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]
showArraysItems(a1)
showArraysItems(a2)

//classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca)
zeca.showUserName()

//interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}
class Car implements IVehicle {
    brand
    wheels
    constructor(brand: string, wheels: Number) {
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }

}
const fusca = new Car("VW", 4)
fusca.showBrand()

//herança
class SuperCar extends Car {
    engine
    constructor(brand:string, wheels:number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}
const a4 = new SuperCar("Audi", 4, 2.0)
console.log(a4)
a4.showBrand()

//constructor decorator
function BaseParameters(){
    return function<T extends{new(...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createAt = new Date();
        }
    }
}
@BaseParameters()
class Person {
    name
    constructor(name:string){
        this.name = name
    }
}
const sam = new Person("Sam")
console.log(sam)