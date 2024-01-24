if (isCardioDay) {
  console.log('Do cardio today')
} else if (isStrengthDay) {
  console.log('Do Strength today')
} else {
  console.log('Take a rest day')
}

let totalSets = 3
let repsPerSet = 10

for (let set = 1; set <= totalSets; set++) {
  //Do push ups for each set
  console.log('Set ' + set + ':' + exercisesPerSet + 'push ups')
}

let toolbox = {
  hammer: {
    type: 'claw',
    color: 'green',
  },
  screwdriver: {
    type: 'flathead',
    color: 'black',
  },
}
// Accessing data from the object - toolbox
let hammerType = toolbox.hammer.type
let screwdriverColor = toolbox.screwdriver.color

console.log(hammerType) // This would have an output of 'claw'
console.log(screwdriverColor) // This would have an output of 'black'

let toolRow = ['hammer', 'screwdriver', 'drill']

//Accessing data from the array - toolbox
let firstTool = toolRow[0]
let secondTool = toolRow[1]

console.log(firstTool) // This would have an output of 'hammer'
console.log(secondTool) // This would have an output of 'screwdriver'
