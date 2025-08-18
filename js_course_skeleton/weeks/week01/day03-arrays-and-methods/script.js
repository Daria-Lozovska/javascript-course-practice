// Напишите ваш код здесь
// Тема дня: Arrays & Methods

// ____________FOREACH_________________________
const letters = ['A', 'B', 'C', 'D', 'E']

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i])
} // перебор элементов с помощью for

letters.forEach((letter) => {
    console.log(letter)
}) // перебор элементов просто вывод


// _______________INDEXOF____________________________
const prices = [100, 200, 444, 500, 444, 777]

console.log(prices.indexOf(444, 3))
// первым аргументом 
// передается значение которое мы хотим найти 
// вторым аргуметом передаеься индекс после 
// которого мы хотим найти данное значение
// (например как у нас два одинаковых числа 444).

console.log(prices.lastIndexOfindexOf(444, 3))
// все тоже саое только теперь с права на лево


// ________________FINDINDEX__________________________
const users = [
    {
        name: 'Alexander',
        age: 28,
    },
    {
        name: 'Michail',
        age: 30,
    },
    {
        name: 'Vasiliy',
        age: 40,
    },
]

console.log(users.findIndex((user) => {
    if (user.name == 'Vasiliy') {
        return true
    }
})) // получим индекс элемента из масива 
// если значение переданое в if будет true

console.log(users.findLastIndex((user) => {
    if (user.name == 'Vasiliy') {
        return true
    }
})) // все тоже самое только с конца

//_______________INCLUDES________________________
const pricess = [100, 200, 444, 500, 444, 777]

console.log(pricess.includes(500, 4))
// если такое значение есть вернет true. 
// работает с булевыми значениями
// первым элементом передается значение которое нужно найти
// т=вторым элементом передается индекс с которого нужно искать

// ______________SOME__________________________

const userss = [
    {
        name: 'Alexander',
        age: 28,
    },
    {
        name: 'Michail',
        age: 30,
    },
    {
        name: 'Vasiliy',
        age: 40,
    },
]

console.log(userss.some((user => user.name === 'Vasiliy')))
// ищет такой элемент в масиве 
// если такой элемент найден вернет true
// работает с булевыми значениями


// ___________________EVERY____________________________
const usersss = [
    {
        name: 'Alexander',
        age: 28,
    },
    {
        name: 'Michail',
        age: 30,
    },
    {
        name: 'Vasiliy',
        age: 40,
    },
]

console.log(usersss.every((user) => user.age >= 18))
// в даном случае проверит есть ли каждому юсеру 18 лет
// если да вернет true
// если хоть односу юсеру нет 18 
// вернет false

// _________________FIND________________________________
const userssss = [
    {
        name: 'Alexander',
        age: 28,
    },
    {
        name: 'Michail',
        age: 30,
    },
    {
        name: 'Vasiliy',
        age: 40,
    },
]

console.log(userssss.find((user) => user.name === 'Vasiliy'))
// найдет конкретный элемент в масиве по условиям 

// если у нас в масиве два одинаковых (в нашем случае) юсера 
// то можно возпользоваться методом filter 

// ____________FILTER________________________________
console.log(userssss.filter((user) => user.name === 'Vasiliy'))

// ____________________________________________________
const usersssss = [
    {
        name: 'Alexander',
        age: 28,
        city: 'Kyiv',
    },
    {
        name: 'Michail',
        age: 30,
        city: 'Charkow',
    },
    {
        name: 'Vasiliy',
        age: 40,
        city: 'Odesa',
    },
    {
        name: 'Vasiliy',
        age: 50,
        city: 'Odesa',
    },
]

const filteredUsers = usersssss.filter(({ city, age}) => {
    return city === 'Odesa' || age < 45
})
// в жтом случае мы хотим отфильровать юсеров по их месту жительсва 'Odesa'
// или ( || ) по их возрасту то есть меньше 45 лет
// если бы метод filter не нашел результата удовлетворящий условию он 
// бы вернул пустой масив


//_________________MAP__________________________________
const userssssss = [
    {
        name: 'Alexander',
        age: 28,
        city: 'Kyiv',
    },
    {
        name: 'Michail',
        age: 30,
        city: 'Charkow',
    },
    {
        name: 'Vasiliy',
        age: 40,
        city: 'Odesa',
    },
    {
        name: 'Vasiliy',
        age: 50,
        city: 'Odesa',
    },
]

const userFormated = users.map((user) => {
    return `${user.name}, ${user.age} age, living in the city ${user.city}`
}) 
// создает новый масив НО не изменяет его!!!!

// ________________REDUCE_______________________________
const usersssssss = [
    {
        name: 'Alexander',
        age: 28,
        city: 'Kyiv',
    },
    {
        name: 'Michail',
        age: 30,
        city: 'Charkow',
    },
    {
        name: 'Vasiliy',
        age: 40,
        city: 'Odesa',
    },
    {
        name: 'Vasiliy',
        age: 50,
        city: 'Odesa',
    },
]


// первый варинат 
let ageSum = 0

for (let i = 0; i < usersssssss.length; i++) {
    ageSum += users[i].age
}

console.log('Midle age users: ', ageSum / users.length)

// второй вариант
const ageSumm = usersssssss.reduce((sum, user, index, array) => {
    return sum + user.age
}, 0)
console.log('Midle age users: ', ageSumm / users.length)

// чтобы перебрать элементы в обратном порядке используется
// метод reduceRight

// ________REVERSE_______________________
// просто переворачиает масив то есть в обратном порядке.
// МЕНЯЕТ ИСХОДНЫЙ МАСИВ!!!! 
// чтобы такого не было можно сделать так

const reverseUsers = [...users].reverse()
console.log('reverseUsers: ', reverseUsers)

// ________________SORT____________________________
// просто сортирует масив по возрастанию (в алфавитном порядке)
// МЕНЯЕТ ИСХОДНЫЙ МАСИВ!!!!
// чтобы такого не было можно сделать также как с методом reverse

const names = ['Vasiliy', 'Alexander', 'Maksim', 'Andrey']

const sortedNames = names.sort()

console.log('Sorted names: ', sortedNames)

// работа с числами
const numbers = [8, 4, 500]

const sortedNumbers = [...numbers].sort((a, b) => { a - b })

console.log('Sorted numbers: ', sortedNumbers)

// в зависимости от того что находится в теле стрелочной функции
// будет сортироваться масив с числами. если число наши аргументы при отнимании
// дают отрицательный результат то первым будет число а. если положительный 
// первым будет число b. если значения одинаковые то просто они будут рядом
// a - b  по возрастанию        b - a по убыванию 


