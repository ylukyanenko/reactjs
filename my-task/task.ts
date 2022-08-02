/ С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алвавитном порядке.
//     5. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

interface Country{
    country: string;
    abbreviation: string;
    city: string;
    currency_name: string;
    population: number;
}

const countries: Country[] = [
  {
    country: "United Arab Emirates",
    abbreviation: "AE",
    city: "Abu Dhabi",
    currency_name: "Arab Emirates Dirham",
    population: 9630959

  },
  {
    country: "Poland",
    abbreviation: "PL",
    city: "Warszawa",
    currency_name: "Polish Zloty",
    population: 37974750
  },
  {
    country: "Russian Federation",
    abbreviation: "RU",
    city: "Moscow",
    currency_name: "Russian Ruble",
    population: 144478050
  }
]

//     1. Создать строку из названий стран через запятую

function func(countries: Country[]): string {
    return countries.map((countryItem) => countryItem.country).join(', ')
}

console.log(func(countries))

//     2. Посчитать общее количнство людей в данном массиве стран.

function getCountryPopulation(countries: Country[]): number{
    return countries.reduce((acc,item) => {
        return acc +=item.population
    },0)
}

console.log(getCountryPopulation(countries))

//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.

function getCountrySort(countries:Country[]): string[]{
  return countries.sort((a,b) => b.country < a.country ? 1 : -1).map(({ country }) => country);
}

const sort = getCountrySort(countries).map((countryData) => countryData);
console.log(sort)






home work 3


/*С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

    1. Создать строку из имен пользователей через запятую
    2. Посчитать общее количнство машин у пользователей
    3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
    5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую*/

    interface User{
      name: string;
      phone: string;
      email: string;
      animals ?: string[];
      cars ?: string[];
      hasChildren: boolean;
      hasEducation: boolean;
  }    
  
      const users: User[] = [
          {
              name: "Harry Felton",
              phone: "(09) 897 33 33",
              email: "felton@gmail.com",
              animals: ["cat"],
              cars: ["bmw"],
              hasChildren: false,
              hasEducation: true
              
          },
          {
              name: "May Sender",
              phone: "(09) 117 33 33",
              email: "sender22@gmail.com",
              hasChildren: true,
              hasEducation: true
          },
          {
              name: "Henry Ford",
              phone: "(09) 999 93 23",
              email: "ford0@gmail.com",
              cars: ["bmw", "audi"],
              hasChildren: true,
              hasEducation: false
          }
      ]
  
  
      // 1.  Создать строку из имен пользователей через запятую
  
      const userName = (users: User[]): string =>{
          return  users.map((user) => user.name).join(', ');
      }
      console.log(userName(users))
  
      //2. Посчитать общее количнство машин у пользователей
  
      const carsUsers =  (users: User[]): number =>{
          return  users.map((user) => user.cars).length;
      }
  
      console.log(carsUsers(users))
  
      // 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
  
      function getEducation(users: User[]): string{
         return 
  }
    
  