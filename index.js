// MILD
// Create an array called truths and store 3 true facts about yourself
let truths=["i love basketball","my jersey num is 20","im 20 years old"]

// console log the 1st element (element is not same as index!)
console.log(truths[0])

// change the value of the last element
truths[2]="idk"

// console log the last element to check that it's changed
console.log(truths[2])

// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies=["i love to read","i like pizza","ummm"]

// delete a value from the lies array
lies.pop()

// console log the second list to confirm the value is gone
console.log(lies)

// add a new lie to the lies array
lies.push("ummm")
console.log(lies)

// SPICY
// pick the truths or lies array and console log the 1st element
console.log(lies[0])

// prompt the user to guess if it was true or false
let guess=prompt("is this truth or a lie")

// stretch: how could you check they are right or wrong?
if(guess===yes){
  console.log("congrass you got it righ")
  
}else {
  console.log("wrong")
}

