// Напишите ваш код здесь
// Тема дня: Objects & Iteration


const user = {
    login: 'iamsuperhero',
    password: 'qwerty',
    'registration date': '01.01.2024',
    'last-auth': '05.04.2024',

    age: 33,
    isAdult: true,
    job: null,
    kids: undefined,
    address: {
        city: 'Kyiv',
        zipCode: 555444,
    },
    sayHi: () => console.log('Hi'),
}

// вот как можно получить какоу то свойство в обекте:

console.log(user.login) 
console.log(user['registration date']) 

//чтобы вызвать метод обьекта нужно: 
user.sayHi() 


// чтобы добавить в обьект свойство:
const userr = {}

userr.name = 'Alexander';

// чтобы удалить свойство

delete userr.name 

// _________________________________
const name = 'alexander'
const age = 28

const userrr = {
    name,
    age,
}

// чтобы проверить наличие свойства 
const userrrr = {
    name: 'alexander',
    age: 28,
}

console.log('isDeveloper' in userrrr)

// перебор обькета

for (const key in userrrr) {
    console.log(key)
} // перебор ключей обьекта

for (const propName in userrrr) {
    console.log([propName])
} // перебор значения ключей 

// _________________________________________
let userrrrr = {
    name: 'Daria',
    age: 20,
    city: 'Kyiv',
}

function countProperties(obj) {
    return Object.keys(obj).length
}

// _______________________________________
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
} 

function printValues(obj) {
    for (const propName in obj) {
        console.log(obj[propName]) 
    }
}

// ________________________________________
let salaries = {
  Anna: 500,
  Daria: 1200,
  Ivan: 900
}

function maxSalary(obj) {
    let maxName = null;
    let max = 0
    for (const person in obj) {
        if (obj[person] > max) {
            max = obj[person]
            maxName = person
        }
    }
    return maxName
} 

// ______________________________________________

function sumAll(obj) {
    let count = 0
    for (const person in obj) {
        if (obj[person] > 800) {
            count ++
        }
    }
    return count
}

// _______________________________________________

function nameSalary(obj) {
    let names = []
    for (let person in obj) {
        if (obj[person] > 800) {
            names.push(person + ':' + obj[person])
        }
    }
    return names 
}

// _______________________________________________
function midSalary(obj) {
    let sum = 0
    let count = 0
    
    for (const person in obj) {
        sum += obj[person]
        count ++
    }
    return sum / count
}