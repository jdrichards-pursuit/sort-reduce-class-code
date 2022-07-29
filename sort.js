const letters = ["r", "b", "o", "a", "q"];

//.sort()
//take a look at basic sort with string
const sortedLetters = letters.sort();
// console.log(sortedLetters);

//sort works by converting teh value to a string and checking the unicode number of the character

//lets try it with numbers
const sortedNums1 = [2, 100, 7, 4];
const sortedNumbers1 = sortedNums1.sort();
// console.log(sortedNumbers1);
// this doesn't work because the computer is looking at the first character in the string
// and compares it to the first character in each item

// check the unicode number for each character **** lexicographical comparison
// sortedNums1.forEach((num) =>
//   console.log(`${num}: ${String(num).charCodeAt(0)}`)
// );

//sort comes with a comparator function that allows us to return a number
// its a callback function and in the function we compare two unicodes to see which one is greater

// sort comparator function looks for 3 values. A negative number, a positive number, or 0
const sortedNums2 = [2, 100, 7, 4];
const sortedCompareNumbers = sortedNums2.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

//

// console.log(sortedCompareNumbers);

//let's break it down

// 2 < 100 [ 2, 100, 7, 4]
// 100 > 7 [2, 7, 100, 4]
// 100 > 4 [2, 7, 4, 100]
// 2 < 7 [2, 7, 4, 100]
// 7 < 4 [2, 4, 7, 100]

// this still looks for a negative, a positive or 0
const shortSort = sortedNums2.sort((a, b) => a - b);

const cars = [
  { make: "mercedes", price: 82000 },
  { make: "jeep", price: 27000 },
  { make: "cadillac", price: 80000 },
  { make: "toyota", price: 35000 },
];

// let's see how it works with numbers in an object
// we have to remember to key into the value inside the object
const sortByPrice = cars.sort((a, b) => a.price - b.price);
// console.log(sortByPrice);

// does not work
// const badSortByMake = cars.sort((a, b) => a.make - b.make);
const badSort2 = cars.sort((a, b) => console.log(a.make - b.make));
// console.log(badSort2);

const goodSortByMake = cars.sort((a, b) => {
  if (a.make < b.make) return -1;
  if (a.make > b.make) return 1;
  return 0;
});
// console.log(goodSortByMake);

// lexicographical comparison
// i have two works apple and application
// first run compares a and a -> the same
// second p and p -> the same
// third p and p -> the same
// four l and l -> the same
// five e and i e < i so -> apple will preced application -1

// if you have uppercase letters the order will change
// uppercase is less than lowercase
// the trend is to .toLowerCase your value and then compare
// apPle will precede apple

// new and better way to compare
// the function returns a number and its also robust because it not only includes american characters, it includes charaters like ã é
const car2 = [
  { make: "mercedes", price: 82000 },
  { make: "jeep", price: 27000 },
  { make: "cadillac", price: 80000 },
  { make: "toyota", price: 35000 },
];

// localeCompare - returns a number in the fashion we did manually
const makeSortLex = car2.sort((a, b) => {
  return a.make.localeCompare(b.make);
});

console.log("make", makeSortLex);

// a method is a function that is called on an Object
// is usually preceded by a . and then has the method name and () parenthesis
