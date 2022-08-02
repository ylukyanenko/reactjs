
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Array.forEach
Array.prototype.customForEach = () => { }

const namber = [1, 2, 3, 4, 5];
console.log(Object.prototype);

// namber.forEach((value, id, arr) => console.log(value, id, arr));

/*// First
interface User { 

}

const users = [
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg",
    "age": 23
  },
  {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg",
    "age": 20
  }
];

// Second
interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  ingredients: string[];
  type: string;
  available: boolean;

}
const products: Product[] = [
  {
    id: 1,
    name: "Burger Premium",
    price: 6,
    currency: "euro",
    ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
    type: "burger",
    available: true
  },
  {
    id: 2,
    name: "Burger Lite",
    price: 2.3,
    currency: "euro",
    ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
    type: "burger",
    available: true
  },
];

// Third
const getProduct = (id:number, products:Product[]) => products.find((products) => products.id === id);




const successResponse = {
    status: 'success',
    data: {}
}

const failedResponse = {
    status: 'failed',
    reason: 'Description of error'
}

const inProgress = {
    status: 'pending'
}

interface Responses1{
  status: 'success',
  data: {}
}

interface Responses2{
  status: 'failed',
  reason: string
}

interface Responses3{
  status: 'pending'
}

type Responses = Responses1 | Responses2 | Responses3
*/



// Array.map
const callback = (el, index, arr) => { }

Array.prototype.customMap = (callbackFunc) => {
  const newArr = []

  for (let i = 0; i < this.length; i++) {
    // const element = this[i];
    // const index = i
    // const array = this

    // const newElement = callbackFunc(element, index, array)

    const newElement = callbackFunc(this[i], i, this)

    newArr.push(newElement)
  }

  return newArr
}

const arr = [1, 2, 3]
arr.customMap()

// Array.forEach
Array.prototype.customForEach = (callback) => {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

// Array.filter
Array.prototype.customFilter = (callback) => {
  const newArr = []

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i])
    }
  }

  return newArr
}


// Array.reduce
const callback = (acc, el, index, arr) => { }

Array.prototype.customReduce = (callback, initialValue) => {
  let acc, startIndex
  if (initialValue === undefined) {
    acc = this[0]
    startIndex = 1
  } else {
    acc = initialValue
    startIndex = 0
  }

  for (let index = startIndex; index < this.length; index++) {
    acc = callback(acc, this[i], i, this)
  }

  return acc
}

let a = undefined
[1, 2, 3].customReduce(() => { })

[1, 2, 3] => { 1: 1, 2: 2, 3: 3 }
[1, 2, 3].reduce((acc, el) => {
  return ({
    ...acc,
    [el]: el
  })
}, {})


// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему


const subjects = {
  mathematics: {
    students: 200,
    teachers: 6
  },
  biology: {
    students: 120,
    teachers: 6
  },
  geography: {
    students: 60,
    teachers: 2
  },
  chemistry: {
    students: 100,
    teachers: 3
  }
}

//1
const str = Object.keys(subjects).join(', ')

//2

// function count(obj) {
//   let totalNumber = 0

//   // Object.values(obj).forEach(({ students, teachers }) => {
//   //   totalNumber += students + teachers
//   // })
//   Object.values(obj).forEach((value) => {
//     const { students, teachers } = value
//     totalNumber += students + teachers

//     // totalNumber += value.students + value.teachers
//   })

//   return totalNumber
// }

const total = Object.values(subjects).reduce((total, { teachers, students }) => {
  return total + students + teachers
}, 0)

const average = Object.values(subjects).reduce((total, { students }) => total + students,0) / Object.keys(subjects).length

const subjectsArr = Object.values(subjects)


const sortedTeachers = Object.entries(subjects).sort((a,b) => {
  const numberTeachersA = a[1].teachers
  const numberTeachersB = b[1].teachers

  return numberTeachersB - numberTeachersA
}).map((subjectData) => subjectData[0])

['mathematics', {
  students: 200,
  teachers: 6
}]
