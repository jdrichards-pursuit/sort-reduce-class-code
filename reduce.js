// reduce is a robust array method
// it is the declarative version of the accumulator
// declarative we don't see whats going on under the hood we just declare the method
// imperative is when we tell the machine exactly what we want it to do.
// reduce is meant to return one value

// lets say we want to return the sum of all the numbers
const nums = [1, 2, 3, 4];

const imperativeSum = (arr) => {
  let accumulator = 0;
  for (const element of arr) {
    accumulator += element;
  }
  return accumulator;
};

// this is the imperative way that accumulator actually works
const imperativeSum2 = (arr) => {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    accumulator += element;
  }
  return accumulator;
};

// console.log(imperativeSum(nums));

// reduce takes four arguments.
// first is accumulator which auto starts at the first value of the array
// second is the current value in the loop aka the element optional
// third is the index optional
// fourth is the array optional

// accumulator initializes with the first value
// element begins with the second value
const declarativeSum = nums.reduce(
  (accumulator, element) => accumulator + element
);

// console.log(declarativeSum);

const nums2 = [1, 2, 3, 4];

// find the max number in the array

//old way
const imperativeMax = (arr) => {
  let accumulator = null;

  for (const element of arr) {
    if (element > accumuator) accumulator = element;
  }
  return accumulator;
};

// easiest way using Math methods
const max = Math.max(...nums2);
// console.log(max);

// you can't use Math functions and you can't use a for loop
const declarativeMax = nums2.reduce((accumulator, element) => {
  if (element > accumulator) {
    return element;
  }

  return accumulator;
});

// console.log(declarativeMax);

// in reduce the variables for the arguments will often look like this
// acc is accumulator
// curr is currentValue
const declarativeMax2 = nums2.reduce((acc, curr) => {
  if (curr > acc) return curr;
  return acc;
});

let boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

// return the largest object. to fine the largest object multiply width times height

//imperative
const imperativeBox = (arr) => {
  let accumulator = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    if (
      element.width * element.height >
      accumulator.width * accumulator.height
    ) {
      accumulator = element;
    }
  }
  return accumulator;
};

//declarative using reduce

const declarativeBox = boxarts.reduce((accumulator, element) => {
  if (element.width * element.height > accumulator.width * accumulator.height) {
    accumulator = element;
  }
  return accumulator;
});

// console.log(declarativeBox);

// how can we replace the .map method with reduce

// lets say we want to return a list of urls
// map iterates through every item in the array.

const boxMap = boxarts.map((box) => box.url);

// console.log(boxMap);

//how can we do this with reduce
// there are actuall 2 arguments in the reduce method
// the 1st is a callback function
// the second argument is the initial value

const boxMapReduce1 = boxarts.reduce((accumulator, box) => {
  //   console.log(accumulator);
  accumulator.push(box.url);
  return accumulator;
}, []);

// console.log(boxMapReduce1);

// using spread operator
const boxMapReduce2 = boxarts.reduce(
  (accumulator, box) => [...accumulator, box.url],
  []
);

// initial value is []
// create a new array [  'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',]
// initial array will be[  'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',] then we create a new array copy this array and add 2nd index [ 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg','http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',]

// console.log(boxMapReduce2);
// // not to be confused with the rest operator
// const [a, ...rest] = [1,2,3,4]
// a = 1
// b = [2,3,4]

// imperative accumulator with replacing instead of pushing
// const tryNonMutate = (arr) => {
//   let accumulator = [];

//   for (const element of arr) {
//     accumulator = [...accumulator, element.url];
//   }
//   return accumulator;
// };

//[]
//[ 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',]
// [ 'http://cdn-0.nflximg.com/images/2891/Fracture200.jpg',
//   'http://cdn-0.nflximg.com/images/2891/Fracture150.jpg',]

//
// console.log(tryNonMutate(boxarts));

// how about filter?

// lets say we want to return only objects with a width greator than 250

const boxFilter = boxarts.filter((box) => box.width > 250);

// console.log(boxFilter);

const boxReduceFilter = boxarts.reduce((accumulator, box) => {
  if (box.width > 250) {
    accumulator.push(box);
  }
  return accumulator;
}, []);

// console.log(boxReduceFilter);
const shortBoxReduceFilter = boxarts.reduce((accumulator, box) => {
  if (box.width > 250) {
    return [...accumulator, box];
  }
  return accumulator;
}, []);
