// LIGHTNING EXERCISES
// Use string template literal syntax to create the following sentence from the following variables:
// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"
const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

let sentence = `Hi. My name is ${name}, and I'm ${age} years old. THey say that makes me a ${generationStereotype}. In ${timeSpan} years, I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`
console.log(sentence);

// Exercise 2
//write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t
const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]
const myFavoriteFoods = (foodArray) => {
  const newFood = []
  for (let food of foodArray){
    if (food.startsWith("a") || food.startsWith("t")) {
      newFood.push(food);
    }
  }
  return newFood;

}
console.log(myFavoriteFoods(foodArray)); 

//  Exercise 3
