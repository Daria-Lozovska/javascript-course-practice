// Напишите ваш код здесь
// Тема дня: Loops & Functions
// _____________________________________

// for (начальное значение, условие, шаг) {
// тело цикла
// }

for (let i = 0; i < 4; i++) {
    console.log(1)
}

// ___________________________________________

// while (условие) {
//     тело
// }

let x = 0;

while (x < 3) {
    console.log(x);
    x++;
}

// ________________________________________________

// практика

// код 1
const arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
} 

// тот же код только в обратном порядке
for (let i = arr.length; i > 0; i--) {
    console.log(arr[i - 1]) // сдвигается по индексу
} 


// код 2

let word = ' '
while (word.length < 5) {
    const value = prompt("Введите букву")
    if (value.length === 0) {
        break;
    }
    word = word + value;
    console.log(word) 
}

// код 3

let y = 0;
do {
    console.log(y)
    y++ 
} while (y < 3)


// код 4
const array = ['a', 'b', 'c'];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// } 

for (let letter of array) {
    console.log("letter: ", letter)
}


// код 5
const user = {
    name: 'John',
    age: 21,
    isMarried: false,
}

for (let key in user) {
    console.log(key, user[key])
}


// _____________________________________

const input = prompt('number pls')
const number = Number(input)

if (!isNaN(number) && number >= 0 && number <= 10) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} * ${i} = ${i*number}`)
}
}

// _____________________________________
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if(i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// _______________________________________
function sumTo(n) {
    const total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

sumTo()

// _________________________________________
function printTable(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`)
    }
}

// _______________________________________
function printEven(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

//____________________________________________
// function sumDigits(num) {
//     for (let i = 0; i <= num; i++) {
//         return num += i;
//     }
// }
//____________________________________________
for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//_____________________________________
function printEvenn(n) {
    for (let i = n; i >= 0; i--) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

//_____________________________________
function wordLength(str) {
    console.log(str.length)
}

//_____________________________________
function startsWith(str, letter) {
    if (str[0] === letter) {
        return true
    } else {
        return false
    }
}

function endWith(str, letter) {
    if (str[0] === letter) {
        return true
    } else {
        return false
    }
}